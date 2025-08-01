import React, { useEffect, useRef } from 'react';
import { Player } from '@remotion/player';
import { InteriorReveal } from './remotion/InteriorReveal';
import { useLanguage } from '../lib/i18n';

interface InteriorRevealVideoProps {
  beforeImage: string;
  afterImage: string;
  roomType: string;
  style: string;
  onVideoEnd?: () => void;
}

export const InteriorRevealVideo: React.FC<InteriorRevealVideoProps> = ({
  beforeImage,
  afterImage,
  roomType,
  style,
  onVideoEnd,
}) => {
  const { language } = useLanguage();
  const hasCalledEnd = useRef(false);

  // Fallback timeout in case onEnded doesn't fire
  useEffect(() => {
    if (hasCalledEnd.current) {
      console.log('[InteriorRevealVideo] Already called end, skipping timeout setup');
      return;
    }

    console.log('[InteriorRevealVideo] Setting up fallback timeout for 11 seconds');
    const timeout = setTimeout(() => {
      if (!hasCalledEnd.current) {
        console.log('[InteriorRevealVideo] Fallback timeout triggered, calling onVideoEnd');
        hasCalledEnd.current = true;
        onVideoEnd?.();
      }
    }, 11000); // 11 seconds (reduced from 16)

    return () => {
      console.log('[InteriorRevealVideo] Cleaning up timeout');
      clearTimeout(timeout);
    };
  }, []); // Empty dependency array - only run once on mount

  const handleVideoEnd = () => {
    if (!hasCalledEnd.current) {
      console.log('[InteriorRevealVideo] Video ended naturally, calling onVideoEnd');
      hasCalledEnd.current = true;
      onVideoEnd?.();
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-black rounded-2xl overflow-hidden">
      <Player
        component={InteriorReveal}
        compositionWidth={1920}
        compositionHeight={1080}
        durationInFrames={450}
        fps={30}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
        }}
        inputProps={{
          beforeImage,
          afterImage,
          roomType,
          style,
          brandColor: '#8B5CF6',
        }}
        controls={false}
        loop={false}
        autoPlay={true}
        showVolumeControls={false}
        acknowledgeRemotionLicense={true}
        // onEnded={handleVideoEnd}
      />
    </div>
  );
};