import { useEffect, useState } from 'react';
import { FmtBlock, LinkPostType } from '../../../ui';
import classes from '../../../../styles/classes.module.scss';
import * as wData from '../../../ui/the601w/data';
import * as wFmt from '../../../ui/the601w/format';

function numberWithCommas(x) {
  // return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function stat(x) {
  return numberWithCommas(parseInt(x));
}

/* Fetch Buildings */
import { api } from '../../../../utils';
const fetchBuildings = async () => {
  const res = await api.get(`/wp/v2/buildings?per_page=100`);
  return res || [];
}

export const BlockBody = (props) => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(null);
  const { body = {} } = props.block.attrs;

  const getItems = async () => {
    try {
      const buildings = await fetchBuildings();
      setItems(buildings.data);
      setStatus(buildings.status);
    } catch (error) {
      console.warn(error);
    }
  }
  useEffect(() => {
    let isCancelled = false;
    getItems();

    return () => {
      isCancelled = true;
    }
  }, [status]);


  const Header = () => {
    return (
      <div className={ `${classes.table_flex} item` }>
        <div className={ `${classes.table_cell} cell property` }>
          <span>Property</span>
        </div>

        <div className={ `${classes.table_cell} cell ${classes.tablet_pt_up}` }>
          <span>Location</span>
        </div>

        <div className={ `${classes.table_cell} cell` }>
          <span>Square Footage</span>
        </div>

        <div className={ `${classes.table_cell} cell ${classes.tablet_pt_up}` }>
          <span>Purchase Date</span>
        </div>

        <div className={ `${classes.table_cell} cell ${classes.phablet_up}` }>
          <span>Purchase Price</span>
        </div>

        <div className={ `${classes.table_cell} cell ${classes.tablet_pt_up}` }>
          <span>Mortgage</span>
        </div>

        <div className={ `${classes.table_cell} cell` }>
          <span>Cash Investment</span>
        </div>

        <style jsx>{`
          * {
            font-size: 14px;
            font-family: ${wFmt.font.frank_dmcm};
            color: white;
          }
          div {
            text-transform: uppercase;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          div span {
            display: block;
            max-width: 75px;
            margin: 0;
          }
          .item {
            border-bottom: 1px solid #E7EBEF;
            padding: 0 16px;
          }
          .cell {
            padding: 24px 8px;
            flex: 0 0 33.333%;
            text-align: left;
          }
          @media (min-width: 414px) {

            .cell {
              flex: 0 0 25%;
            }
          }
          @media (min-width: 768px) {

            .cell {
              flex: 0 0 14.28%;
            }
          }
          @media (min-width: 1024px) {

            div span {
              max-width: 100%;
            }
          }
        `}</style>
      </div>
    );
  }

  const Item = (props) => {
    const { item, index } = props;
    const { body } = props.block.attrs;
    const bldg = item.blocks.find(el => el.blockName === 'ow-blocks/the601w-building');
    const { settings, stats } = bldg.attrs;
    
    return ((settings.w_status === body.w_status) && (
      <div className={ `${classes.table_flex} item` }>
        <div className={ `${classes.table_cell} cell property` }>
          <LinkPostType slug={ item.slug } types="buildings" style={{ color: wFmt.color.portfolio_dark }}>
            <span dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
          </LinkPostType>
        </div>

        <div className={ `${classes.table_cell} cell location ${classes.tablet_pt_up}` }>
          { settings.w_city && wData.location[settings.w_city] }
        </div>

        <div className={ `${classes.table_cell} cell sq-footage` }>
          { stat(stats.sq_footage) }
        </div>

        <div className={ `${classes.table_cell} cell purchase-date ${classes.tablet_pt_up}` }>
          { stats.purchase_date }
        </div>

        <div className={ `${classes.table_cell} cell purchase-price ${classes.phablet_up}` }>
          { stat(stats.purchase_price) }
        </div>

        <div className={ `${classes.table_cell} cell mortgage ${classes.tablet_pt_up}` }>
          { stat(stats.mortgage) }
        </div>

        <div className={ `${classes.table_cell} cell investment` }>
          { stat(stats.investment) }
        </div>

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
          .property {
            text-decoration: underline;
          }
          @media (min-width: 414px) {

            .cell {
              flex: 0 0 25%;
            }
          }
          @media (min-width: 768px) {

            .cell {
              flex: 0 0 14.28%;
            }
          }
        `}</style>
      </div>
    ));
  }
  const Table = (props) => {
    return (
      <div className="wrap">
        { (items && items.length) ? (
          <div className="table">
            { items.map((item, index) => {
              return <Item { ...props } key={ index } index={ index } item={ item } />
            }) }
          </div>
        ) : (
          <p style={{ textAlign: 'center' }}>
            <img alt="" className="spinner" src="/images/spinner.gif" />
          </p>
        ) }

        <style jsx>{`
          .table {
            width: 100%;
          }
          .spinner {
            display: block;
            margin: 0 auto;
          }
        `}</style>
      </div>
    )
  }
  return (
    <FmtBlock attr={ body } attrName={ 'body' }>
      <div className="block-body">

        <div className="header">
          <div className={ classes.padding }>
            { body.text_title && <h3 className={ classes.title_thick } style={{ color: 'white', textTransform: 'uppercase' }}>{ body.text_title }</h3> }
            { body.text_subtitle && <p className={ classes.building_header_subtitle }>{ body.text_subtitle }</p> }
          </div>
          
          { <Header /> }
        </div>

        <div className="body">
          { <Table { ...props } /> }
        </div>
      </div>

      <style jsx>{`
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
    </FmtBlock>
  );
}


