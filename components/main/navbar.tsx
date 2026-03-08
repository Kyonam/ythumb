'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
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
        backgroundColor: 'transparent',
        color: 'white',
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Left: Logo + Text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
      </div>

      {/* Center: Navigation Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Link href="#features" style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8, textDecoration: 'none', color: 'inherit', transition: 'opacity 0.2s' }}>
          Features
        </Link>
        <Link href="#pricing" style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8, textDecoration: 'none', color: 'inherit', transition: 'opacity 0.2s' }}>
          Pricing
        </Link>
        <Link href="#contact" style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8, textDecoration: 'none', color: 'inherit', transition: 'opacity 0.2s' }}>
          Contact
        </Link>
      </div>

      {/* Right: Get Started Button */}
      <div>
        <Link 
          href="/signup" 
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
      </div>
    </nav>
  );
}
