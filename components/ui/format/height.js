
/* Content Height */
export const fmtHeight = (attr) => {
  if (attr) {
    const { fmt_height_pct, fmt_height_px, fmt_height_unit } = attr;
    switch(fmt_height_unit) {
      case 'px':
        return { height: `${fmt_height_px}px` };
      case 'pct':
        return { height: `${fmt_height_pct}%` };
      case 'vh':
        return { height: `${fmt_height_pct}vh` };
      case 'vw':
        return { height: `${fmt_height_pct}vw` };
      default:
        return { height: '100%' };
    }
  } 
}


/* Section Height */
export const fmtHeightSctn = (attr) => (attr) && (attr.fmt_height_type  === 'vh' ? `vh ${attr.fmt_height_vh}` : '');