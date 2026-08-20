import VideoCard from "@/components/VideoCard";
import type { Video } from "@/types/content";

export default function VideoGrid({ videos }: { videos: Video[] }) {
  if (videos.length === 0) {
    return (
      <p className="py-[6vh] text-center text-[15px] font-medium text-white/60">
        No videos in this category yet — check back soon!
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-x-[22px] gap-y-[32px] sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </ul>
  );
}
