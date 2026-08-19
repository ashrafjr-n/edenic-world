import Image from "next/image";
import Link from "next/link";
import { Play, Star } from "lucide-react";
import Container from "@/components/Container";
import HeroCurve from "@/components/HeroCurve";

export default function Hero() {
  return (
    <section className="relative isolate h-[50.5vw] max-h-[990px] min-h-[760px] w-full overflow-hidden">
      {/* The artwork is wider than the hero box, so it is laid in at full width
          along the bottom and the sky above it is extended with a blurred copy
          of itself — that keeps the whole landscape in frame, uncropped. */}
      <Image
        src="/images/hero.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="scale-125 object-cover object-top blur-[80px]"
      />
      <Image
        src="/images/hero.jpg"
        alt="Nova, Pinki and Bloo walking through the Edenic World"
        width={1680}
        height={640}
        priority
        sizes="100vw"
        className="absolute inset-x-0 bottom-[45px] w-full [mask-image:linear-gradient(to_bottom,transparent_0,#000_90px)]"
      />

      {/* Atmospheric glow that lifts the characters out of the scene. */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow mix-blend-screen opacity-60" />

      {/* Keeps the copy readable without flattening the art behind it. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-edenic-bg/45 via-edenic-bg/5 to-transparent" />

      <Container className="relative z-20 flex h-full flex-col justify-center">
        <div className="max-w-[760px] pt-[40px] xl:pl-[44px]">
          <h1 className="font-display font-extrabold tracking-[-0.01em] drop-shadow-[0_6px_24px_rgba(38,29,82,0.45)]">
            <span className="block text-[clamp(44px,4.75vw,88px)] leading-[1.05] text-white">
              Learn, Play,
            </span>
            <span className="-mt-[0.08em] block bg-gradient-to-r from-[#efa6e2] via-[#f0aead] to-[#ce84f0] bg-clip-text text-[clamp(60px,6.7vw,124px)] leading-[1.05] text-transparent">
              Imagine!
            </span>
          </h1>

          <p className="mt-[26px] max-w-[420px] text-[clamp(17px,1.4vw,26px)] leading-[1.35] font-medium text-white">
            Step into a magical world with{" "}
            <span className="font-bold text-edenic-nova">Nova</span>,{" "}
            <span className="font-bold text-edenic-pinki">Pinki</span> &{" "}
            <span className="font-bold text-edenic-bloo">Bloo</span>, where
            learning is an adventure!
          </p>

          <div className="mt-[48px] flex items-center gap-[37px]">
            <Link
              href="/learn"
              className="shadow-edenic-cta group inline-flex h-[64px] items-center gap-3 rounded-full border border-white/45 bg-gradient-to-b from-[#a067ec] to-[#8449da] px-[38px] text-[clamp(17px,1.35vw,25px)] font-bold text-white transition-transform hover:scale-[1.03] xl:h-[80px]"
            >
              Start the Adventure
              <Star
                className="size-6 fill-edenic-gold text-edenic-gold group-hover:animate-icon-wiggle"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/watch"
              className="group inline-flex items-center gap-4 text-[clamp(16px,1.2vw,22px)] font-semibold text-white"
            >
              <span className="grid size-[48px] place-items-center rounded-full border border-white/50 transition-colors group-hover:bg-white/15 xl:size-[60px]">
                <Play
                  className="size-5 translate-x-[1px] fill-white text-white"
                  aria-hidden="true"
                />
              </span>
              Watch Intro
            </Link>
          </div>
        </div>
      </Container>

      <HeroCurve />
    </section>
  );
}
