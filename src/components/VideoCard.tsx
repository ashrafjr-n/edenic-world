import { BookOpen, Music2, Play, Sparkles, Star } from "lucide-react";
import type { Video, VideoCategory } from "@/lib/videos";

const CATEGORY_ICON: Record<VideoCategory, typeof Music2> = {
  songs: Music2,
  learning: BookOpen,
  stories: Sparkles,
  fun: Star,
};

export default function VideoCard({ video }: { video: Video }) {
  const CategoryIcon = CATEGORY_ICON[video.category];

  return (
    <li>
      <button type="button" className="group block w-full text-left">
        <div
          className={`relative aspect-video overflow-hidden rounded-[22px] bg-gradient-to-br ${video.thumbnail} shadow-edenic transition-all duration-300 group-hover:-translate-y-1`}
        >
          <span className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-[52px] place-items-center rounded-full bg-white/25 text-white ring-1 ring-white/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/35">
              <Play className="size-[22px] translate-x-[1px] fill-white text-white" aria-hidden="true" />
            </span>
          </span>
          <span className="absolute right-3 bottom-3 rounded-full bg-edenic-bg/70 px-[10px] py-[3px] text-[12px] font-semibold text-white backdrop-blur-sm">
            {video.duration}
          </span>
        </div>

        <div className="mt-[14px]">
          <h3 className="font-display text-[17px] font-bold text-white">{video.title}</h3>
          <p className="mt-[4px] flex items-center gap-[6px] text-[14px] font-medium text-white/70">
            <CategoryIcon className="size-[15px] text-edenic-lavender" aria-hidden="true" />
            {video.description}
          </p>
        </div>
      </button>
    </li>
  );
}
