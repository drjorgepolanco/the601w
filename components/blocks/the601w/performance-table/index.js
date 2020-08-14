import { fmtClassName } from '../../../ui';
import { getBlockName } from '../../../../utils';
import classes from '../../../../styles/classes.module.scss';

import { BlockBody }   from './body';

export const PerformanceTable = ({ block }) => {
  const { blockName } = block;
  const attrs = block.attrs ? block.attrs : {};
  return (
    <section className={ `ow-sctn clearfix ${getBlockName(blockName)} ${fmtClassName(attrs)}` }>
      <div className="inner">
        <div className={ `ow-sctn-ctnt ${classes.padding}` }>
          <div className={ `performance-table` }>
            <BlockBody block={ block } />
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
        .performance-table {
          width: 100%;
          position: relative;
          margin: 0 auto;
          max-width: 1280px;
          background: white;
        }
      `}</style>
    </section>
  );
}