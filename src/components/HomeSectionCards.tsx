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
    <section className="relative z-10 -mt-px pb-[40px]">
      <Container>
        <ul className="grid gap-[32px] md:grid-cols-3">
          {CARDS.map(({ title, description, href, image, surface }) => (
            <li key={href}>
              <Link
                href={href}
                className={`shadow-edenic group relative flex h-[280px] flex-col justify-between overflow-hidden rounded-[32px] p-[44px] transition-transform duration-300 hover:-translate-y-1 xl:h-[316px] ${surface}`}
              >
                {/* Art bleeds off the right edge and dissolves into the surface. */}
                <Image
                  src={image}
                  alt=""
                  width={600}
                  height={490}
                  className="pointer-events-none absolute top-0 right-0 h-full w-auto max-w-none object-cover [mask-image:linear-gradient(to_right,transparent_0%,#000_42%)] transition-transform duration-500 group-hover:scale-105"
                />

                <div className="relative">
                  <h2 className="font-display text-[clamp(30px,2.3vw,42px)] leading-[1.1] font-extrabold text-white">
                    {title}
                  </h2>
                  <p className="mt-[16px] max-w-[250px] text-[clamp(16px,1.15vw,21px)] leading-[1.42] font-medium text-white/90">
                    {description}
                  </p>
                </div>

                <span className="relative grid size-[56px] place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/20 backdrop-blur-sm transition-colors group-hover:bg-white/25 xl:size-[70px]">
                  <ArrowRight className="size-6" strokeWidth={2.5} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
