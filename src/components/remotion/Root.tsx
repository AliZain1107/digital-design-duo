import { Composition } from 'remotion';
import { InteriorReveal } from './InteriorReveal';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="InteriorReveal"
        component={InteriorReveal}
        durationInFrames={300} // 10 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          beforeImage: '',
          afterImage: '',
          roomType: 'living room',
          style: 'modern',
          brandColor: '#8B5CF6',
        }}
      />
    </>
  );
};