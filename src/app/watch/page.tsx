import type { Metadata } from "next";
import Header from "@/components/Header";
import WatchIntro from "@/features/watch/WatchIntro";
import VideoLibrary from "@/features/watch/VideoLibrary";
import ExploreSidebar from "@/features/watch/ExploreSidebar";
import Container from "@/components/Container";
import { getFeaturedVideo, getVideoFilters, getVideos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Watch — Edenic World",
  description: "Sing, dance and learn with Nova, Pinki & Bloo!",
};

export default function WatchPage() {
  return (
    <main className="relative w-full">
      <Header activeHref="/watch" />

      <div className="bg-edenic-bg relative z-10 min-h-screen pt-[clamp(96px,15vh,168px)] pb-[8vh]">
        <Container className="flex flex-col gap-[6vh]">
          <WatchIntro video={getFeaturedVideo()} />

          <div className="grid gap-[24px] lg:grid-cols-[1.7fr_1fr] lg:items-start">
            <div className="rounded-[32px] border border-white/10 bg-edenic-deep-purple/35 p-[clamp(22px,3.6vw,48px)]">
              <VideoLibrary videos={getVideos()} filters={getVideoFilters()} />
            </div>

            <ExploreSidebar />
          </div>
        </Container>
      </div>
    </main>
  );
}
