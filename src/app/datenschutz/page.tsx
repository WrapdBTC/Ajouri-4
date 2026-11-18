import type { Metadata } from "next";
import { LegalPage, LegalSection, Lines } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von AJOURI — Informationen zur Verarbeitung personenbezogener Daten.",
};

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export default function Datenschutz() {
  return (
    <LegalPage
      eyebrow="Rechtliches · Stand: November 2026"
      title="Datenschutzerklärung"
      intro="Der Schutz Ihrer persönlichen Daten ist uns wichtig. Mit dieser Datenschutzerklärung informieren wir Sie über die Verarbeitung personenbezogener Daten beim Besuch unserer Website www.ajouri.de."
    >
      <LegalSection title="1. Verantwortliche Stelle">
        <p>
          Verantwortlich für die Verarbeitung personenbezogener Daten im Zusammenhang mit dem
          Betrieb dieser Website ist:
        </p>
        <Lines>
          Michelle Ajouri
          <br />
          AJOURI
          <br />
          Sternstraße 180
          <br />
          86633 Neuburg an der Donau
          <br />
          Deutschland
          <br />
          Telefon: <a href="tel:+4915775056789">+49 1577 5056789</a>
          <br />
          E-Mail: <a href="mailto:michelle@ajouri.de">michelle@ajouri.de</a>
        </Lines>
        <p>AJOURI vereint drei eigenständige Unternehmen unter einem gemeinsamen Internetauftritt.</p>
        <p>
          Soweit personenbezogene Daten im Rahmen der eigenständig angebotenen Dienstleistungen von
          Sabine Ajouri oder Isabelle Ajouri verarbeitet werden, sind die jeweiligen
          Unternehmerinnen grundsätzlich selbst für diese Datenverarbeitung verantwortlich.
        </p>
      </LegalSection>

      <LegalSection title="2. Allgemeine Hinweise zum Datenschutz">
        <p>
          Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der geltenden
          Datenschutzgesetze, insbesondere der Datenschutz-Grundverordnung (DSGVO).
        </p>
        <p>
          Personenbezogene Daten sind Informationen, durch die eine Person direkt oder indirekt
          identifiziert werden kann.
        </p>
        <p>
          Eine Verarbeitung erfolgt insbesondere zur Bereitstellung unserer Website, zur
          Kommunikation mit Interessenten sowie zur Organisation und Durchführung von
          Dienstleistungen.
        </p>
      </LegalSection>

      <LegalSection title="3. Hosting durch IONOS">
        <p>Unsere Website wird bei folgendem Anbieter gehostet:</p>
        <Lines>
          IONOS SE
          <br />
          Elgendorfer Straße 57
          <br />
          56410 Montabaur
          <br />
          Deutschland
        </Lines>
        <p>
          Beim Besuch unserer Website werden technisch erforderliche Informationen verarbeitet.
          Hierzu können insbesondere gehören:
        </p>
        <List
          items={[
            "IP-Adresse",
            "Datum und Uhrzeit des Zugriffs",
            "Aufgerufene Internetseite",
            "Browsertyp und Browserversion",
            "Verwendetes Betriebssystem",
            "Technische Verbindungsdaten",
          ]}
        />
        <p>Diese Informationen dienen der Bereitstellung, Stabilität und Sicherheit unserer Website.</p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im
          sicheren und funktionsfähigen Betrieb unseres Internetauftritts.
        </p>
        <p>
          Die Daten werden nach Maßgabe der technisch erforderlichen und gesetzlichen
          Aufbewahrungsfristen gespeichert und anschließend gelöscht.
        </p>
        <p>
          Weitere Informationen zur Datenverarbeitung finden Sie in der Datenschutzerklärung von
          IONOS:{" "}
          <Ext href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/">
            www.ionos.de/terms-gtc/datenschutzerklaerung
          </Ext>
        </p>
      </LegalSection>

      <LegalSection title="4. IONOS SiteAnalytics">
        <p>Zur statistischen Auswertung der Besucherzugriffe verwenden wir IONOS SiteAnalytics.</p>
        <p>
          Mit diesem Dienst können wir nachvollziehen, welche Bereiche unserer Website besonders
          häufig aufgerufen werden und wie wir unseren Internetauftritt verbessern können.
        </p>
        <p>Nach Angaben von IONOS können dabei folgende Informationen verarbeitet werden:</p>
        <List
          items={[
            "Aufgerufene Seiten und Dateien",
            "Datum und Uhrzeit des Zugriffs",
            "Browsertyp und Browserversion",
            "Betriebssystem",
            "Gerätetyp",
            "Zuvor besuchte Website",
            "IP-Adresse in anonymisierter Form",
          ]}
        />
        <p>
          IONOS gibt an, dass SiteAnalytics keine Cookies verwendet und IP-Adressen nach der
          Übertragung anonymisiert werden.
        </p>
        <p>Die Nutzung dient der statistischen Analyse sowie der Verbesserung unseres Internetangebots.</p>
        <p>
          Die datenschutzrechtliche Grundlage richtet sich nach der konkret verwendeten
          Erfassungstechnik. Soweit eine Einwilligung gesetzlich erforderlich ist, erfolgt die
          entsprechende Datenerhebung erst nach Erteilung dieser Einwilligung.
        </p>
        <p>Weitere Informationen finden Sie in den Datenschutzhinweisen von IONOS.</p>
      </LegalSection>

      <LegalSection title="5. Kontaktaufnahme">
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die von Ihnen
          mitgeteilten personenbezogenen Daten zur Bearbeitung Ihrer Anfrage. Hierzu können gehören:
        </p>
        <List items={["Name", "Telefonnummer", "E-Mail-Adresse", "Inhalt Ihrer Anfrage"]} />
        <p>
          Soweit Ihre Anfrage mit der Anbahnung oder Durchführung eines Vertrags zusammenhängt,
          erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO.
        </p>
        <p>
          Bei sonstigen Anfragen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f
          DSGVO. Unser berechtigtes Interesse liegt in der Bearbeitung eingehender Anfragen.
        </p>
        <p>
          Ihre Daten werden gelöscht, sobald sie für den jeweiligen Zweck nicht mehr erforderlich
          sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </LegalSection>

      <LegalSection title="6. Terminbuchung über Beautinda">
        <p>
          Für die Buchung von kosmetischen Behandlungen bei Michelle Ajouri verwenden wir die externe
          Buchungsplattform Beautinda. Wenn Sie auf den entsprechenden Buchungslink klicken, werden
          Sie auf die Website des Anbieters weitergeleitet.
        </p>
        <p>Im Rahmen einer Terminbuchung können insbesondere folgende Informationen verarbeitet werden:</p>
        <List
          items={[
            "Vor- und Nachname",
            "E-Mail-Adresse",
            "Telefonnummer",
            "Gewählte Behandlung",
            "Gewünschter Termin",
            "Weitere freiwillige Angaben",
          ]}
        />
        <p>
          Die Datenverarbeitung dient der Organisation, Vorbereitung und Durchführung der
          vereinbarten Dienstleistungen. Rechtsgrundlage für die zur Vertragsdurchführung
          erforderliche Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO.
        </p>
        <p>
          Die Datenverarbeitung auf der externen Plattform erfolgt nach Maßgabe der dort geltenden
          Datenschutzbestimmungen. Weitere Informationen:{" "}
          <Ext href="https://beautinda.de/datenschutz">beautinda.de/datenschutz</Ext>
        </p>
      </LegalSection>

      <LegalSection title="7. Terminbuchung über Calendly">
        <p>
          Für die Terminbuchung bei Sabine Ajouri – Vita Sonus verwenden wir einen externen Link zur
          Buchungsplattform Calendly.
        </p>
        <Lines>
          Anbieter: Calendly LLC, USA
        </Lines>
        <p>Bei einer Terminbuchung können insbesondere folgende Daten verarbeitet werden:</p>
        <List items={["Name", "E-Mail-Adresse", "Gewünschter Termin", "Freiwillige Angaben zur Buchung"]} />
        <p>
          Die Daten dienen der Organisation und Durchführung der gebuchten Leistungen.
          Rechtsgrundlage für die zur Vertragsdurchführung erforderliche Verarbeitung ist Art. 6
          Abs. 1 lit. b DSGVO.
        </p>
        <p>
          Calendly kann personenbezogene Daten auch außerhalb der Europäischen Union verarbeiten.
          Für die Verarbeitung auf der Plattform gelten ergänzend die Datenschutzbestimmungen des
          Anbieters. Weitere Informationen:{" "}
          <Ext href="https://calendly.com/legal/privacy-notice">calendly.com/legal/privacy-notice</Ext>
        </p>
      </LegalSection>

      <LegalSection title="8. Verlinkung zum REVIDERM-Onlineshop">
        <p>
          Auf unserer Website bieten wir Ihnen die Möglichkeit, über einen externen Link zum
          REVIDERM-Onlineshop zu gelangen. Der verlinkte Partnershop wird nach dem vorgesehenen
          Geschäftsmodell von der REVIDERM AG betrieben.
        </p>
        <p>
          Beim Anklicken des Links verlassen Sie unsere Website und werden auf die externe Shopseite
          weitergeleitet. Im Rahmen einer Bestellung können insbesondere folgende Daten verarbeitet
          werden:
        </p>
        <List
          items={[
            "Vor- und Nachname",
            "E-Mail-Adresse",
            "Rechnungsadresse",
            "Lieferadresse",
            "Bestelldaten",
            "Zahlungsinformationen",
            "Angaben zu einem Kundenkonto",
          ]}
        />
        <p>
          Die Verarbeitung dieser Daten erfolgt nach Maßgabe der Datenschutzinformationen des
          jeweiligen Shopbetreibers. Bitte beachten Sie die dort bereitgestellten
          Datenschutzinformationen, Verkaufsbedingungen und Informationen zum Widerrufsrecht.
        </p>
        <p>
          Bei einem zugeordneten Partnerlink können zusätzliche Informationen zur Zuordnung des
          Kosmetikinstituts verarbeitet werden. Weitere Informationen zu REVIDERM:{" "}
          <Ext href="https://www.reviderm.com/">www.reviderm.com</Ext>
        </p>
      </LegalSection>

      <LegalSection title="9. Verlinkungen zu Instagram">
        <p>
          Unsere Website enthält Verlinkungen zu den Instagram-Profilen der bei AJOURI vertretenen
          Unternehmerinnen. Instagram wird von Unternehmen der Meta-Gruppe betrieben.
        </p>
        <p>
          Beim bloßen Aufruf unserer Website wird durch gewöhnliche externe Links keine automatische
          Verbindung zu Instagram hergestellt. Erst wenn Sie einen entsprechenden Link anklicken,
          werden Sie auf die externe Plattform weitergeleitet. Ab diesem Zeitpunkt kann der
          Plattformbetreiber personenbezogene Daten verarbeiten.
        </p>
        <p>
          Weitere Informationen zur Datenverarbeitung finden Sie in den Datenschutzbestimmungen von
          Instagram beziehungsweise Meta.
        </p>
      </LegalSection>

      <LegalSection title="10. Cookies und ähnliche Technologien">
        <p>
          Unsere Website kann technisch erforderliche Funktionen einsetzen, die für ihren sicheren
          und ordnungsgemäßen Betrieb notwendig sind.
        </p>
        <p>
          Soweit einwilligungspflichtige Cookies oder vergleichbare Technologien eingesetzt werden,
          erfolgt ihre Verwendung ausschließlich nach Maßgabe der geltenden gesetzlichen
          Bestimmungen. Eine erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft
          widerrufen werden.
        </p>
      </LegalSection>

      <LegalSection title="11. Speicherdauer">
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Zwecke
          erforderlich ist. Eine längere Speicherung erfolgt, soweit gesetzliche
          Aufbewahrungspflichten oder andere rechtliche Gründe bestehen.
        </p>
        <p>
          Nach Wegfall des jeweiligen Verarbeitungszwecks und Ablauf etwaiger Aufbewahrungsfristen
          werden die Daten gelöscht.
        </p>
      </LegalSection>

      <LegalSection title="12. Ihre Datenschutzrechte">
        <p>Sie haben im Rahmen der gesetzlichen Voraussetzungen folgende Rechte:</p>
        <ul>
          <li>
            <strong className="font-medium text-ink">Auskunft:</strong> Sie können Auskunft über die
            Verarbeitung Ihrer personenbezogenen Daten verlangen.
          </li>
          <li>
            <strong className="font-medium text-ink">Berichtigung:</strong> Sie können die
            Berichtigung unrichtiger personenbezogener Daten verlangen.
          </li>
          <li>
            <strong className="font-medium text-ink">Löschung:</strong> Sie können unter den
            gesetzlichen Voraussetzungen die Löschung Ihrer personenbezogenen Daten verlangen.
          </li>
          <li>
            <strong className="font-medium text-ink">Einschränkung:</strong> Sie können unter
            bestimmten Voraussetzungen die Einschränkung der Verarbeitung verlangen.
          </li>
          <li>
            <strong className="font-medium text-ink">Datenübertragbarkeit:</strong> Sie können unter
            den gesetzlichen Voraussetzungen die Übertragung Ihrer Daten verlangen.
          </li>
          <li>
            <strong className="font-medium text-ink">Widerspruch:</strong> Sie können einer
            Verarbeitung widersprechen, soweit Ihnen ein entsprechendes Widerspruchsrecht zusteht.
          </li>
          <li>
            <strong className="font-medium text-ink">Widerruf:</strong> Eine erteilte Einwilligung
            können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
          </li>
        </ul>
        <p>
          Darüber hinaus haben Sie das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde
          zu beschweren. Die genannten Rechte ergeben sich insbesondere aus Art. 7 sowie Art. 15 bis
          21 DSGVO.
        </p>
      </LegalSection>

      <LegalSection title="13. Datensicherheit">
        <p>
          Wir treffen angemessene technische und organisatorische Maßnahmen, um personenbezogene
          Daten vor unbefugtem Zugriff, Verlust und Missbrauch zu schützen. Unsere Website verwendet
          eine verschlüsselte HTTPS-Verbindung.
        </p>
      </LegalSection>

      <LegalSection title="14. Änderungen dieser Datenschutzerklärung">
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich die technischen
          Funktionen unserer Website, die verwendeten Dienste oder gesetzliche Anforderungen ändern.
          Es gilt die jeweils veröffentlichte Fassung.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
