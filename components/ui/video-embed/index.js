/* Embed Options */
import { embedOpts } from './options';
export { embedOpts };

/* Raw */
import { VideoRaw } from './raw';
export { VideoRaw };

/* Vimeo */
import { VideoVimeo } from './vimeo';
export { VideoVimeo };

/* Youtube */
import { VideoYoutube } from './youtube';
export { VideoYoutube };

/* Select */
import { VideoGroup } from './group';
export const VideoEmbed = (props) => <VideoGroup { ...props } />;