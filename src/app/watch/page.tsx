import type { Metadata } from "next";
import Header from "@/components/Header";
import WatchHero from "@/features/watch/WatchHero";
import FeaturedVideo from "@/features/watch/FeaturedVideo";
import VideoLibrary from "@/features/watch/VideoLibrary";
import SubscribeBanner from "@/features/watch/SubscribeBanner";
import Container from "@/components/Container";
import { FEATURED_VIDEO, VIDEOS, VIDEO_FILTERS } from "@/data/videos";

export const metadata: Metadata = {
  title: "Watch — Edenic World",
  description: "Sing, dance and learn with Nova, Pinki & Bloo!",
};

export default function WatchPage() {
  return (
    <main className="relative w-full">
      <Header activeHref="/watch" />
      <WatchHero />

      <div className="bg-edenic-bg relative z-10 -mt-[4vh] pb-[7vh]">
        <Container className="flex flex-col gap-[5vh]">
          <div className="shadow-edenic rounded-[32px] border border-white/10 bg-edenic-deep-purple/35 p-[clamp(22px,3.6vw,48px)]">
            <FeaturedVideo video={FEATURED_VIDEO} />

            <div className="my-[clamp(28px,4.2vh,44px)] h-px w-full bg-white/10" />

            <VideoLibrary videos={VIDEOS} filters={VIDEO_FILTERS} />
          </div>

          <SubscribeBanner />
        </Container>
      </div>
    </main>
  );
}
