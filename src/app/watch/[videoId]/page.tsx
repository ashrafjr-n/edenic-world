import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Gamepad2, Sparkles, Star } from "lucide-react";
import Header from "@/components/Header";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import VideoGrid from "@/components/VideoGrid";
import { CATEGORY_ICON } from "@/components/VideoCard";
import VideoPlayer from "@/features/watch/VideoPlayer";
import { getRelatedVideos, getVideoById, getVideoFilters } from "@/lib/content";

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
  const CategoryIcon = CATEGORY_ICON[video.category];
  const categoryLabel = getVideoFilters().find((filter) => filter.value === video.category)?.label ?? video.category;

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-edenic-void-deep pt-[clamp(90px,14vh,160px)] pb-[9vh]">
      <Header activeHref="/watch" />

      <Container className="relative z-10 flex flex-col gap-[6vh]">
        <Button href="/watch" ariaLabel="Back to All Videos" className="size-[52px] justify-center p-0">
          <ArrowLeft
            className="size-5 transition-transform duration-300 group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
        </Button>

        <div className="shadow-edenic relative overflow-hidden rounded-[36px] border border-white/10 bg-edenic-deep-purple/35 p-[clamp(22px,3.6vw,48px)]">
          {/* Atmospheric glow, clipped to the panel's own rounded edge so it
              never shows a hard rectangular seam against the flat page
              background the way a free-floating glow div would. */}
          <div aria-hidden="true" className="bg-hero-glow pointer-events-none absolute inset-0 opacity-30" />

          {/* A small sparkle flourish in the corner, echoing the Watch hero —
              clustered together so it reads as one accent, not stray dots
              floating in the empty space below the info column. */}
          <Sparkles
            className="pointer-events-none absolute top-[6%] right-[7%] size-6 text-edenic-cyan opacity-60"
            aria-hidden="true"
          />
          <Star
            className="pointer-events-none absolute top-[11.5%] right-[4%] size-[14px] fill-edenic-gold text-edenic-gold opacity-70"
            aria-hidden="true"
          />

          <div className="grid gap-[32px] lg:grid-cols-[1.55fr_1fr] lg:items-center">
            {/* A soft luminous ring around the player, like a window into the story. */}
            <div className="shadow-edenic-cta rounded-[28px] bg-gradient-to-br from-edenic-cta-border/70 via-white/10 to-transparent p-[3px]">
              <VideoPlayer video={video} />
            </div>

            <div className="relative">
              <span className="inline-flex items-center gap-[8px] rounded-full border border-white/15 bg-white/5 px-[16px] py-[7px] text-[13px] font-semibold text-white/80">
                <CategoryIcon className="size-[15px] text-edenic-lavender" aria-hidden="true" />
                {categoryLabel}
              </span>

              <h1 className="font-display mt-[16px] text-[28px] leading-[1.15] font-bold text-white sm:text-[34px]">
                {video.title}
              </h1>

              <p className="mt-[12px] text-[16px] leading-[1.5] font-medium text-white/80">
                {video.description}
              </p>

              {/* Icon-only shortcuts to Learn and Play. Dimmed and unclickable until
                  those pages ship, same rule as the disabled Header nav links. */}
              <div className="mt-[28px] flex items-center gap-[18px]">
                <span
                  aria-disabled="true"
                  title="Coming soon"
                  className="bg-card-learn shadow-edenic relative grid size-[64px] cursor-not-allowed place-items-center rounded-full text-white opacity-45"
                >
                  <BookOpen className="size-6" aria-hidden="true" />
                  <span className="sr-only">Go to Learn (coming soon)</span>
                  <span className="absolute -top-1 -right-1 rounded-full bg-edenic-gold px-[7px] py-[2px] text-[9px] font-bold text-edenic-bg">
                    Soon
                  </span>
                </span>

                <span
                  aria-disabled="true"
                  title="Coming soon"
                  className="bg-card-play shadow-edenic relative grid size-[64px] cursor-not-allowed place-items-center rounded-full text-white opacity-45"
                >
                  <Gamepad2 className="size-6" aria-hidden="true" />
                  <span className="sr-only">Go to Play (coming soon)</span>
                  <span className="absolute -top-1 -right-1 rounded-full bg-edenic-gold px-[7px] py-[2px] text-[9px] font-bold text-edenic-bg">
                    Soon
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {relatedVideos.length > 0 && (
          <div>
            <SectionHeader>More Videos You&apos;ll Love</SectionHeader>
            <div className="mt-[24px]">
              <VideoGrid videos={relatedVideos} />
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}
