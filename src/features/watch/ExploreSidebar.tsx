import { BookOpen, ChevronRight, Lightbulb, Music2, Sparkles, Star } from "lucide-react";
import Button from "@/components/Button";

/** `ready: false` items get the same dimmed, non-clickable treatment as the
 *  Header nav — none of these have a real destination yet (no ranking, no
 *  per-category route, no `/learn`), so none are wired to a link. */
const EXPLORE_LINKS = [
  { label: "Top Videos", icon: Star, tint: "bg-edenic-gold" },
  { label: "Popular Songs", icon: Music2, tint: "bg-edenic-cyan" },
  { label: "Learning Lessons", icon: BookOpen, tint: "bg-edenic-bright-purple" },
  { label: "New Releases", icon: Sparkles, tint: "bg-edenic-bright-pink" },
] as const;

export default function ExploreSidebar() {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="shadow-edenic rounded-[28px] border border-white/10 bg-edenic-deep-purple/35 p-[clamp(20px,2.2vw,28px)]">
        <h2 className="font-display text-[20px] font-bold text-white">Explore</h2>

        <ul className="mt-[16px] flex flex-col gap-[10px]">
          {EXPLORE_LINKS.map(({ label, icon: Icon, tint }) => (
            <li key={label}>
              <span
                aria-disabled="true"
                title="Coming soon"
                className="flex cursor-not-allowed items-center gap-[14px] rounded-[18px] bg-white/5 px-[16px] py-[13px] opacity-55"
              >
                <span className={`grid size-[36px] shrink-0 place-items-center rounded-full ${tint}`}>
                  <Icon className="size-[17px] text-white" aria-hidden="true" />
                </span>
                <span className="flex-1 text-[15px] font-semibold text-white">{label}</span>
                <ChevronRight className="size-[18px] text-white" aria-hidden="true" />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-card-watch shadow-edenic relative overflow-hidden rounded-[28px] p-[clamp(20px,2.2vw,28px)]">
        <Lightbulb
          className="pointer-events-none absolute -right-3 -bottom-3 size-[100px] text-white/10"
          aria-hidden="true"
        />

        <h2 className="font-display relative text-[19px] leading-[1.2] font-bold text-white">
          Have a favorite video idea?
        </h2>
        <p className="relative mt-[8px] text-[14px] font-medium text-white/80">
          Tell us what you&apos;d like to see next!
        </p>

        <Button href="#" className="relative mt-[18px] h-[46px] gap-[8px] px-[22px] text-[14px]">
          <Lightbulb className="size-[15px]" aria-hidden="true" />
          Send Idea
        </Button>
      </div>
    </div>
  );
}
