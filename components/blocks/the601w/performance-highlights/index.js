import { FmtSctn }            from '../../../ui';
import { BlockHeader }        from './header';
import { BlockAnnualYield }   from './annual-yield';
import { BlockHoldingPeriod } from './holding-period';
import classes from '../../../../styles/classes.module.scss';

export const PerformanceHighlights = ({ block }) => {
  return (
    <FmtSctn block={ block }>
      <div className={ `performance-highlights ${classes.padding}` }>
        <div className="inner">
          <div className="wrap-header">
            <BlockHeader block={ block } />
          </div>

          <div className="wrap-annual-yield">
            <BlockAnnualYield block={ block } />
          </div>
      
          <div className="wrap-holding-period">
            <BlockHoldingPeriod block={ block } />
          </div>
        </div>
      </div>

      <style jsx>{`
        .performance-highlights {
          height: auto;
          width: 100%;
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {

          .wrap-annual-yield {
            float: left;
            width: 40%;
          }
          .wrap-holding-period {
            float: right;
            width: 40%;
          }
        }
      `}</style>
    </FmtSctn>
  );
}
