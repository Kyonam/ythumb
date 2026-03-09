'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const pathname = usePathname();
  const isDashboard = pathname === '/dashboard';

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.5rem 4rem',
        backgroundColor: isDashboard ? 'rgba(24, 24, 24, 0.8)' : 'transparent',
        backdropFilter: isDashboard ? 'blur(10px)' : 'none',
        color: 'white',
        fontFamily: "'Space Grotesk', sans-serif",
        borderBottom: isDashboard ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      }}
    >
      {/* Left: Logo + Text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ position: 'relative', width: '32px', height: '32px' }}>
            <Image 
              src="/ythumb.png" 
              alt="ythumb AI Logo" 
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            ythumb AI
          </span>
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {!isDashboard ? (
          <>
            <Link href="#features" style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8, textDecoration: 'none', color: 'inherit', transition: 'opacity 0.2s' }}>
              Features
            </Link>
            <Link href="#pricing" style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8, textDecoration: 'none', color: 'inherit', transition: 'opacity 0.2s' }}>
              Pricing
            </Link>
          </>
        ) : (
          <>
            <Link href="/dashboard" style={{ fontSize: '0.9rem', fontWeight: 600, opacity: 1, textDecoration: 'none', color: 'inherit' }}>
              Dashboard
            </Link>
            <Link href="/dashboard/history" style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.6, textDecoration: 'none', color: 'inherit' }}>
              History
            </Link>
          </>
        )}
      </div>

      {/* Right: Auth Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {user ? (
          <>
            {!isDashboard && (
              <Link 
                href="/dashboard"
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'white',
                  textDecoration: 'none',
                  marginRight: '0.5rem'
                }}
              >
                Dashboard
              </Link>
            )}
            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
              {user.email}
            </span>
            <button 
              onClick={() => signOut()}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link 
            href="/auth" 
            style={{
              padding: '0.6rem 1.2rem',
              borderRadius: '9999px',
              background: 'white',
              color: 'black',
              fontWeight: 600,
              fontSize: '0.85rem',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
              transition: 'transform 0.2s, background 0.2s',
            }}
          >
            Get Started
          </Link>
        )}
      </div>
    </nav>
  );
}
