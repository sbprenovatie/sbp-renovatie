export const metadata = {
  title: 'Cookiebeleid — SBP Renovatie',
  description: 'Cookiebeleid van SBP Renovatie: welke cookies we gebruiken en hoe je je toestemming beheert.',
};

const wrap = { maxWidth: 820, margin: '0 auto', padding: '40px 22px 80px', fontFamily: '"IBM Plex Sans", system-ui, sans-serif', color: '#111318', lineHeight: 1.65, fontSize: 17 };
const h1 = { fontFamily: '"Archivo", sans-serif', color: '#173A60', fontSize: 34, margin: '20px 0 6px' };
const h2 = { fontFamily: '"Archivo", sans-serif', color: '#173A60', fontSize: 21, margin: '30px 0 8px' };
const back = { color: '#C56A1C', textDecoration: 'none', fontWeight: 600, fontFamily: '"IBM Plex Mono", monospace', fontSize: 14 };
const meta = { color: '#5A6575', fontSize: 14 };

export default function Cookiebeleid() {
  return (
    <main style={wrap}>
      <a href="/" style={back}>← Terug naar sbprenovatie.be</a>
      <h1 style={h1}>Cookiebeleid</h1>
      <p style={meta}>Laatst bijgewerkt: augustus 2026</p>

      <p>Deze website gebruikt cookies. In dit beleid leggen we uit wat cookies zijn, welke we gebruiken en hoe je je keuze kan beheren.</p>

      <h2 style={h2}>1. Wat zijn cookies?</h2>
      <p>Cookies zijn kleine tekstbestanden die op je toestel worden geplaatst wanneer je een website bezoekt. Ze helpen de website goed te werken en kunnen gebruikt worden om je bezoek te meten of advertenties te verbeteren.</p>

      <h2 style={h2}>2. Welke cookies gebruiken we?</h2>
      <p><strong>Noodzakelijke cookies.</strong> Deze onthouden je cookiekeuze zodat we die niet telkens opnieuw hoeven te vragen. Ze zijn altijd actief en verzamelen geen gegevens voor marketing.</p>
      <p><strong>Marketingcookies (Meta Pixel).</strong> Deze worden enkel geplaatst nadat je op &laquo;Alles toestaan&raquo; klikt. Ze helpen ons meten hoe bezoekers de website gebruiken en om onze advertenties op Facebook en Instagram te tonen aan de juiste mensen.</p>
      <p><strong>Cookies van ingesloten video&apos;s (YouTube).</strong> Wanneer je een video op onze site afspeelt, kan YouTube cookies plaatsen. We gebruiken hiervoor de privacyvriendelijke modus (youtube-nocookie).</p>

      <h2 style={h2}>3. Je toestemming</h2>
      <p>Bij je eerste bezoek vragen we via een banner welke cookies je toestaat. Kies je &laquo;Alleen noodzakelijke&raquo;, dan worden er geen marketingcookies geplaatst. Kies je &laquo;Alles toestaan&raquo;, dan activeren we ook de Meta Pixel.</p>

      <h2 style={h2}>4. Je keuze wijzigen</h2>
      <p>Je kan je toestemming op elk moment intrekken of wijzigen door de cookies in je browser te wissen. Bij je volgende bezoek verschijnt de banner dan opnieuw. Via je browserinstellingen kan je cookies ook bekijken, blokkeren of verwijderen.</p>

      <h2 style={h2}>5. Meer informatie</h2>
      <p>Meer over hoe we met je gegevens omgaan lees je in ons <a href="/privacybeleid" style={{color:'#C56A1C'}}>Privacybeleid</a>. Vragen? Contacteer ons via sbprenovatie@gmail.com.</p>
    </main>
  );
}
