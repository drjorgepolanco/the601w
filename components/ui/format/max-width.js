export const fmtMaxWidth = (attr) => {
  if (attr) {
    const { fmt_max_width_pct, fmt_max_width_px, fmt_max_width_unit } = attr;
    switch(fmt_max_width_unit) {
      case 'px':
        return { maxWidth: `${fmt_max_width_px}px` };
      case 'pct':
        return { maxWidth: `${fmt_max_width_pct}%` };
      case 'vh':
        return { maxWidth: `${fmt_max_width_pct}vh` };
      case 'vw':
        return { maxWidth: `${fmt_max_width_pct}vw` };
      default:
        return {};
    }
  } 
}