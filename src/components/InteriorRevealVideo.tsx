import React, { useEffect, useState } from 'react';
import { Player } from '@remotion/player';
import { InteriorReveal } from './remotion/InteriorReveal';
import { useLanguage } from '@/lib/i18n';

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
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="w-full h-full flex items-center justify-center bg-black rounded-2xl overflow-hidden">
      <Player
        component={InteriorReveal}
        compositionWidth={1920}
        compositionHeight={1080}
        durationInFrames={300}
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
        autoPlay={isPlaying}
        showVolumeControls={false}
        onEnded={() => {
          setIsPlaying(false);
          onVideoEnd?.();
        }}
      />
    </div>
  );
};