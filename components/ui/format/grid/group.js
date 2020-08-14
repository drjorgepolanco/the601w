import { fmtGridGap, fmtGridAutoSelect, fmtGridTmpltSelect } from './index';
export const fmtGridGroup = (attr) => {
  return { ...fmtGridGap(attr), ...fmtGridAutoSelect(attr), ...fmtGridTmpltSelect(attr) };
}