export const fmtFloat      = (attr) => (attr && attr.fmt_float) ? { float: attr.fmt_float } : {};
export const fmtFloatClass = (attr) => (attr && attr.fmt_float) ? `float ${attr.fmt_float}` : '';