export const FmtBgVideo = ({ attr }) => {
  if (attr.fmt_bg_video_url) {
    return (
      <div>
        <video className="ow-bg-video" playsInline autoPlay muted loop>
          <source type="video/mp4" src={ attr.fmt_bg_video_url } />
        </video>

        <style jsx>{`
          .ow-bg-video {
            position: absolute;
            top: 50%;
            left: 50%;
            width: auto;
            height: auto;
            min-width: 100%;
            min-height: 100%;

            -webkit-transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
          }
        `}</style>
      </div>
    );
  }
  return null;
}



