import { embedOpts } from './index';
export const VideoYoutube = ({ attr }) => {
  const { video_autoplay, video_controls, video_loop, video_playsinline } = attr;
  const mute = (video_autoplay) ? `&mute=1` : '';
  if (attr && attr.video_youtube) {
    return (
      <iframe 
        className="ow-video youtube" 
        src={ `https://www.youtube.com/embed/${attr.video_youtube}?rel=0&showinfo=0&modestbranding=1${embedOpts('autoplay', video_autoplay)}${embedOpts('loop', video_loop)}${embedOpts('playsinline', video_playsinline)}${embedOpts('controls', video_controls)}${mute}` } 
        frameBorder="0" 
        webkitallowfullscreen="true" 
        mozallowfullscreen="true" 
        allowFullScreen={ true } />
    );
  }
}