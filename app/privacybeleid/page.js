export const metadata = {
  title: 'Privacybeleid — SBP Renovatie',
  description: 'Privacybeleid van SBP Renovatie: welke persoonsgegevens we verwerken en welke rechten je hebt.',
};

const wrap = { maxWidth: 820, margin: '0 auto', padding: '40px 22px 80px', fontFamily: '"IBM Plex Sans", system-ui, sans-serif', color: '#111318', lineHeight: 1.65, fontSize: 17 };
const h1 = { fontFamily: '"Archivo", sans-serif', color: '#173A60', fontSize: 34, margin: '20px 0 6px' };
const h2 = { fontFamily: '"Archivo", sans-serif', color: '#173A60', fontSize: 21, margin: '30px 0 8px' };
const back = { color: '#C56A1C', textDecoration: 'none', fontWeight: 600, fontFamily: '"IBM Plex Mono", monospace', fontSize: 14 };
const meta = { color: '#5A6575', fontSize: 14 };

export default function Privacybeleid() {
  return (
    <main style={wrap}>
      <a href="/" style={back}>← Terug naar sbprenovatie.be</a>
      <h1 style={h1}>Privacybeleid</h1>
      <p style={meta}>Laatst bijgewerkt: augustus 2026</p>

      <p>SBP Renovatie hecht veel belang aan je privacy. In dit beleid leggen we uit welke persoonsgegevens we verzamelen wanneer je onze website gebruikt of een aanvraag doet, waarom we dat doen en welke rechten je hebt.</p>

      <h2 style={h2}>1. Wie zijn wij?</h2>
      <p>SBP Renovatie is verantwoordelijk voor de verwerking van je persoonsgegevens.<br/>
      E-mail: sbprenovatie@gmail.com<br/>
      Telefoon: +32 495 74 66 59</p>

      <h2 style={h2}>2. Welke gegevens verzamelen we?</h2>
      <p>Wanneer je het contactformulier invult, verwerken we de gegevens die je zelf ingeeft: je naam, telefoonnummer, e-mailadres, postcode, het type werk, de oppervlakte, de gewenste startperiode en je bericht.</p>
      <p>Daarnaast worden er, enkel met je toestemming, technische gegevens verzameld via cookies (zoals je IP-adres en surfgedrag). Meer daarover lees je in ons <a href="/cookiebeleid" style={{color:'#C56A1C'}}>Cookiebeleid</a>.</p>

      <h2 style={h2}>3. Waarom verwerken we je gegevens?</h2>
      <p>We gebruiken je gegevens om je aanvraag te behandelen, contact met je op te nemen, een plaatsbezoek in te plannen en een offerte op te maken. De rechtsgrond hiervoor is de uitvoering van of de stappen voorafgaand aan een overeenkomst.</p>
      <p>Voor advertenties en het meten van websiteresultaten (Meta Pixel) verwerken we gegevens uitsluitend op basis van je toestemming, die je geeft via de cookiebanner.</p>

      <h2 style={h2}>4. Waar bewaren we je gegevens?</h2>
      <p>Aanvragen worden opgeslagen in onze database bij Supabase (servers in de Europese Unie, regio Frankfurt) en we ontvangen een melding via Telegram. Onze website wordt gehost bij Vercel.</p>

      <h2 style={h2}>5. Delen met derden</h2>
      <p>We verkopen je gegevens nooit. Om onze dienst te leveren werken we met een aantal verwerkers die je gegevens enkel in onze opdracht mogen gebruiken: Supabase (database), Vercel (hosting) en Telegram (meldingen). Enkel met je toestemming worden gegevens gedeeld met Meta (Facebook/Instagram) voor advertentiedoeleinden.</p>

      <h2 style={h2}>6. Hoelang bewaren we je gegevens?</h2>
      <p>We bewaren je gegevens niet langer dan nodig voor de hierboven beschreven doeleinden, in principe tot maximaal 24 maanden na ons laatste contact, tenzij een wettelijke verplichting een langere bewaartermijn vereist.</p>

      <h2 style={h2}>7. Jouw rechten</h2>
      <p>Je hebt het recht op inzage, correctie, verwijdering, beperking en overdraagbaarheid van je gegevens, het recht om bezwaar te maken en het recht om je toestemming op elk moment in te trekken. Stuur hiervoor een e-mail naar sbprenovatie@gmail.com.</p>
      <p>Je hebt ook het recht om een klacht in te dienen bij de Gegevensbeschermingsautoriteit (www.gegevensbeschermingsautoriteit.be).</p>

      <h2 style={h2}>8. Beveiliging</h2>
      <p>We nemen passende technische en organisatorische maatregelen om je gegevens te beschermen tegen verlies of ongeoorloofd gebruik.</p>

      <h2 style={h2}>9. Wijzigingen</h2>
      <p>We kunnen dit privacybeleid van tijd tot tijd aanpassen. De meest recente versie vind je steeds op deze pagina.</p>

      <h2 style={h2}>10. Contact</h2>
      <p>Vragen over dit beleid of je gegevens? Contacteer ons via sbprenovatie@gmail.com of +32 495 74 66 59.</p>
    </main>
  );
}
