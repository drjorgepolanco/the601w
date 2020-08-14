import { FmtBgColor, FmtBgImage, FmtBgVideo } from './index';

export const FmtBgGroup = ({ attr }) => {
  const { fmt_bg_type } = attr;

  const isNone  = fmt_bg_type === 'none';
  const isColor = fmt_bg_type === 'color';
  const isImage = fmt_bg_type === 'image';
  const isVideo = fmt_bg_type === 'video';

  return (
    !isNone && (
      <div className="ow-bg-group">
        <div className="inner">
          { isColor && <FmtBgColor attr={ attr } /> }
          { isImage && <FmtBgImage attr={ attr } /> }
          { isVideo && <FmtBgVideo attr={ attr } /> }
        </div>
        <style jsx>{`
          .ow-bg-group {
            height: 100%;
            width: 100%;
            position: absolute;
            bottom: 0; left: 0; right: 0; top: 0;
            display: block;
            z-index: 0;
            overflow: hidden;
          }
        `}</style>
      </div>
    )
  );
}