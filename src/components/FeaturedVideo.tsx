"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Star } from "lucide-react";
import { FEATURED_VIDEO } from "@/data/videos";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@EdenicWorld-kids";

export default function FeaturedVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const play = () => FEATURED_VIDEO.youtubeId && setIsPlaying(true);

  return (
    <div>
      <h2 className="font-display flex items-center gap-[10px] text-[22px] font-bold text-white sm:text-[26px]">
        Featured Video
        <Star className="size-[19px] fill-edenic-gold text-edenic-gold" aria-hidden="true" />
      </h2>

      <div className="mt-[22px] grid gap-[28px] lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div
          className={`group relative aspect-video overflow-hidden rounded-[26px] bg-gradient-to-br ${FEATURED_VIDEO.thumbnail} shadow-edenic transition-transform duration-300 hover:-translate-y-1`}
        >
          {isPlaying && FEATURED_VIDEO.youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${FEATURED_VIDEO.youtubeId}?autoplay=1`}
              title={FEATURED_VIDEO.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 size-full"
            />
          ) : (
            <>
              {FEATURED_VIDEO.youtubeId && (
                <>
                  <button
                    type="button"
                    onClick={play}
                    aria-label={`Play ${FEATURED_VIDEO.title}`}
                    className="absolute inset-0 size-full"
                  />
                  <Image
                    src={`https://img.youtube.com/vi/${FEATURED_VIDEO.youtubeId}/hqdefault.jpg`}
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
              {FEATURED_VIDEO.duration && (
                <span className="pointer-events-none absolute right-4 bottom-4 rounded-full bg-edenic-bg/70 px-[12px] py-[4px] text-[13px] font-semibold text-white backdrop-blur-sm">
                  {FEATURED_VIDEO.duration}
                </span>
              )}
            </>
          )}
        </div>

        <div>
          <h3 className="font-display text-[24px] leading-[1.15] font-bold text-white sm:text-[30px]">
            {FEATURED_VIDEO.title}
          </h3>
          <p className="mt-[10px] text-[16px] font-medium text-white/80">
            {FEATURED_VIDEO.description}
          </p>
          <Link
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-edenic-cta mt-[24px] inline-flex h-[54px] items-center gap-[10px] rounded-full border-2 border-[#d9a9f6] bg-gradient-to-b from-[#a067ec] to-[#8449da] px-[30px] text-[16px] font-bold text-white transition-transform hover:scale-[1.03]"
          >
            <Play className="size-4 fill-white text-white" aria-hidden="true" />
            Watch Now
          </Link>
        </div>
      </div>
    </div>
  );
}
