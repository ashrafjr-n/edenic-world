"use client";

import { useMemo, useState } from "react";
import { Star } from "lucide-react";
import type { Video, VideoFilter, VideoFilterValue } from "@/types/content";
import VideoFilters from "@/components/VideoFilters";
import VideoGrid from "@/components/VideoGrid";

/**
 * Owns the filter state for the video library. It receives its videos and
 * filters as props and never reaches for a data module itself, so the same
 * component works against static data today and a real API later.
 */
export default function VideoLibrary({
  videos,
  filters,
}: {
  videos: Video[];
  filters: VideoFilter[];
}) {
  const [active, setActive] = useState<VideoFilterValue>("all");

  const visibleVideos = useMemo(
    () => (active === "all" ? videos : videos.filter((video) => video.category === active)),
    [videos, active],
  );

  return (
    <div>
      <h2 className="font-display flex items-center gap-[10px] text-[22px] font-bold text-white sm:text-[26px]">
        All Videos
        <Star className="size-[19px] fill-edenic-gold text-edenic-gold" aria-hidden="true" />
      </h2>

      <div className="mt-[20px] -mx-[clamp(22px,3.6vw,48px)] overflow-x-auto px-[clamp(22px,3.6vw,48px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <VideoFilters filters={filters} active={active} onChange={setActive} />
      </div>

      <div className="mt-[30px]">
        <VideoGrid videos={visibleVideos} />
      </div>
    </div>
  );
}
