import classes from '../../../../styles/classes.module.scss';
import * as wFmt from '../../../ui/the601w/format';
import { ListHeader } from './list-header';

function numberWithCommas(x) {
  // return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function stat(x) {
  const val = x * 1000;
  return numberWithCommas(parseInt(val));
}


export const BlockList = (props) => {
  const { block } = props;
  const { list = {}, header = {} } = block.attrs;
  const { w_status } = header;
  const isCurrent = w_status === 'current';
  const isSold = w_status === 'sold';

  const Item = (props) => {
    const { item, index } = props;
    return (
      <div className={ `${classes.table_flex} item ${w_status}` }>
        <div className={ `${classes.table_cell} cell property` }>
          { item.property }
        </div>

        <div className={ `${classes.table_cell} cell location` }>
          { item.location }
        </div>

        <div className={ `${classes.table_cell} cell price` }>
          { stat(item.price) }
        </div>

        { isSold && (
          <>
            <div className={ `${classes.table_cell} cell profit` }>
              { stat(item.profit) }
            </div>
            <div className={ `${classes.table_cell} cell irr` }>
              { item.irr }%
            </div>
            <div className={ `${classes.table_cell} cell return` }>
              { item.return }%
            </div>
          </>
        ) }
        { isCurrent && (
          <>
            <div className={ `${classes.table_cell} cell mortgage` }>
              { stat(item.mortgage) }
            </div>
            <div className={ `${classes.table_cell} cell equity` }>
              { stat(item.equity) }
            </div>
          </>
        ) }

        <style jsx>{`
          * {
            font-size: 16px;
            font-family: ${wFmt.font.frank_dmcm};
            color: ${wFmt.color.portfolio_dark};
          }
          .item {
            border-bottom: 1px solid #E7EBEF;
            padding: 0 16px;
          }
          .cell {
            padding: 24px 8px;
            flex: 0 0 33.333%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          .cell span {
            width: 100%;
            display: block;
          }
          .property {
            text-decoration: underline;
          }
          .item.sold .cell {
            flex: 0 0 16.6667%
          }
          .item.current .cell {
            flex: 0 0 20%
          }
        `}</style>
      </div>
    );
  }
  return (
    <div className="wrap clearfix">
      { (list && list.length) ? (
        <div className="table-responsive" style={{ overflowX: 'auto' }}>
          <ListHeader block={ block } />
          { list.map((item, index) => {
            return <Item { ...props } key={ index } index={ index } item={ item } />
          }) }
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>
          <img alt="" className="spinner" src="/images/spinner.gif" />
        </p>
      ) }

      <style jsx>{`

        .wrap, .table-responsive {
          -ms-overflow-style: none !important;  /* IE and Edge */
          scrollbar-width: none !important;  /* Firefox */
        }
        .wrap {
          overflow-y: auto;
          overflow-x: auto;
        }
        .table-responsive {
          overflow-x: auto;
          min-width: 1280px;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .table-responsive::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 767px) {
          .table-responsive {
            width: 100%;
            -ms-overflow-style: -ms-autohiding-scrollbar;
            overflow-y: hidden;
          }
        }
        .spinner {
          display: block;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}


