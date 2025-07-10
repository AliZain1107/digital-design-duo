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
  const [hasEnded, setHasEnded] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center bg-black rounded-2xl overflow-hidden">
      {!hasEnded ? (
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
          autoPlay={isPlaying}
          showVolumeControls={false}
          onEnded={() => {
            setIsPlaying(false);
            setHasEnded(true);
            setTimeout(() => {
              onVideoEnd?.();
            }, 1000); // Keep final frame visible for 1 second before transitioning
          }}
        />
      ) : (
        // Show static final frame
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="w-[85%] max-w-[1200px]">
            <div className="bg-[#111] rounded-[32px] p-10 relative overflow-hidden shadow-2xl border border-white/10">
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-8 text-center">
                  <h2 className="text-5xl font-bold text-white mb-2">
                    Your Space, Transformed
                  </h2>
                  <p className="text-2xl text-gray-400">
                    {roomType.charAt(0).toUpperCase() + roomType.slice(1)} • {style.charAt(0).toUpperCase() + style.slice(1)} Style
                  </p>
                </div>

                {/* Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={afterImage}
                    alt="Transformed space"
                    className="w-full h-auto block"
                  />
                </div>

                {/* Footer */}
                <div className="mt-8 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                      <span className="text-white text-xl">✨</span>
                    </div>
                    <p className="text-white text-xl font-bold">STYLY AI</p>
                  </div>
                  
                  <p className="text-gray-500 text-lg">app.styly.io</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};