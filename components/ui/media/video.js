export const MediaVideo = ({ attr }) => {
  return (attr.media_video_url) && (
    <video className="ow-media-video" controls autoPlay muted>
      <source type="video/mp4" src={ attr.media_video_url } />
    </video>
  );
}