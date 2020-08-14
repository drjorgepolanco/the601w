import { LinkPostType, MediaBgImageProp } from '../../../../ui';
import * as wFmt  from '../../../../ui/the601w/format';
import * as wData from '../../../../ui/the601w/data';

export const TypeBuilding = (props) => {
  const { item } = props;
  const bldg = item.blocks.find(el => el.blockName === 'ow-blocks/the601w-building');
  const { settings, purchase_price } = bldg.attrs;
  const price = purchase_price ? purchase_price : {};
  return (
    <div className="building-inner">
      <LinkPostType types="buildings" slug={ item.slug }>
        <div className={ `wrap-building-ctnt clearfix` }>
          <div className="wrap-img" style={{ background: settings.fmt_color_accent }}>
            <MediaBgImageProp src={ item.image } />
          </div>
          <div className={ `wrap-text` }>
            <div className="inner">
              <div className="location">
                <h3 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                { settings.w_city && <p>{ wData.location[settings.w_city] }</p> }
              </div>
              {/* <div className="price">
                { price.text_title  && <h6>{ price.text_title }</h6> }
                { settings.w_status && <p>{ settings.w_status }</p> }
              </div> */}
              {/* <div className="status">
                <h6>STATUS</h6>
                <p>{ settings.w_status }</p>
              </div> */}
            </div>
          </div>
        </div>
      </LinkPostType>
      
      <style jsx>{`
        .building-inner {
          width: 100%;
          padding: 4px;
        }
        h3 {
          color: black;
          font-family: ${wFmt.font.filo_sm};
          color: ${wFmt.color.portfolio_dark};
          font-size: 32px;
        }
        p {
          font-family: ${wFmt.font.filo_ot};
          color: ${wFmt.color.highlights};
          padding-top: 0;
        }
        .wrap-img {
          height: calc(100vw - 32px);
          max-height: 400px;
          width: 100%;
          position: relative;
        }
        .wrap-text {
          text-align: center;
        }
        .location {
          padding: 16px 16px 32px;
        }
      `}</style>
    </div>
  );
}