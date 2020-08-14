/* Auto Columns */
export const fmtGridAutoCols = (attr) => (attr && attr.fmt_grid_auto_cols) ? { gridAutoColumns: attr.fmt_grid_auto_cols  } : {};

/* Auto Flow */
export const fmtGridAutoFlow = (attr) => (attr && attr.fmt_grid_auto_flow) ? { gridAutoFlow:    attr.fmt_grid_auto_flow  } : {};

/* Auto Rows */
export const fmtGridAutoRows = (attr) => (attr && attr.fmt_grid_auto_rows) ? { gridAutoRows:    attr.fmt_grid_auto_rows  } : {};

/* Select */
export const fmtGridAutoSelect = (attr) => {
  const { fmt_grid_auto_flow } = attr;
  const isCol = fmt_grid_auto_flow === 'column' || fmt_grid_auto_flow === 'column dense'; 
  return (isCol) ? { ...fmtGridAutoFlow(attr), ...fmtGridAutoCols(attr) } : { ...fmtGridAutoFlow(attr), ...fmtGridAutoRows(attr) };
}