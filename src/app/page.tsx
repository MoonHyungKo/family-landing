import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import TrustStats from "@/components/TrustStats";
import Persona from "@/components/Persona";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import USP from "@/components/USP";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full font-sans text-primary bg-base flex flex-col">
      <Header />
      <div className="pt-20">
        <Hero />
        <PainPoints />
        <TrustStats />
        <Persona />
        <Gallery />
        <Reviews />
        <USP />
        <Process />
        <Footer />
      </div>
    </main>
  );
}
