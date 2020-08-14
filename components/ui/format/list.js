import { FmtBgGroup, fmtFloatClass, fmtLayoutClass, fmtLayoutList, fmtPadClass, fmtWidth, fmtMaxWidth } from '../format';

export const FmtList = (props) => {
  const { attr, attrName, children } = props;
  const style = { ...fmtWidth(attr), ...fmtMaxWidth(attr) };
  const classNames = ['ow-ctnr', `attr-${attrName}`, fmtFloatClass(attr), fmtPadClass(attr)].join(' ').trim();

  return ((attr && attr.show) ? (
    <div className={ classNames } style={ style }>
      <FmtBgGroup attr={ attr } />
      <div className={ `inner ${fmtLayoutClass(attr)}` } style={{ ...fmtLayoutList(attr) }}>
        { children }
      </div>
    </div>
  ) : null);
}

