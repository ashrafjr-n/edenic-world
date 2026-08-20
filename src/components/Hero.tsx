import Image from "next/image";
import Link from "next/link";
import { Play, Star } from "lucide-react";
import Container from "@/components/Container";
import HeroCurve from "@/components/HeroCurve";

/**
 * Hero and the three section cards below it are sized to land inside a single
 * viewport, so every type scale here is capped by height as well as width
 * (`min(Xvw, Yvh)`) — on a short, wide window the copy shrinks instead of
 * pushing the cards off screen.
 */
export default function Hero() {
  return (
    <section className="relative isolate h-[72vh] max-h-[900px] min-h-[560px] w-full overflow-hidden">
      {/* The artwork is wider than the hero box, so it is laid in at full width
          along the bottom and the sky above it is extended with a blurred copy
          of itself — that keeps the whole landscape in frame, uncropped. */}
      <Image
        src="/images/hero.jpg"
        alt=""
        aria-hidden="true"
        fill
        loading="eager"
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
        className="absolute inset-x-0 bottom-[80px] w-full [mask-image:linear-gradient(to_bottom,transparent_0,#000_90px)]"
      />

      {/* Deep night sky over the extended top, so the header sits on colour
          rather than on the washed-out blur. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-edenic-deep/95 via-edenic-deep/30 to-transparent" />

      {/* Atmospheric glow that lifts the characters out of the scene. */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-35" />

      {/* Keeps the copy readable without flattening the art behind it. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-edenic-bg/58 via-edenic-bg/8 to-transparent" />

      <Container className="relative z-20 flex h-full flex-col justify-start pt-[15vh]">
        <div className="max-w-[760px] xl:pl-[44px]">
          <h1 className="font-display font-bold tracking-[-0.005em] drop-shadow-[0_6px_24px_rgba(38,29,82,0.45)]">
            <span className="block text-[clamp(38px,min(4.35vw,6.55vh),81px)] leading-[1.0] text-white">
              Learn, Play,
            </span>
            <span className="text-imagine-gradient -mt-[0.06em] block w-fit text-[clamp(54px,min(6.1vw,9.2vh),114px)] leading-[1.0]">
              Imagine!
            </span>
          </h1>

          <p className="mt-[12px] max-w-[14.3em] text-[clamp(15px,min(1.32vw,1.98vh),24.5px)] leading-[1.25] font-medium text-white">
            Step into a magical world with{" "}
            <span className="font-bold text-edenic-nova">Nova</span>,{" "}
            <span className="font-bold text-edenic-pinki">Pinki</span> &{" "}
            <span className="font-bold text-edenic-bloo">Bloo</span>, where
            learning is an adventure!
          </p>

          <div className="mt-[3vh] flex items-center gap-[30px]">
            <Link
              href="/learn"
              className="shadow-edenic-cta group inline-flex h-[clamp(46px,6.2vh,68px)] items-center gap-[12px] rounded-full border-2 border-[#d9a9f6] bg-gradient-to-b from-[#a067ec] to-[#8449da] px-[clamp(24px,2.3vw,40px)] text-[clamp(14px,min(1.14vw,1.72vh),21px)] font-bold text-white transition-transform hover:scale-[1.03]"
            >
              Start the Adventure
              <Star
                className="size-5 fill-edenic-peach text-edenic-peach group-hover:animate-icon-wiggle"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/watch"
              className="group inline-flex items-center gap-[17px] text-[clamp(13px,min(0.95vw,1.45vh),17.5px)] font-semibold text-white"
            >
              <span className="grid size-[clamp(38px,4.9vh,54px)] place-items-center rounded-full border border-white/55 bg-white/10 transition-colors group-hover:bg-white/20">
                <Play
                  className="size-4 translate-x-[1px] fill-white text-white"
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
