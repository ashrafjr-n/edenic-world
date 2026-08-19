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

      {/* Deep night sky over the extended top, so the header sits on colour
          rather than on the washed-out blur. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-edenic-deep/95 via-edenic-deep/30 to-transparent" />

      {/* Atmospheric glow that lifts the characters out of the scene. */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-35" />

      {/* Keeps the copy readable without flattening the art behind it. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-edenic-bg/58 via-edenic-bg/8 to-transparent" />

      <Container className="relative z-20 flex h-full flex-col justify-start pt-[16vw] xl:pt-[281px]">
        <div className="max-w-[760px] xl:pl-[44px]">
          <h1 className="font-display font-bold tracking-[-0.005em] drop-shadow-[0_6px_24px_rgba(38,29,82,0.45)]">
            <span className="block text-[clamp(46px,4.86vw,90px)] leading-[1.0] text-white">
              Learn, Play,
            </span>
            <span className="-mt-[0.06em] block bg-gradient-to-r from-[#efa6e2] via-[#f0aead] via-55% to-[#ce84f0] bg-clip-text text-[clamp(64px,6.85vw,127px)] leading-[1.0] text-transparent">
              Imagine!
            </span>
          </h1>

          <p className="mt-[14px] max-w-[400px] text-[clamp(18px,1.5vw,28px)] leading-[1.25] font-medium text-white">
            Step into a magical world with{" "}
            <span className="font-bold text-edenic-nova">Nova</span>,{" "}
            <span className="font-bold text-edenic-pinki">Pinki</span> &{" "}
            <span className="font-bold text-edenic-bloo">Bloo</span>, where
            learning is an adventure!
          </p>

          <div className="mt-[39px] flex items-center gap-[37px]">
            <Link
              href="/learn"
              className="shadow-edenic-cta group inline-flex h-[64px] items-center gap-[14px] rounded-full border-2 border-[#d9a9f6] bg-gradient-to-b from-[#a067ec] to-[#8449da] px-[48px] text-[clamp(17px,1.32vw,24.4px)] font-bold text-white transition-transform hover:scale-[1.03] xl:h-[80px]"
            >
              Start the Adventure
              <Star
                className="size-6 fill-edenic-peach text-edenic-peach group-hover:animate-icon-wiggle"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/watch"
              className="group inline-flex items-center gap-[21px] text-[clamp(15px,1.08vw,20px)] font-semibold text-white"
            >
              <span className="grid size-[48px] place-items-center rounded-full border border-white/55 bg-white/10 transition-colors group-hover:bg-white/20 xl:size-[60px]">
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
