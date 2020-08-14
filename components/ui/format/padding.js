export const fmtPad      = (attr) => (attr && attr.fmt_pad)       ? { padding: attr.fmt_pad } : {};
export const fmtPadClass = (attr) => (attr && attr.fmt_pad_class) ? `pad-${attr.fmt_pad_class}` : '';
