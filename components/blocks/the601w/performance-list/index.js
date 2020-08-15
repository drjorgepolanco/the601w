import { fmtClassName } from '../../../ui';
import { getBlockName } from '../../../../utils';
import classes from '../../../../styles/classes.module.scss';
import * as wFmt from '../../../ui/the601w/format';

import { BlockHeader }   from './header';
import { BlockList   }   from './list';

export const PerformanceList = ({ block }) => {
  const { blockName } = block;
  const attrs = block.attrs ? block.attrs : {};
  const { header } = attrs;
  return (
    <section className={ `ow-sctn clearfix ${getBlockName(blockName)} ${fmtClassName(attrs)}` }>
      <div className="inner">
        <div className={ `ow-sctn-ctnt ${classes.padding}` }>
          <div className="performance-list">
            <div className="block-header">
              <div className="header">
                { <BlockHeader block={ block } /> }
              </div>

              <div className="body">
                { <BlockList block={ block } /> }
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ow-sctn {
          background: #f6f6f6;
        }
        .ow-sctn-ctnt {
          padding-top: 0;
        }
        .performance-list {
          width: 100%;
          position: relative;
          margin: 0 auto;
          max-width: 1280px;
          background: white;
        }
        .header {
          background: ${wFmt.color.portfolio_dark};
          text-align: center;
        }
        .header * {
          color: white;
        }
        .header h3, .header p {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </section>
  );
}