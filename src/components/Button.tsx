import Link from "next/link";
import type { ReactNode } from "react";

/**
 * The Edenic liquid-glass CTA: a frosted pill floating over four colour
 * blobs, refracted through `backdrop-filter` and swapping hue on hover.
 * Owns only the identity of the button — surface, blobs, glow, hover —
 * deliberately no size: callers pass height, padding, gap and type scale
 * via `className`, because the hero's CTA is fluid (`clamp`) while in-card
 * CTAs are fixed. `className` lands on the inner glass surface (not the
 * outer element) so the outer keeps shrink-wrapping to it and the blobs'
 * percentage positions stay correct for any size, from an icon-only square
 * to the wide hero CTA. `w-fit` makes that shrink-wrap explicit: without it,
 * the outer silently blockifies and stretches to fill the cross axis the
 * moment a caller drops the button straight into a flex/grid container that
 * doesn't itself center its items (e.g. a `flex flex-col` page wrapper).
 *
 * Never a border — a `border-*` here would sit outside the blobs' padding-box
 * (their `absolute`/`h-full` sizing stops at the padding edge, not the
 * border edge), so any border colour, even "transparent", shows the page
 * background through as a stray ring around the pill.
 *
 * `group` is always present so a caller can wiggle its icon on hover with
 * `group-hover:animate-icon-wiggle`, per the project's icon-only hover rule.
 */
const OUTER_CLASSES =
  "group relative isolate inline-flex w-fit cursor-pointer overflow-hidden rounded-full text-white shadow-edenic-cta";

const GLASS_CLASSES =
  "bg-button-glass relative z-[1] inline-flex items-center rounded-full font-bold backdrop-blur-[10px]";

const BLOB_BASE =
  "pointer-events-none absolute -z-10 h-full w-[62%] rounded-full transition-[background-color,transform] duration-300 ease-in-out group-hover:scale-125";

const BLOBS = [
  { position: "top-0 left-0", color: "bg-edenic-blob-orange group-hover:bg-edenic-blob-blue" },
  { position: "top-0 left-[22%]", color: "bg-edenic-blob-purple group-hover:bg-edenic-blob-pink" },
  { position: "-top-[33%] left-[50%]", color: "bg-edenic-blob-pink group-hover:bg-edenic-blob-purple" },
  { position: "top-[53%] left-[54%]", color: "bg-edenic-blob-blue group-hover:bg-edenic-blob-orange" },
];

type ButtonProps = {
  children: ReactNode;
  /** Size, spacing and any layout classes for this particular instance. */
  className?: string;
  /** Renders a link when set, a plain button otherwise. */
  href?: string;
  /** Opens the link in a new tab, safely. Ignored without `href`. */
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  /** Required for an icon-only button — there's no visible text for a
   *  screen reader to announce otherwise. */
  ariaLabel?: string;
};

function Blobs() {
  return (
    <>
      {BLOBS.map((blob, i) => (
        <span key={i} aria-hidden="true" className={`${BLOB_BASE} ${blob.position} ${blob.color}`} />
      ))}
    </>
  );
}

export default function Button({
  children,
  className = "",
  href,
  external = false,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const content = (
    <>
      <Blobs />
      <span className={`${GLASS_CLASSES} ${className}`}>{children}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={OUTER_CLASSES}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className={OUTER_CLASSES}>
      {content}
    </button>
  );
}
