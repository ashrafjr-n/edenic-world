import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";

type SectionCard = {
  title: string;
  description: string;
  href: string;
  image: string;
  /** Signature gradient for this card — see globals.css. */
  surface: string;
};

const CARDS: SectionCard[] = [
  {
    title: "Watch",
    description: "Songs, stories & fun videos with Nova, Pinki & Bloo!",
    href: "/watch",
    image: "/images/home-CTA/watch.jpg",
    surface: "bg-card-watch",
  },
  {
    title: "Learn",
    description: "Fun lessons that make learning exciting!",
    href: "/learn",
    image: "/images/home-CTA/learn.jpg",
    surface: "bg-card-learn",
  },
  {
    title: "Play",
    description: "Play games, solve puzzles and collect rewards!",
    href: "/play",
    image: "/images/home-CTA/play.jpg",
    surface: "bg-card-play",
  },
];

export default function HomeSectionCards() {
  return (
    <section className="relative z-10 -mt-[3vh] pb-[5vh]">
      <Container>
        <ul className="grid gap-[26px] md:grid-cols-3">
          {CARDS.map(({ title, description, href, image, surface }) => (
            <li key={href}>
              <Link
                href={href}
                className={`shadow-edenic group relative flex h-[clamp(200px,24vh,290px)] flex-col justify-between overflow-hidden rounded-[28px] pt-[clamp(20px,3vh,34px)] pr-[32px] pb-[clamp(24px,3.6vh,42px)] pl-[clamp(24px,2.1vw,38px)] ${surface}`}
              >
                {/* Art bleeds off the right edge and dissolves into the surface. */}
                <Image
                  src={image}
                  alt=""
                  width={600}
                  height={490}
                  className="card-art-mask pointer-events-none absolute right-0 bottom-0 h-[96%] w-auto max-w-none object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Grounds the card — the surface settles into the page colour
                    towards the bottom instead of glowing evenly all over. */}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-35% to-edenic-bg/30" />

                <div className="relative">
                  <h2 className="font-display text-[clamp(24px,min(2.16vw,3.25vh),40px)] leading-[1.1] font-extrabold text-white">
                    {title}
                  </h2>
                  <p className="mt-[9px] max-w-[13em] text-[clamp(13px,min(0.95vw,1.42vh),17.5px)] leading-[1.38] font-medium text-white/90">
                    {description}
                  </p>
                </div>

                <span className="relative grid size-[clamp(40px,5.2vh,58px)] place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/20 backdrop-blur-sm transition-colors group-hover:bg-white/25">
                  <ArrowRight className="size-5" strokeWidth={2.5} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
