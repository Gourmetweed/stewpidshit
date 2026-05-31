import { Toaster } from "sonner";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { FeaturedBowl } from "@/components/sections/FeaturedBowl";
import { Festivals } from "@/components/sections/Festivals";
import { Story } from "@/components/sections/Story";
import { Gallery } from "@/components/sections/Gallery";
import { Footer } from "@/components/sections/Footer";
import { Unsubscribe } from "@/components/Unsubscribe";

export default function App() {
  const isUnsubscribe = typeof window !== "undefined" && window.location.pathname.startsWith("/unsubscribe");
  if (isUnsubscribe) {
    return (
      <>
        <Toaster theme="dark" position="top-center" />
        <Unsubscribe />
      </>
    );
  }
  return (
    <div className="min-h-screen bg-charcoal text-white">
      <Toaster
        theme="dark"
        position="top-center"
        toastOptions={{
          style: {
            background: "#2D3130",
            color: "#fff",
            border: "1px solid #F5C518",
            borderRadius: 2,
            fontFamily: "Oswald, Impact, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          },
        }}
      />
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <FeaturedBowl />
        <Festivals />
        <Story />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
