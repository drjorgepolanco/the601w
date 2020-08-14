import { embedOpts } from './index';
export const VideoVimeo = ({ attr }) => {
  const { video_autoplay, video_controls, video_loop, video_playsinline } = attr;
  if (attr && attr.video_vimeo) {
    return (
      <iframe 
      className="ow-video vimeo" 
      src={ `https://player.vimeo.com/video/${attr.video_vimeo}?muted=1${embedOpts('autoplay', video_autoplay)}${embedOpts('loop', video_loop)}${embedOpts('playsinline', video_playsinline)}${embedOpts('controls', video_controls)}` } 
      frameBorder="0" 
      webkitallowfullscreen="true" 
      mozallowfullscreen="true" 
      allowFullScreen={ true } />
    );
  }
}