'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import { PromptArea } from '@/components/dashboard/PromptArea';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !user) {
      router.replace('/auth');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <main className="h-screen w-screen bg-[#181818] flex items-center justify-center text-white">
        <div className="text-center">
          <div className="w-10 h-10 border-3 border-white/10 border-t-white rounded-full animate-spin mx-auto mb-4" />
          <p className="opacity-60 font-medium">Initializing Workspace...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#181818] text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Animated Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <DashboardNavbar />

      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center gap-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            How Can I Help You?
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium">
            Describe your video concept and let AI craft the perfect thumbnail.
          </p>
        </div>

        <PromptArea />


      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
        <span className="text-8xl font-black tracking-tighter select-none">ythumb</span>
      </div>
    </main>
  );
}
