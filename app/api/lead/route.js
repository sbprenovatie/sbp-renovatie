export const runtime = 'nodejs';

export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false, error: 'bad request' }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return Response.json({ ok: false, error: 'server not configured' }, { status: 500 });
  }

  // basis-controle: naam + (telefoon of email) verplicht
  const naam = (data.naam || '').toString().slice(0, 200);
  const telefoon = (data.telefoon || '').toString().slice(0, 60);
  const email = (data.email || '').toString().slice(0, 200);
  if (!naam || (!telefoon && !email)) {
    return Response.json({ ok: false, error: 'missing fields' }, { status: 400 });
  }

  const row = {
    naam,
    telefoon,
    email,
    postcode: (data.postcode || '').toString().slice(0, 20),
    type_werk: (data.type_werk || '').toString().slice(0, 100),
    oppervlakte: (data.oppervlakte || '').toString().slice(0, 40),
    startperiode: (data.startperiode || '').toString().slice(0, 60),
    bericht: (data.bericht || '').toString().slice(0, 4000),
  };

  // 1) altijd opslaan in de database
  const res = await fetch(url.replace(/\/$/, '') + '/rest/v1/leads', {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: 'Bearer ' + key,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(row),
  });

  if (!res.ok) {
    const t = await res.text();
    return Response.json({ ok: false, error: t }, { status: 500 });
  }

  // 2) Telegram-melding (indien ingesteld) — mag falen zonder de aanvraag te breken
  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChat = process.env.TELEGRAM_CHAT_ID;
  if (tgToken && tgChat) {
    const text =
      '🔔 Nieuwe aanvraag — SBP Renovatie\n\n' +
      '👤 Naam: ' + (row.naam || '-') + '\n' +
      '📞 Telefoon: ' + (row.telefoon || '-') + '\n' +
      '✉️ E-mail: ' + (row.email || '-') + '\n' +
      '📍 Postcode: ' + (row.postcode || '-') + '\n' +
      '🛠 Werk: ' + (row.type_werk || '-') + '\n' +
      '📐 Oppervlakte: ' + (row.oppervlakte || '-') + ' m²\n' +
      '🗓 Start: ' + (row.startperiode || '-') + '\n' +
      '📝 Bericht: ' + (row.bericht || '-');
    try {
      await fetch('https://api.telegram.org/bot' + tgToken + '/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: tgChat, text: text }),
      });
    } catch (e) {
      // melding faalde niet erg: de lead staat al veilig in de database
    }
  }

  // 3) Optioneel: e-mail via Resend (alleen als ingesteld)
  const rk = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL;
  if (rk && to) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + rk, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'SBP Renovatie <onboarding@resend.dev>',
          to: [to],
          subject: 'Nieuwe aanvraag via de website',
          text:
            'Naam: ' + row.naam + '\n' +
            'Telefoon: ' + row.telefoon + '\n' +
            'E-mail: ' + row.email + '\n' +
            'Postcode: ' + row.postcode + '\n' +
            'Type werk: ' + row.type_werk + '\n' +
            'Oppervlakte: ' + row.oppervlakte + '\n' +
            'Startperiode: ' + row.startperiode + '\n' +
            'Bericht: ' + row.bericht + '\n',
        }),
      });
    } catch (e) {}
  }

  return Response.json({ ok: true });
}
