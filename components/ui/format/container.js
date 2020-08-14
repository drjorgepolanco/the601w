import { FmtBgGroup, fmtFloatClass, fmtHeight, fmtMaxHeight, fmtPadClass, fmtWidth, fmtMaxWidth } from '../format';

export const FmtCtnr = ({ attr, attrName, children }) => {
  const style = { width: '100%', ...fmtHeight(attr), ...fmtMaxHeight(attr), ...fmtWidth(attr), ...fmtMaxWidth(attr) };
  const classNames = ['ow-ctnr', `attr-${attrName}`, fmtFloatClass(attr), fmtPadClass(attr)].join(' ').trim();

  return ((attr && attr.show) ? (
    <div className={ classNames } style={ style }>
      <FmtBgGroup attr={ attr } />
      <div className="inner">
        { children }
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .ow-ctnr {
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  ) : null);
}

