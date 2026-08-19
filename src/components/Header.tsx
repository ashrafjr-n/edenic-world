import Image from "next/image";
import Link from "next/link";
import { Gamepad2, GraduationCap, Music } from "lucide-react";

const NAV_LINKS = [
  { label: "SONG", href: "/songs", icon: Music },
  { label: "LEARN", href: "/learn", icon: GraduationCap },
  { label: "PLAY", href: "/play", icon: Gamepad2 },
] as const;

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-gradient-to-b from-edenic-200/85 via-edenic-300/85 to-edenic-400/90 px-6 py-3 shadow-[0_8px_32px_rgba(8,0,16,0.35)] backdrop-blur-xl md:px-10 md:py-4">
      <Link href="/" className="shrink-0">
        <Image
          src="/images/edenic-logo.png"
          alt="Edenic World"
          width={140}
          height={74}
          priority
          className="h-10 w-auto md:h-12"
        />
      </Link>

      <nav>
        <ul className="flex items-center gap-6 md:gap-10">
          {NAV_LINKS.map(({ label, href, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex items-center gap-2 text-sm font-semibold tracking-wide text-white/90 md:text-base"
              >
                <Icon
                  className="size-5 text-edenic-gold group-hover:animate-icon-wiggle md:size-6"
                  aria-hidden="true"
                />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
