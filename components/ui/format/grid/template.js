
/* Template Columns */
export const fmtGridTmpltCols = (attr) => (attr && attr.fmt_grid_tmplt_cols) ? { gridTemplateColumns: attr.fmt_grid_tmplt_cols } : {};
export const fmtGridTmpltColsDefault = { MsGridColumns: '(1fr)[12]', gridTemplateColumns: 'repeat(12, 1fr)' };

/* Template Rows */
export const fmtGridTmpltRows = (attr) => (attr && attr.fmt_grid_tmplt_rows) ? { gridTemplateRows:    attr.fmt_grid_tmplt_rows } : {};
export const fmtGridTmpltRowsDefault = { MsGridRows: 'auto', gridTemplateRows: 'auto' };

/* Select */
export const fmtGridTmpltSelect = (attr) => {
  const { fmt_grid_type, fmt_grid_auto_flow } = attr;
  const isCol     = fmt_grid_auto_flow === 'column' || fmt_grid_auto_flow === 'column dense'; 
  const isRow     = fmt_grid_auto_flow === 'row'    || fmt_grid_auto_flow === 'row dense';
  const isCustom  = fmt_grid_type      === 'custom';
  const isDefault = fmt_grid_type      === 'default';

  if (isDefault && isCol) {
    return { ...fmtGridTmpltRowsDefault };
  }
  if (isDefault && isRow) {
    return { ...fmtGridTmpltColsDefault };
  }
  if (isCustom) {
    return { ...fmtGridTmpltCols(attr), ...fmtGridTmpltRows(attr) };
  }
  return {};
}