import Header from "@/components/Header";
import Hero from "@/features/home/Hero";
import HomeSectionCards from "@/features/home/HomeSectionCards";

export default function Home() {
  return (
    <main className="relative w-full">
      <Header activeHref="/" />
      <Hero />
      <HomeSectionCards />
    </main>
  );
}
