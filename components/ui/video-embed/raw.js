
export const VideoRaw = ({ attr }) => {
  if (attr && attr.video_raw) {
    const { video_autoplay, video_controls, video_loop, video_playsinline, video_raw, video_raw_poster_url } = attr;
    return (
      <video className="ow-video raw" autoPlay={ video_autoplay } controls={ video_controls } loop={ video_loop } muted playsInline={ video_playsinline } poster={ video_raw_poster_url }>
        <source src={ video_raw } type="video/mp4" />
        Your browser doesn't support embedded videos.
      </video>
    );
  }
}