import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          margin: '0 auto',
          transformOrigin:"center center",
          transform: 'rotate(-27deg) translateX(-10px)',
          opacity: 0.35,
          marginTop: -112,
          gap:1,
          marginBottom: 40,
          filter:"saturate(8.3)"
        }}>
        <div
          tw='h-64 w-10 bg-red-600'
          style={{
            filter: 'blur(20px) saturate(10)',
          }}
        />
        <div
          tw='h-74 w-8 bg-yellow-500'
          style={{
            filter: 'blur(12px)',
          }}
        />
        <div
          tw='h-78 w-8 bg-sky-500'
          style={{
            filter: 'blur(14px)',
          }}
        />
        <div
          tw='h-74 w-8 bg-blue-900'
          style={{
            filter: 'blur(20px) saturate(10)',
          }}
        />
      </div>
    ),
    {
      width: 340,
      height: 240,
    }
  );
}
