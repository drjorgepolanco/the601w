import { FmtBgGroup, fmtClassName, fmtHeightSctn, fmtMaxHeight, fmtMaxWidth, fmtPadClass } from '../../../ui';
import { getBlockName } from '../../../../utils';

import { BlockBody }   from './body';
import { BlockList }   from './list';

export const PerformanceHero = ({ block }) => {
  const { blockName } = block;
  const attrs = block.attrs ? block.attrs : {};
  const { section } = attrs;
  
  return (
    <section className={ `ow-sctn clearfix ${getBlockName(blockName)} ${fmtHeightSctn(section)} ${fmtClassName(attrs)}` } style={{ ...fmtMaxHeight(section) }}>
      <div className="inner">
        <div className="wrap-bg">
          <FmtBgGroup attr={ section } />
        </div>
        
        <div className={ `ow-sctn-ctnt ${fmtPadClass(section)}` } style={{ ...fmtMaxWidth(section) }}>
          <div className="performance-hero">
            <div className="inner">
              <BlockBody block={ block } />
              <BlockList block={ block } />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .performance-hero {
          height: 100vh;
          width: 100%;
          position: relative;
        }
        .wrap-bg {
          height: 100%;
          width: 100%;
          position: fixed;
        }
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