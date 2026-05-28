import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Episodes from "@/components/Episodes";
import Host from "@/components/Host";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Features />
      <Episodes />
      <Host />
      <Footer />
    </main>
  );
}
