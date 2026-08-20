import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import VideoGrid from "@/components/VideoGrid";
import VideoPlayer from "@/features/watch/VideoPlayer";
import { getRelatedVideos, getVideoById } from "@/lib/content";

/**
 * Placeholder layout — functional wiring only (routing, data, player,
 * related videos). The real visual design lands once the video-page mockup
 * and per-video artwork are ready; this page will be restyled in place then.
 */
export async function generateMetadata(
  props: PageProps<"/watch/[videoId]">,
): Promise<Metadata> {
  const { videoId } = await props.params;
  const video = getVideoById(videoId);

  if (!video) return {};

  return {
    title: `${video.title} — Edenic World`,
    description: video.description,
  };
}

export default async function VideoPage(props: PageProps<"/watch/[videoId]">) {
  const { videoId } = await props.params;
  const video = getVideoById(videoId);

  if (!video) notFound();

  const relatedVideos = getRelatedVideos(video);

  return (
    <main className="relative min-h-screen w-full bg-edenic-bg pt-[clamp(90px,14vh,160px)] pb-[7vh]">
      <Header activeHref="/watch" />

      <Container className="flex flex-col gap-[5vh]">
        <div className="grid gap-[28px] lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <VideoPlayer video={video} />

          <div>
            <h1 className="font-display text-[24px] leading-[1.15] font-bold text-white sm:text-[30px]">
              {video.title}
            </h1>
            <p className="mt-[10px] text-[16px] font-medium text-white/80">{video.description}</p>
          </div>
        </div>

        {relatedVideos.length > 0 && (
          <div>
            <SectionHeader>More Videos</SectionHeader>
            <div className="mt-[20px]">
              <VideoGrid videos={relatedVideos} />
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}
