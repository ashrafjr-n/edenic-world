import type { ReactNode } from "react";

/**
 * The single horizontal rhythm for the whole site. Every section lines its
 * content up against this so headlines, copy and cards share one left edge.
 */
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1640px] px-6 sm:px-10 xl:px-0 ${className}`}
    >
      {children}
    </div>
  );
}
