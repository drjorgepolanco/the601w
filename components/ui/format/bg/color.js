export const fmtBgColor = (attr) => (attr && attr.fmt_bg_color) ? { backgroundColor: attr.fmt_bg_color } : {};

export const FmtBgColor = ({ attr }) => {
  if (attr && attr.fmt_bg_color) {
    return (
      <div className="ow-bg-color" style={{ ...fmtBgColor(attr) }}>
        <style jsx>{`
          .ow-bg-color {
            height: 100%;
            width: 100%;
            position: absolute;
          }
        `}</style>
      </div>
    )
  }
};