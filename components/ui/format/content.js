import { fmtAlign, fmtColor, fmtPad, fmtPosition, fmtWidthCtnt } from '../format';

export const FmtCtnt = ({ attr, attrName, children }) => {
  const style = { ...fmtAlign(attr), ...fmtColor(attr), ...fmtPad(attr), ...fmtWidthCtnt(attr) };
  const classNames = ['ow-ctnt', `attr-${attrName}`, fmtPosition(attr)].join(' ').trim();

  return ((attr && attr.show) && (
    <div className={ classNames } style={ style }>
      <div className="inner">
        { children }
      </div>
    </div>
  ));
}