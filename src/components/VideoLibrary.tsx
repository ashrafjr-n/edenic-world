"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { VIDEOS } from "@/lib/videos";
import VideoFilters, { type VideoFilterValue } from "@/components/VideoFilters";
import VideoGrid from "@/components/VideoGrid";

/**
 * Owns the filter state for the video library — filters and grid stay dumb,
 * presentational components so real YouTube/API data can replace VIDEOS
 * later without touching this wiring.
 */
export default function VideoLibrary() {
  const [active, setActive] = useState<VideoFilterValue>("all");

  const videos = useMemo(
    () => (active === "all" ? VIDEOS : VIDEOS.filter((video) => video.category === active)),
    [active],
  );

  return (
    <div>
      <h2 className="font-display flex items-center gap-[10px] text-[22px] font-bold text-white sm:text-[26px]">
        All Videos
        <Star className="size-[19px] fill-edenic-gold text-edenic-gold" aria-hidden="true" />
      </h2>

      <div className="mt-[20px] flex flex-col gap-[14px] sm:flex-row sm:items-center sm:justify-between">
        <div className="-mx-[clamp(22px,3.6vw,48px)] overflow-x-auto px-[clamp(22px,3.6vw,48px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <VideoFilters active={active} onChange={setActive} />
        </div>

        <button
          type="button"
          className="flex shrink-0 items-center gap-[8px] self-start rounded-full border border-white/20 px-[18px] py-[9px] text-[14px] font-semibold text-white/85 transition-colors hover:bg-white/10 sm:self-auto"
        >
          Newest
          <ChevronDown className="size-4" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-[30px]">
        <VideoGrid videos={videos} />
      </div>
    </div>
  );
}
