'use client';

import { AetherHero } from "@/components/main/hero";
import Navbar from "@/components/main/navbar";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <main>
      <Navbar />
      <AetherHero
        title="Create Viral YouTube Thumbnails in Seconds."
        subtitle="Harness the power of AI to generate high-CTR thumbnails that make your videos stand out. Every pixel crafted for maximum growth."
        ctaLabel={user ? "Go to Dashboard" : "Get Started"}
        ctaHref={user ? "/dashboard" : "/auth"}
        align="left"
        overlayGradient="linear-gradient(180deg, #000000bb 0%, #00000055 40%, transparent)"
      />
    </main>
  );
}