"use client";

import { useState } from "react";
import Image from "next/image";
import { BookOpen, Music2, Play, Sparkles, Star } from "lucide-react";
import type { Video, VideoCategory } from "@/lib/videos";

const CATEGORY_ICON: Record<VideoCategory, typeof Music2> = {
  songs: Music2,
  learning: BookOpen,
  stories: Sparkles,
  fun: Star,
};

export default function VideoCard({ video }: { video: Video }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const CategoryIcon = CATEGORY_ICON[video.category];

  return (
    <li>
      <div className="group">
        <div
          className={`relative aspect-video overflow-hidden rounded-[22px] bg-gradient-to-br ${video.thumbnail} shadow-edenic transition-all duration-300 group-hover:-translate-y-1`}
        >
          {isPlaying && video.youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
              title={video.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 size-full"
            />
          ) : (
            <>
              {video.youtubeId && (
                <>
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label={`Play ${video.title}`}
                    className="absolute inset-0 size-full"
                  />
                  <Image
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="pointer-events-none object-cover"
                  />
                </>
              )}
              <span className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />
              <span className="pointer-events-none absolute inset-0 grid place-items-center">
                <span className="grid size-[52px] place-items-center rounded-full bg-white/25 text-white ring-1 ring-white/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/35">
                  <Play className="size-[22px] translate-x-[1px] fill-white text-white" aria-hidden="true" />
                </span>
              </span>
              {video.duration && (
                <span className="pointer-events-none absolute right-3 bottom-3 rounded-full bg-edenic-bg/70 px-[10px] py-[3px] text-[12px] font-semibold text-white backdrop-blur-sm">
                  {video.duration}
                </span>
              )}
            </>
          )}
        </div>

        <div className="mt-[14px]">
          <h3 className="font-display text-[17px] font-bold text-white">{video.title}</h3>
          <p className="mt-[4px] flex items-center gap-[6px] text-[14px] font-medium text-white/70">
            <CategoryIcon className="size-[15px] text-edenic-lavender" aria-hidden="true" />
            {video.description}
          </p>
        </div>
      </div>
    </li>
  );
}
