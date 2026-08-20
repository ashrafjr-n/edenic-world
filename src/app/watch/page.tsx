import type { Metadata } from "next";
import Header from "@/components/Header";
import WatchHero from "@/features/watch/WatchHero";
import FeaturedVideo from "@/features/watch/FeaturedVideo";
import VideoLibrary from "@/features/watch/VideoLibrary";
import SubscribeBanner from "@/features/watch/SubscribeBanner";
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

      <div className="bg-edenic-bg relative z-10 pt-[clamp(96px,15vh,168px)] pb-[7vh]">
        <Container className="flex flex-col gap-[5vh]">
          <div className="shadow-edenic rounded-[32px] border border-white/10 bg-edenic-deep-purple/35 p-[clamp(22px,3.6vw,48px)]">
            <FeaturedVideo video={getFeaturedVideo()} />

            <div className="my-[clamp(28px,4.2vh,44px)] h-px w-full bg-white/10" />

            <VideoLibrary videos={getVideos()} filters={getVideoFilters()} />
          </div>

          <SubscribeBanner />
        </Container>
      </div>

      <WatchHero />
    </main>
  );
}
