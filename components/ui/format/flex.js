/* Align Content */
export const fmtFlexAlignCtnt = (attr) => (attr && attr.fmt_flex_align_ctnt) ? { alignContent: attr.fmt_flex_align_ctnt   } : {};

/* Align Items */
export const fmtFlexAlignItems = (attr) => (attr && attr.fmt_flex_align_items) ? { alignItems: attr.fmt_flex_align_items  } : {};

/* Direction */
export const fmtFlexDirection = (attr) => (attr && attr.fmt_flex_direction) ? { flexDirection: attr.fmt_flex_direction } : {};

/* Item */
export const fmtFlexItemAlignSelf = (attr) => (attr && attr.fmt_flex_item_align_self) ? { alignSelf: attr.fmt_flex_item_align_self } : {};
export const fmtFlexItemFlex      = (attr) => (attr && attr.fmt_flex_item_flex)       ? { flex: attr.fmt_flex_item_flex }            : {};
export const fmtFlexItemOrder     = (attr) => (attr && attr.fmt_flex_item_order)      ? { order: attr.fmt_flex_item_order }          : {};
export const fmtFlexItemGroup     = (attr) => (attr) ? { 
  ...fmtFlexItemAlignSelf(attr), 
  ...fmtFlexItemFlex(attr), 
  ...fmtFlexItemOrder(attr)
} : {};

/* Justify Content */
export const fmtFlexJustifyCtnt = (attr) => (attr && attr.fmt_flex_justify_ctnt) ? { justifyContent: attr.fmt_flex_justify_ctnt } : {};

/* Wrap */
export const fmtFlexWrap  = (attr) => (attr && attr.fmt_flex_wrap) ? { flexWrap: attr.fmt_flex_wrap } : {};

/* Group */
export const fmtFlexGroup = (attr) => (attr) ? { 
  ...fmtFlexAlignCtnt(attr), 
  ...fmtFlexAlignItems(attr), 
  ...fmtFlexDirection(attr), 
  ...fmtFlexJustifyCtnt(attr), 
  ...fmtFlexWrap(attr) 
} : {};
