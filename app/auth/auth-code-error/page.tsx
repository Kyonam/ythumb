'use client';

import Link from 'next/link';
import ShaderBackground from '@/components/main/shader-background';

export default function AuthCodeError() {
  return (
    <main>
      <ShaderBackground>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          padding: '2rem',
          fontFamily: "'Space Grotesk', sans-serif",
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '500px',
            backgroundColor: 'rgba(255, 68, 68, 0.05)',
            backdropFilter: 'blur(16px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 68, 68, 0.2)',
            padding: '3rem 2.5rem',
          }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ff4444' }}>Authentication Error</h1>
            <p style={{ opacity: 0.8, marginBottom: '2rem', lineHeight: '1.6' }}>
              We couldn't exchange your authentication code for a session. This could be due to an expired link or a connection issue.
            </p>
            
            <Link 
              href="/auth" 
              style={{
                display: 'inline-block',
                padding: '0.8rem 2rem',
                borderRadius: '9999px',
                background: 'white',
                color: 'black',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'transform 0.2s'
              }}
            >
              Try Again
            </Link>
          </div>
        </div>
      </ShaderBackground>
    </main>
  );
}
