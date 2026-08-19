import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Edenic World"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <Header />
    </div>
  );
}
