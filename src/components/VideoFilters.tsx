"use client";

import { VIDEO_FILTERS } from "@/data/videos";
import type { VideoCategory } from "@/types/content";

export type VideoFilterValue = "all" | VideoCategory;

export default function VideoFilters({
  active,
  onChange,
}: {
  active: VideoFilterValue;
  onChange: (value: VideoFilterValue) => void;
}) {
  return (
    <ul className="flex flex-nowrap gap-[10px]">
      {VIDEO_FILTERS.map(({ label, value }) => {
        const isActive = value === active;
        return (
          <li key={value}>
            <button
              type="button"
              onClick={() => onChange(value)}
              aria-pressed={isActive}
              className={`rounded-full px-[20px] py-[9px] text-[14px] font-semibold whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-gradient-to-r from-edenic-bright-purple to-edenic-pink text-white"
                  : "border border-white/20 text-white/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
