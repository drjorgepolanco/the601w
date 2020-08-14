import { fmtAlign, fmtColor, fmtPosition, fmtWidthCtnt } from '../index';

export const FmtItemCtnt = ({ attr, attrName, block, children }) => {
  const { settings = null } = block.attrs;
  const style = { ...fmtAlign(settings), ...fmtColor(settings), ...fmtWidthCtnt(settings) };
  const classNames = ['ow-ctnt', `attr-${attrName}`, fmtPosition(settings)].join(' ').trim();

  return ((attr && attr.show) ? (
    <div className={ classNames } style={ style }>
      <div className="inner">
        { children }
      </div>
    </div>
  ) : null);
}