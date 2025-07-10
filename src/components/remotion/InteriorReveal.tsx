import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Img,
  Sequence,
} from 'remotion';

export type InteriorRevealProps = {
  beforeImage: string;
  afterImage: string;
  roomType: string;
  style: string;
  brandColor?: string;
};

export const InteriorReveal: React.FC<InteriorRevealProps> = ({
  beforeImage,
  afterImage,
  roomType,
  style,
  brandColor = '#8B5CF6',
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Animation timings
  const introEnd = fps * 2; // 2 seconds
  const transformStart = fps * 2;
  const transformEnd = fps * 6; // 4 seconds of transformation
  const revealStart = fps * 6;
  const revealEnd = fps * 8;
  const finalStart = fps * 8;
  const finalEnd = fps * 15; // Extended to 15 seconds total

  // Intro animations
  const logoScale = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    durationInFrames: 20,
  });

  const titleOpacity = interpolate(
    frame,
    [10, 30],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );

  // Transform phase
  const transformProgress = interpolate(
    frame,
    [transformStart, transformEnd],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Reveal animations
  const revealScale = spring({
    frame: frame - revealStart,
    fps,
    from: 0.8,
    to: 1,
    durationInFrames: 30,
  });

  const revealOpacity = interpolate(
    frame,
    [revealStart, revealStart + 20],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );

  // Final card animations
  const cardY = spring({
    frame: frame - finalStart,
    fps,
    from: 50,
    to: 0,
    durationInFrames: 30,
  });

  // Looping shimmer effect
  const shimmerDuration = fps * 3; // 3 seconds per loop
  const shimmerProgress = ((frame - finalStart) % shimmerDuration) / shimmerDuration;
  const shimmerX = interpolate(
    shimmerProgress,
    [0, 1],
    [-100, 200]
  );

  return (
    <AbsoluteFill style={{ backgroundColor: '#0a0a0a' }}>
      {/* Background gradient */}
      <AbsoluteFill>
        <div
          style={{
            width: '100%',
            height: '100%',
            background: `radial-gradient(circle at 50% 50%, ${brandColor}20 0%, transparent 50%)`,
            opacity: 0.5,
          }}
        />
      </AbsoluteFill>

      {/* Intro Sequence */}
      <Sequence from={0} durationInFrames={introEnd}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div
            style={{
              transform: `scale(${logoScale})`,
              opacity: titleOpacity,
            }}
          >
            <h1
              style={{
                fontSize: 120,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                fontFamily: 'system-ui',
                marginBottom: 20,
              }}
            >
              STYLY
            </h1>
            <p
              style={{
                fontSize: 32,
                color: '#888',
                textAlign: 'center',
                fontFamily: 'system-ui',
              }}
            >
              AI Interior Design
            </p>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Transformation Sequence */}
      <Sequence from={transformStart} durationInFrames={transformEnd - transformStart}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div
            style={{
              position: 'relative',
              width: width * 0.8,
              height: height * 0.7,
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Before image */}
            <Img
              src={beforeImage}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 1 - transformProgress,
              }}
            />
            
            {/* After image with reveal effect */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                clipPath: `inset(0 ${100 - transformProgress * 100}% 0 0)`,
              }}
            >
              <Img
                src={afterImage}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Divider line */}
            <div
              style={{
                position: 'absolute',
                left: `${transformProgress * 100}%`,
                top: 0,
                width: 4,
                height: '100%',
                backgroundColor: brandColor,
                boxShadow: `0 0 20px ${brandColor}`,
              }}
            />

            {/* Labels */}
            <div
              style={{
                position: 'absolute',
                top: 30,
                left: 30,
                padding: '8px 16px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                borderRadius: 8,
                opacity: 1 - transformProgress,
              }}
            >
              <p style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>BEFORE</p>
            </div>
            
            <div
              style={{
                position: 'absolute',
                top: 30,
                right: 30,
                padding: '8px 16px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                borderRadius: 8,
                opacity: transformProgress,
              }}
            >
              <p style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>AFTER</p>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Final Reveal Sequence - No end frame, stays visible */}
      <Sequence from={revealStart} durationInFrames={Infinity}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div
            style={{
              transform: `translateY(${cardY}px) scale(${revealScale})`,
              opacity: revealOpacity,
              width: width * 0.85,
              maxWidth: 1200,
            }}
          >
            {/* Card container */}
            <div
              style={{
                backgroundColor: '#111',
                borderRadius: 32,
                padding: 40,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Shimmer effect */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(105deg, transparent 40%, ${brandColor}20 50%, transparent 60%)`,
                  transform: `translateX(${shimmerX}%)`,
                }}
              />

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{ marginBottom: 30, textAlign: 'center' }}>
                  <h2
                    style={{
                      fontSize: 48,
                      fontWeight: 'bold',
                      color: 'white',
                      marginBottom: 10,
                      fontFamily: 'system-ui',
                    }}
                  >
                    Your Space, Transformed
                  </h2>
                  <p
                    style={{
                      fontSize: 24,
                      color: '#888',
                      fontFamily: 'system-ui',
                    }}
                  >
                    {roomType.charAt(0).toUpperCase() + roomType.slice(1)} • {style.charAt(0).toUpperCase() + style.slice(1)} Style
                  </p>
                </div>

                {/* Image */}
                <div
                  style={{
                    borderRadius: 24,
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <Img
                    src={afterImage}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Footer */}
                <div
                  style={{
                    marginTop: 30,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: brandColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span style={{ color: 'white', fontSize: 20 }}>✨</span>
                    </div>
                    <p style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                      STYLY AI
                    </p>
                  </div>
                  
                  <p style={{ color: '#666', fontSize: 16 }}>
                    app.styly.io
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};