import FeaturedVideo from "@/features/watch/FeaturedVideo";
import type { Video } from "@/types/content";

/**
 * Opens the page: the headline that used to live inside WatchHero's
 * full-bleed art, now paired directly with the Featured Video instead.
 * Plain on the page background — no glass panel, no glow — the video and
 * the copy carry the section on their own.
 */
export default function WatchIntro({ video }: { video: Video }) {
  return (
    <div className="grid gap-[36px] lg:grid-cols-[1fr_1.4fr] lg:items-center">
      <div>
        <h1 className="font-display text-[clamp(34px,min(4.6vw,7vh),72px)] leading-[1.05] font-bold tracking-[-0.005em]">
          <span className="text-white">Watch </span>
          <span className="text-imagine-gradient">&amp; Enjoy</span>
        </h1>

        <p className="mt-[16px] text-[clamp(16px,min(1.5vw,2.3vh),24px)] leading-[1.35] font-medium text-white">
          <span className="block">Sing, dance and learn with</span>
          <span className="block">
            <span className="font-bold text-edenic-nova">Nova</span>,{" "}
            <span className="font-bold text-edenic-pinki">Pinki</span> &{" "}
            <span className="font-bold text-edenic-bloo">Bloo</span>!
          </span>
        </p>
      </div>

      <FeaturedVideo video={video} />
    </div>
  );
}
