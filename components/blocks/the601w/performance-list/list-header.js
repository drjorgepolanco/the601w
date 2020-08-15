import classes from '../../../../styles/classes.module.scss';
import * as wFmt from '../../../ui/the601w/format';

export const ListHeader = ({ block }) => {
  const { header } = block.attrs;
  const { w_status } = header;
  const isCurrent = w_status === 'current';
  const isSold    = w_status === 'sold';
  return (
    <div className={ `${classes.table_flex} item ${w_status}` }>
      <div className={ `${classes.table_cell} cell property` }>
        <span>Property</span>
      </div>

      <div className={ `${classes.table_cell} cell` }>
        <span>Location</span>
      </div>

      <div className={ `${classes.table_cell} cell` }>
        <span>Purchase Date</span>
      </div>

      { isSold && (
        <>
          <div className={ `${classes.table_cell} cell` }>
            <span>Profit</span>
          </div>

          <div className={ `${classes.table_cell} cell` }>
            <span>IRR</span>
          </div>

          <div className={ `${classes.table_cell} cell` }>
            <span>Simple Return PAA</span>
          </div>
        </>
      ) }

      { isCurrent && (
        <>
          <div className={ `${classes.table_cell} cell` }>
            <span>Mortgage</span>
          </div>

          <div className={ `${classes.table_cell} cell` }>
            <span>Equity Investment</span>
          </div>
        </>
      ) }

      <style jsx>{`
        * {
          color: white;
        }
        h3, p {
          padding: 0;
          margin: 0;
        }
        div {
          text-transform: uppercase;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        div span {
          display: block;
          width: 100%;
        }
        .item {
          border-bottom: 1px solid #E7EBEF;
          padding: 0 16px;
          background: ${wFmt.color.portfolio_dark}
        }
        .cell {
          padding: 12px 8px;
          flex: 0 0 33.333%;
          text-align: left;
          font-size: 14px;
          font-family: ${wFmt.font.frank_dmcm};
        }
        .item.sold .cell {
          flex: 0 0 16.6667%;
        }
        .item.current .cell {
          flex: 0 0 20%;
        }
      `}</style>
    </div>  
  );
}
