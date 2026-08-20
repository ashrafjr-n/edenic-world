import Link from "next/link";
import type { ReactNode } from "react";

/**
 * The luminous Edenic CTA. Owns only the identity of the button — surface,
 * border, glow, hover — and deliberately no size: callers pass height, padding,
 * gap and type scale through `className`, because the hero's CTA is fluid
 * (`clamp`) while in-card CTAs are fixed.
 *
 * `group` is always present so a caller can wiggle its icon on hover with
 * `group-hover:animate-icon-wiggle`, per the project's icon-only hover rule.
 */
const CTA_CLASSES =
  "shadow-edenic-cta group inline-flex items-center rounded-full border-2 border-edenic-cta-border bg-gradient-to-b from-edenic-cta-from to-edenic-cta-to font-bold text-white transition-transform hover:scale-[1.03]";

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
};

export default function Button({
  children,
  className = "",
  href,
  external = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${CTA_CLASSES} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
