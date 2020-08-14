import { FmtSctn }     from '../../../ui';
import { BlockSales }  from './sales';
import { BlockAssets } from './assets';
import classes from '../../../../styles/classes.module.scss';

export const PerformanceStats = ({ block }) => {
  const { assets, sales } = block.attrs;
  return (
    <FmtSctn block={ block }>
      <div className={ `performance-stats ${classes.padding}` }>
        <div className="inner stats clearfix">
          <div className="wrap-sales">
            <BlockSales block={ block } attr={ sales } attrName="sales" />
          </div>
      
          <div className="wrap-assets">
            <BlockAssets block={ block } attr={ assets } attrName="assets" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .performance-stats {
          height: auto;
          width: 100%;
          position: relative;
          background: #f6f6f6;
        }
        .stats {
          margin: 0 auto;
          max-width: 1280px;
        }
        .wrap-assets, .wrap-sales {
          background: white;
          padding: 64px 32px;
          margin: 16px 0;
        }
        @media (min-width: 768px) {
          .wrap-assets, .wrap-sales {
            margin: 0;
          }
          .wrap-sales {
            float: left;
            width: 45%;
            position: absolute;
            height: 100%;
          }
          .wrap-assets {
            float: right;
            width: 45%;
          }
        }
      `}</style>
    </FmtSctn>
  );
}
