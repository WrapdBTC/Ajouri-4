import { Img } from "./Img";
import { Eyebrow } from "./SectionIntro";

type Props = {
  image: string;
  alt: string;
  position?: string;
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  actions: React.ReactNode;
  meta?: React.ReactNode;
  size?: "full" | "page";
  /** Tighter poetic lead — Sabine ritual style */
  leadClassName?: string;
  /**
   * "overlay" = large stage photo beside the copy, bleeding to the window edge.
   * "split" = copy left, portrait frame right — keeps smaller images sharp.
   */
  layout?: "overlay" | "split";
  /** Split only: frame shape — "landscape" for wide images. */
  imageShape?: "portrait" | "landscape";
};

/**
 * Hero. "overlay" (name kept for the call sites) is now a clean stage:
 * copy on the page colour, photo beside it at full strength — nothing is
 * laid over the photograph, so skin tones and faces stay as shot.
 */
export function Hero({
  image,
  alt,
  position,
  eyebrow,
  title,
  lead,
  actions,
  meta,
  size = "full",
  leadClassName = "",
  layout = "overlay",
  imageShape = "portrait",
}: Props) {
  const isPage = size === "page";

  if (layout === "split") {
    return (
      <section className="bg-surface">
        <div className="container-x grid gap-10 pt-12 pb-14 md:grid-cols-12 md:items-center md:gap-14 md:pt-16 md:pb-20">
          <div className="md:col-span-6">
            <div className="anim-rise">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1 className="anim-rise anim-rise-1 display-2 mt-5 text-ink">{title}</h1>
            <p className={`lead anim-rise anim-rise-2 mt-5 !max-w-lg ${leadClassName}`}>{lead}</p>
            <div className="anim-rise anim-rise-3 mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center [&>a]:w-full sm:[&>a]:w-auto">
              {actions}
            </div>
            {meta && (
              <div className="anim-rise anim-rise-4 mt-8 border-t border-line pt-5 text-[0.85rem] text-ink/90">
                {meta}
              </div>
            )}
          </div>
          <div
            className={`anim-settle relative overflow-hidden ${
              imageShape === "landscape"
                ? "aspect-[4/3] md:col-span-6 md:col-start-7"
                : "aspect-[4/5] md:col-span-5 md:col-start-8 md:max-h-[34rem]"
            }`}
          >
            <Img
              src={image}
              alt={alt}
              position={position}
              priority
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-bg md:grid md:grid-cols-12">
      {/* Photo stays untouched — no wash, no scrim. Phone: stacked above the copy.
          Desktop: right-hand stage running to the edge of the window. */}
      <div
        className={`relative aspect-[4/5] w-full overflow-hidden md:order-2 md:col-span-6 md:aspect-auto lg:col-span-7 ${
          isPage ? "md:min-h-[26rem]" : "md:min-h-[min(calc(100svh-6.25rem),50rem)]"
        }`}
      >
        <Img
          src={image}
          alt={alt}
          position={position}
          priority
          className="anim-settle absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="flex md:order-1 md:col-span-6 md:items-center lg:col-span-5">
        <div className="w-full px-[1.15rem] pt-9 pb-12 md:py-16 md:pr-10 md:pl-[max(2.75rem,calc((100vw-86rem)/2+2.75rem))] xl:pr-14 xl:pl-[max(3.5rem,calc((100vw-86rem)/2+3.5rem))]">
          <div className="anim-rise">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1 className={`anim-rise anim-rise-1 mt-5 text-ink ${isPage ? "display-2" : "display-hero"}`}>
            {title}
          </h1>
          <p className={`lead anim-rise anim-rise-2 ${isPage ? "mt-4" : "mt-6"} ${leadClassName}`}>
            {lead}
          </p>
          <div
            className={`anim-rise anim-rise-3 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center [&>a]:w-full sm:[&>a]:w-auto ${isPage ? "mt-6" : "mt-8 md:mt-9"}`}
          >
            {actions}
          </div>
          {meta && (
            <div className="anim-rise anim-rise-4 mt-8 border-t border-line pt-5 text-[0.85rem] text-ink/90">
              {meta}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
