"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import type { Video } from "@/types/content";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@EdenicWorld-kids";

export default function FeaturedVideo({ video }: { video: Video }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const play = () => video.youtubeId && setIsPlaying(true);

  return (
    <div>
      <SectionHeader>Featured Video</SectionHeader>

      <div className="mt-[22px] grid gap-[28px] lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div
          className={`group relative aspect-video overflow-hidden rounded-[26px] bg-gradient-to-br ${video.thumbnail} shadow-edenic transition-transform duration-300 hover:-translate-y-1`}
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
                    onClick={play}
                    aria-label={`Play ${video.title}`}
                    className="absolute inset-0 size-full"
                  />
                  <Image
                    src={video.image ?? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="pointer-events-none object-cover"
                  />
                </>
              )}
              <span className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />
              <span className="pointer-events-none absolute inset-0 grid place-items-center">
                <span className="grid size-[72px] place-items-center rounded-full bg-white/25 text-white ring-1 ring-white/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/35 sm:size-[92px]">
                  <Play className="size-8 translate-x-[2px] fill-white text-white sm:size-9" aria-hidden="true" />
                </span>
              </span>
              {video.duration && (
                <span className="pointer-events-none absolute right-4 bottom-4 rounded-full bg-edenic-bg/70 px-[12px] py-[4px] text-[13px] font-semibold text-white backdrop-blur-sm">
                  {video.duration}
                </span>
              )}
            </>
          )}
        </div>

        <div>
          <h3 className="font-display text-[24px] leading-[1.15] font-bold text-white sm:text-[30px]">
            {video.title}
          </h3>
          <p className="mt-[10px] text-[16px] font-medium text-white/80">{video.description}</p>
          <Button
            href={YOUTUBE_CHANNEL_URL}
            external
            className="mt-[24px] h-[54px] gap-[10px] px-[30px] text-[16px]"
          >
            <Play className="size-4 fill-white text-white" aria-hidden="true" />
            Watch Now
          </Button>
        </div>
      </div>
    </div>
  );
}
