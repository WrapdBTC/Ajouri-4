import NextLink from "next/link";
import { Img } from "./Img";
import { Arrow } from "./Button";

type Props = {
  href: string;
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  position?: string;
  alt?: string;
  /** Distinct aspect — prefer same aspect across sibling covers */
  aspect?: "tall" | "wide" | "square";
  className?: string;
};

/**
 * Editorial cover teaser: clean photograph, caption underneath.
 * Stretches in equal grids via h-full.
 */
export function EditorialCover({
  href,
  eyebrow,
  title,
  text,
  image,
  position,
  alt = "",
  aspect = "tall",
  className = "",
}: Props) {
  const ratio =
    aspect === "wide"
      ? "aspect-[16/10]"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-[3/4]";

  return (
    <NextLink
      href={href}
      className={`reveal group group/btn flex h-full flex-col ${className}`}
    >
      <div className={`ken-wrap relative overflow-hidden bg-surface ${ratio}`}>
        <Img
          src={image}
          alt={alt}
          position={position}
          className="ken-img absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <p className="eyebrow mt-5 text-accent-text">{eyebrow}</p>
      <h3 className="display-3 mt-2 text-ink">{title}</h3>
      <p className="body-copy mt-3 flex-1 !max-w-none text-[0.95rem]">{text}</p>
      <span className="tap-row eyebrow mt-4 text-ink">
        Weiterlesen <Arrow />
      </span>
    </NextLink>
  );
}
