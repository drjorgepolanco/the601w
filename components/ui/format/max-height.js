export const fmtMaxHeight = (attr) => {
  if (attr) {
    const { fmt_max_height_pct, fmt_max_height_px, fmt_max_height_unit } = attr;
    switch(fmt_max_height_unit) {
      case 'px':
        return { maxHeight: `${fmt_max_height_px}px` };
      case 'pct':
        return { maxHeight: `${fmt_max_height_pct}%` };
      case 'vh':
        return { maxHeight: `${fmt_max_height_pct}vh` };
      case 'vw':
        return { maxHeight: `${fmt_max_height_pct}vw` };
      default:
        return {};
    }
  } 
}