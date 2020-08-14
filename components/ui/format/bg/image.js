export const fmtBgImage = (attr) => (attr && attr.fmt_bg_image_url) ? { backgroundImage: `url(${attr.fmt_bg_image_url})` } : {};

export const FmtBgImage = ({ attr }) => {
  if (attr && attr.fmt_bg_image_url) {
    return (
      <div className="ow-bg-image" style={{ ...fmtBgImage(attr) }}>
        <style jsx>{`
          .ow-bg-image {
            height: 100%;
            width: 100%;
            position: absolute;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
          }
        `}</style>
      </div>
    );
  }
};