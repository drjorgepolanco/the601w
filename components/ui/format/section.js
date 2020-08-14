import { getBlockName } from '../../../utils';
import { FmtBgGroup, fmtClassName, fmtHeightSctn, fmtMaxHeight, fmtMaxWidth, fmtPadClass } from '../format';

export const FmtSctn = (props) => {
  const { block, children } = props;
  const { blockName } = block;
  const attrs = block.attrs ? block.attrs : {};
  const { section } = attrs;
  
  return (
    <section className={ `ow-sctn clearfix ${getBlockName(blockName)} ${fmtHeightSctn(section)} ${fmtClassName(attrs)}` } style={{ ...fmtMaxHeight(section) }}>
      <div className="inner">
        <FmtBgGroup attr={ section } />
        <div className={ `ow-sctn-ctnt ${fmtPadClass(section)}` } style={{ ...fmtMaxWidth(section) }}>
          { children }
        </div>
      </div>
      <style jsx>{`
        .ow-sctn.vh {
          position: relative;
          height: 100vh;
        }
        @media (min-width: 1024px) {
          .ow-sctn.vh.qt-one   { height: 25vh; }
          .ow-sctn.vh.td-one   { height: 33.3333vh; }
          .ow-sctn.vh.qt-two   { height: 50vh; }
          .ow-sctn.vh.td-two   { height: 66.6666vh; }
          .ow-sctn.vh.qt-three { height: 75vh; }
          .ow-sctn.vh.qt-four  { height: 100vh; }
        }
      `}</style>
    </section>
  );
}