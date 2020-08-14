
/* Grid Column */
export const fmtGridItemCol     = (attr) => (attr && attr.fmt_grid_item_col)      ? { MsGridColumn: attr.fmt_grid_item_col, gridColumn: attr.fmt_grid_item_col } : {}; 
export const fmtGridItemSpanCol = (attr) => (attr && attr.fmt_grid_item_span_col) ? { MsGridColumnSpan: attr.fmt_grid_item_span_col, gridColumn: `span ${attr.fmt_grid_item_span_col}` } : {}; 

/* Grid Row */
export const fmtGridItemRow     = (attr) => (attr && attr.fmt_grid_item_row)      ? { MsGridRow: attr.fmt_grid_item_row, gridRow: attr.fmt_grid_item_row } : {}; 
export const fmtGridItemSpanRow = (attr) => (attr && attr.fmt_grid_item_span_row) ? { MsGridRowSpan: attr.fmt_grid_item_span_row, gridRow: `span ${attr.fmt_grid_item_span_row}` } : {};

/* Align Self */
export const fmtGridItemSelfAlign = (attr) => (attr && attr.fmt_grid_item_self_align) ? { alignSelf: attr.fmt_grid_item_self_align } : {}; 

/* Justify Self */
export const fmtGridItemSelfJustify = (attr) => (attr && attr.fmt_grid_item_self_justify) ? { justifySelf: attr.fmt_grid_item_self_justify } : {}; 

/* Group */
export const fmtGridItemGroup = (settings, item) => {
  const { fmt_grid_type } = settings;
  if (fmt_grid_type === 'custom') {
    return { ...fmtGridItemCol(item), ...fmtGridItemRow(item), ...fmtGridItemSelfAlign(item), ...fmtGridItemSelfJustify(item) };
  }
  return ({ ...fmtGridItemSpanCol(item), ...fmtGridItemSpanRow(item), ...fmtGridItemSelfAlign(item), ...fmtGridItemSelfJustify(item) });
}