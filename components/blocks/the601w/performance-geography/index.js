import { FmtSctn }   from '../../../ui';
import { BlockBody } from './body';
import classes       from '../../../../styles/classes.module.scss';

export const PerformanceGeography = ({ block }) => {
  return (
    <FmtSctn block={ block }>
      <div className={ `performance-geography ${classes.padding}` }>
        <div className="inner">
          <div className="wrap-body">
            <BlockBody block={ block } />
          </div>
        </div>
      </div>

      <style jsx>{`
        .performance-geography {
          height: auto;
          width: 100%;
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
        }
      `}</style>
    </FmtSctn>
  );
}
