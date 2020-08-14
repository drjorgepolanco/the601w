
/* Content Width: auto | full (100%) */
export const fmtWidthCtnt = (attr) => (attr && attr.fmt_width_ctnt) ? { width: attr.fmt_width_ctnt } : {};


/* Container Width: columns | px | % | vh | vw */
export const fmtWidthCols = (attr) => (attr && attr.fmt_width_cols) ? ((attr.fmt_width_cols / 12) * 100) : 100;
export const fmtWidth = (attr) => {
  if (attr) {
    const { fmt_width_pct, fmt_width_px, fmt_width_unit } = attr;
    switch(fmt_width_unit) {
      case 'cols':
        return { width: `${fmtWidthCols(attr)}%` };
      case 'px':
        return { width: `${fmt_width_px}px` };
      case 'pct':
        return { width: `${fmt_width_pct}%` };
      case 'vh':
        return { width: `${fmt_width_pct}vh` };
      case 'vw':
        return { width: `${fmt_width_pct}vw` };
      default:
        return {};
    }
  } 
}