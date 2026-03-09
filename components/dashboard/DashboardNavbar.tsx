'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "end", sideOffset = 12, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-48 rounded-2xl bg-zinc-900/90 backdrop-blur-xl p-2 text-white shadow-2xl border border-white/10 outline-none animate-in data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = "PopoverContent";

export default function DashboardNavbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 pointer-events-none">
      {/* Floating Logo Button */}
      <div className="pointer-events-auto">
        <Link 
          href="/dashboard"
          className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-zinc-900/50 backdrop-blur-md border border-white/10 shadow-xl hover:bg-zinc-800/60 transition-all active:scale-95 group text-white no-underline"
        >
          <div className="relative w-7 h-7">
            <Image 
              src="/ythumb.png" 
              alt="ythumb Logo" 
              fill
              className="object-contain"
            />
          </div>
          <span className="font-bold text-lg tracking-tight">ythumb</span>
        </Link>
      </div>

      {/* Floating Profile Button / Popover */}
      <div className="pointer-events-auto">
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center gap-2 p-1.5 pr-4 rounded-full bg-zinc-900/50 backdrop-blur-md border border-white/10 shadow-xl hover:bg-zinc-800/60 transition-all active:scale-95 group">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 bg-zinc-800">
                {user?.user_metadata?.avatar_url ? (
                  <img src={user.user_metadata.avatar_url} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs font-bold text-zinc-400">
                    {user?.email?.[0].toUpperCase()}
                  </div>
                )}
              </div>
              <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                {user?.email?.split('@')[0]}
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-1">
              <div className="px-3 py-2 border-bottom border-white/5 mb-1">
                <p className="text-xs text-zinc-500 font-medium truncate">{user?.email}</p>
              </div>
              <button
                onClick={() => signOut()}
                className="w-full flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-red-400 hover:bg-red-400/10 rounded-xl transition-colors text-left"
              >
                <LogOutIcon className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}

const LogOutIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);
