type Item = { label: string; value: string };

type Props = {
  items: Item[];
  className?: string;
};

/** Horizontal meta strip — address / hours / craft tags. */
export function MetaRow({ items, className = "" }: Props) {
  return (
    <ul
      className={`grid grid-cols-1 gap-5 border-y border-line py-5 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-5 md:gap-x-10 md:py-6 ${className}`}
    >
      {items.map((item) => (
        <li key={item.label} className="reveal sm:min-w-[8rem]">
          <p className="eyebrow text-accent-text">{item.label}</p>
          <p className="mt-1.5 font-display text-xl leading-tight text-ink md:text-[1.35rem]">
            {item.value}
          </p>
        </li>
      ))}
    </ul>
  );
}

/** Compact fact strip for editorial breaks. */
export function StatStrip({
  items,
  className = "",
}: {
  items: { value: string; label: string }[];
  className?: string;
}) {
  const cols =
    items.length <= 2
      ? "sm:grid-cols-2"
      : items.length === 3
        ? "sm:grid-cols-3"
        : items.length === 4
          ? "sm:grid-cols-2 lg:grid-cols-4"
          : "sm:grid-cols-3 lg:grid-cols-5";

  return (
    <ul className={`grid grid-cols-2 border-t border-line ${cols} ${className}`}>
      {items.map((item, i) => (
        <li
          key={item.label}
          className={`reveal border-b border-line py-6 pr-4 sm:py-7 sm:pr-8 lg:border-b-0 ${
            // Divider sits left of a cell, with breathing room before the text
            i % 2 === 1 ? "border-l pl-4 sm:pl-8" : ""
          } ${i > 0 ? "lg:border-l lg:pl-8" : ""} ${
            i === items.length - 1 && items.length % 2 === 1 ? "col-span-2 sm:col-span-1" : ""
          }`}
        >
          <p className="font-display text-[1.6rem] leading-none text-ink sm:text-[1.9rem] lg:text-[2rem] xl:text-[2.4rem]">
            {item.value}
          </p>
          <p className="mt-3 max-w-[22ch] text-[0.875rem] leading-snug text-muted">{item.label}</p>
        </li>
      ))}
    </ul>
  );
}
