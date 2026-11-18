import type { Metadata } from "next";
import { LegalPage, LegalSection, Lines } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von AJOURI — Michelle Ajouri, Sternstraße 180, 86633 Neuburg an der Donau.",
  robots: { index: true, follow: true },
};

export default function Impressum() {
  return (
    <LegalPage eyebrow="Rechtliches" title="Impressum" intro="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)">
      <LegalSection title="Anbieterin und Verantwortliche für diese Website">
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
        </Lines>
      </LegalSection>

      <LegalSection title="Kontakt">
        <Lines>
          Telefon: <a href="tel:+4915775056789">+49 1577 5056789</a>
          <br />
          E-Mail: <a href="mailto:michelle@ajouri.de">michelle@ajouri.de</a>
          <br />
          Website: <a href="https://www.ajouri.de">www.ajouri.de</a>
        </Lines>
      </LegalSection>

      <LegalSection title="Über AJOURI">
        <p>AJOURI vereint drei eigenständige Unternehmen unter einem gemeinsamen Namen.</p>
        <Lines>
          <strong className="font-medium text-ink">Michelle Ajouri</strong>
          <br />
          Kosmetik | Ganzheitliche Haut- &amp; Darmgesundheit
        </Lines>
        <Lines>
          <strong className="font-medium text-ink">Sabine Ajouri – Vita Sonus</strong>
          <br />
          Meditation | Klangreisen | Klangmassagen
        </Lines>
        <Lines>
          <strong className="font-medium text-ink">Isabelle Ajouri – Inkabell</strong>
          <br />
          Tattoo-Kunst
        </Lines>
        <p>
          Die jeweiligen Dienstleistungen werden eigenverantwortlich von den selbstständigen
          Unternehmerinnen angeboten und erbracht. Vertragspartnerin für die jeweilige Dienstleistung
          ist die entsprechend gekennzeichnete Unternehmerin.
        </p>
      </LegalSection>

      <LegalSection title="Verantwortlichkeit für die Website">
        <p>Verantwortlich für den allgemeinen Internetauftritt von AJOURI ist:</p>
        <Lines>
          Michelle Ajouri
          <br />
          Sternstraße 180
          <br />
          86633 Neuburg an der Donau
          <br />
          Deutschland
        </Lines>
      </LegalSection>

      <LegalSection title="Verbraucherstreitbeilegung">
        <p>
          Ich bin weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
