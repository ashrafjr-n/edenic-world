import { Star } from "lucide-react";
import type { ReactNode } from "react";

/**
 * The heading that opens a section inside a content card — display face with
 * the gold star that marks an Edenic section.
 */
export default function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display flex items-center gap-[10px] text-[22px] font-bold text-white sm:text-[26px]">
      {children}
      <Star className="size-[19px] fill-edenic-gold text-edenic-gold" aria-hidden="true" />
    </h2>
  );
}
