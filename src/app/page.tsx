import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeSectionCards from "@/components/HomeSectionCards";

export default function Home() {
  return (
    <main className="relative w-full">
      <Header activeHref="/" />
      <Hero />
      <HomeSectionCards />
    </main>
  );
}
