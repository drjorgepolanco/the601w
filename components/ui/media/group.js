import { MediaImage, mediaType, MediaVideo } from './index';
import { VideoEmbed } from '../video-embed';

const Select = ({ attr }) => {
  switch(mediaType(attr)) {
    case 'image':
      return <MediaImage attr={ attr } />;
    case 'video':
      return <MediaVideo attr={ attr } />;
    case 'video-embed':
      return <VideoEmbed attr={ attr } />;
    default:
      return '';
  }
}
export const MediaGroup = ({ attr }) => {
  return ((attr.media_image_url || attr.media_video_url || attr.video_raw || attr.video_vimeo || attr.video_youtube) && (
    <div className="ow-media-group">
      <Select attr={ attr } />
      <style jsx>{`
        .ow-media-group {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  ));
}