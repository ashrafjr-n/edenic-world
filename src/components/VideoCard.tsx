import Image from "next/image";
import Link from "next/link";
import { BookOpen, Music2, Play, Sparkles, Star } from "lucide-react";
import type { Video, VideoCategory } from "@/types/content";

export const CATEGORY_ICON: Record<VideoCategory, typeof Music2> = {
  songs: Music2,
  learning: BookOpen,
  stories: Sparkles,
  fun: Star,
};

/**
 * A video's thumbnail is its custom artwork when the client has supplied one,
 * the YouTube auto-thumbnail otherwise. Only videos with a `youtubeId` are
 * clickable — they link to `/watch/[videoId]`, which is where playback now
 * happens. Videos without one stay a non-interactive gradient placeholder.
 */
export default function VideoCard({ video }: { video: Video }) {
  const CategoryIcon = CATEGORY_ICON[video.category];
  const thumbnailSrc = video.image ?? (video.youtubeId ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg` : undefined);

  const thumbnail = (
    <div
      className={`relative aspect-video overflow-hidden rounded-[22px] bg-gradient-to-br ${video.thumbnail} transition-all duration-300 group-hover:-translate-y-1`}
    >
      {thumbnailSrc && (
        <Image
          src={thumbnailSrc}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="pointer-events-none object-cover"
        />
      )}
      <span className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />
      {video.youtubeId && (
        <span className="pointer-events-none absolute inset-0 grid place-items-center">
          <span className="grid size-[52px] place-items-center rounded-full bg-white/25 text-white ring-1 ring-white/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/35">
            <Play className="size-[22px] translate-x-[1px] fill-white text-white" aria-hidden="true" />
          </span>
        </span>
      )}
      {video.duration && (
        <span className="pointer-events-none absolute right-3 bottom-3 rounded-full bg-edenic-bg/70 px-[10px] py-[3px] text-[12px] font-semibold text-white backdrop-blur-sm">
          {video.duration}
        </span>
      )}
    </div>
  );

  const caption = (
    <div className="mt-[14px]">
      <h3 className="font-display text-[17px] font-bold text-white">{video.title}</h3>
      <p className="mt-[4px] flex items-center gap-[6px] text-[14px] font-medium text-white/70">
        <CategoryIcon className="size-[15px] text-edenic-lavender" aria-hidden="true" />
        {video.description}
      </p>
    </div>
  );

  if (!video.youtubeId) {
    return (
      <li>
        <div className="group">
          {thumbnail}
          {caption}
        </div>
      </li>
    );
  }

  return (
    <li>
      <Link href={`/watch/${video.id}`} className="group block">
        {thumbnail}
        {caption}
      </Link>
    </li>
  );
}
