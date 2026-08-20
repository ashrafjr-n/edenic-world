"use client";

import { useMemo, useState } from "react";
import { Star } from "lucide-react";
import { VIDEOS } from "@/data/videos";
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

      <div className="mt-[20px] -mx-[clamp(22px,3.6vw,48px)] overflow-x-auto px-[clamp(22px,3.6vw,48px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <VideoFilters active={active} onChange={setActive} />
      </div>

      <div className="mt-[30px]">
        <VideoGrid videos={videos} />
      </div>
    </div>
  );
}
