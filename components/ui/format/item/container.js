import { FmtBgGroup, fmtLayoutItemClass, fmtLayoutItemStyle, fmtPad } from '../index';
import { fmtClassLayout } from '../..';

export const FmtItemCtnr = ({ attr, attrName, block, children }) => {
  const { settings } = block.attrs;

  const layoutStyles  = settings.fmt_layout_type ? { ...fmtLayoutItemStyle(settings, attr) } : {}; 
  const layoutClasses = settings.fmt_layout_type ? fmtLayoutItemClass(settings, attr) : fmtClassLayout(attr);
  
  const style = { ...fmtPad(settings), ...layoutStyles };
  const classNames = ['ow-ctnr', `attr-${attrName}`, layoutClasses].join(' ').trim();

  return ((attr && attr.show) ? (
    <div className={ classNames } style={ style }>
      <FmtBgGroup attr={ attr } />
      <div className="inner">
        { children }
      </div>
    </div>
  ) : null);
}