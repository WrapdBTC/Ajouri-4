import { PageShell } from "./PageShell";
import { Eyebrow } from "./SectionIntro";

/** Quiet long-form layout for Impressum and Datenschutz. */
export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <PageShell theme="hub">
      <section className="border-b border-line bg-surface">
        <div className="container-x pb-10 pt-14 md:pb-14 md:pt-20">
          <div className="anim-rise max-w-2xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="display-2 mt-5">{title}</h1>
            {intro && <div className="lead mt-5 !max-w-[42ch]">{intro}</div>}
          </div>
        </div>
      </section>
      <section className="section-y-tight">
        <div className="container-x">
          <div className="legal mx-auto max-w-3xl">{children}</div>
        </div>
      </section>
    </PageShell>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-8 first:border-t-0 first:pt-0 md:py-10">
      <h2 className="font-display text-[1.7rem] leading-tight md:text-[2rem]">{title}</h2>
      <div className="body-copy mt-4 !max-w-none space-y-3 text-[0.98rem] [&_a]:text-accent-text [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

/** Address block without paragraph gaps between lines. */
export function Lines({ children }: { children: React.ReactNode }) {
  return <p className="leading-relaxed">{children}</p>;
}
