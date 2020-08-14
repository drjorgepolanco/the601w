import { FmtBlock, LinkPostType, MediaImageProp, MediaBgImageProp, TextBody } from '../../../ui';
import classes from '../../../../styles/classes.module.scss';
import * as wData from '../../../ui/the601w/data';
import * as wFmt  from '../../../ui/the601w/format';
import * as wMrkp from '../../../ui/the601w/markup';
import { DesktopOnly, MobileOnly } from '../../../../utils/media-query';

const LinkToCaseStudy = ({ slug, title }) => {
  return slug && ( 
    <LinkPostType types="cases" slug={ slug }>
      <div className="case-link">
        { title && <h2 className={ `${classes.title_thin} ${classes.font_size_h3}` } dangerouslySetInnerHTML={{ __html: title }} /> }
        <wMrkp.ReadMore color={ wFmt.color.portfolio_dark } text="Read Case Study" />
      </div>

      <style jsx>{`
        h2 {
          color: ${wFmt.color.portfolio_dark};
        }
        .case-link {
          padding: 64px 0 0;
          max-width: 340px;
        }
      `}</style>
    </LinkPostType>
  );
}
export const BlockBody = (props) => {
  const { 
    body, settings, acquisition_price, cash_invested, 
    cash_raise, debt, equity_invested, holding, noi, 
    occupancy, purchase_price, roi, sale_price, sq_footage 
  } = props.block.attrs; 

  const stats = [
    sq_footage,
    purchase_price,
    acquisition_price, 
    cash_invested, 
    equity_invested,
    cash_raise, 
    sale_price,
    debt,
    occupancy,
    roi,
    noi,
    holding
  ];
    
  const { fmt_orientation, w_status } = settings;
  const color   = wFmt.color.portfolio_light;
  const address = `${settings.text_address}, ${wData.location[settings.w_city]}`;
  const isSold  = w_status === 'sold';

  const img = props.single && props.single.image ? props.single.image   : wFmt.noImage.portrait;
  const map = body && body.media_image_url       ? body.media_image_url : wFmt.noImage.square;

  const title = body && body.text_title ? body.text_title : '';
  return (
    <FmtBlock attr={ body } attrName={ 'body' }>
      <div className={ `building-content ${fmt_orientation}` }>
        <div className="wrap-img">
          <MediaBgImageProp src={ img } />
        </div>

        <div className="wrap-text clearfix">
          <div className={ `text-ctnt ${classes.padding}` }>
            <div className={ `text-body ${classes.padding}` }>
              <div className="text-inner">
                <div className="info">
                  <a href={ body.text_address_link } target="_blank">
                    <MediaImageProp src={ map } />
                    <p className={ classes.case_body_address }>{ address }</p>
                  </a>

                  <DesktopOnly>
                    { fmt_orientation === 'landscape' && <LinkToCaseStudy slug={ body.post_slug } title={ body.post_title } /> }
                  </DesktopOnly>
                </div>
              </div>
            </div>

            <div className={ `text-stats ${classes.padding}` }>
              <div className="text-inner">                
                { (title) && (
                  <div className="title">
                    <h6 className={ classes.font_sans_light }>Success Story</h6>
                    <h3 className={ classes.title_thin } style={{ color }} dangerouslySetInnerHTML={{ __html: title }} />
                  </div>
                ) }

                <TextBody attr={ body } />

                { isSold && (
                  <div className="wrap-sold">
                    <wMrkp.Sold bgColor={ color } isSold={ isSold } />
                  </div>
                ) }

                <wMrkp.Stats settings={ settings } stats={ stats } />

                { fmt_orientation === 'portrait' && <LinkToCaseStudy slug={ body.post_slug } title={ body.post_title } /> }
              </div>

              <MobileOnly>
                { fmt_orientation === 'landscape' && <LinkToCaseStudy slug={ body.post_slug } title={ body.post_title } /> }
              </MobileOnly>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`

        .wrap-img {
          width: 100%;
          height: calc(100vh - 80px);
        }
        .wrap-text {
          width: 100%;
        }
        .wrap-sold {
          padding-bottom: 16px;
        }
        .text-ctnt {
          max-width: 1280px;
          margin: 0 auto;
        }
        h6 {
          text-transform: uppercase;
          padding-bottom: 0;
        }
        h2 {
          padding-bottom: 0;
        }

        // Landscape

        .landscape .wrap-img {
          height: 100vw;
          max-height: calc(100vh - 240px);
        }


        // Portrait

        .portrait .wrap-img {
          height: calc(100vh - 80px);
        }
        .portrait .text-body {
          padding-bottom: 16px;
        }
        @media (min-width: 1024px) {

          .text-inner {
            display: block;
            max-width: 360px;
            margin: 0 auto;
          }


          .landscape .text-body {
            float: right;
            width: 50%;
          }
          .landscape .text-stats {
            float: left;
            width: 50%;
          }
          
          .portrait .wrap-img {
            position: absolute;
            right: 0;
            width: 50%;
            height: 100%;
          }
          .portrait .wrap-text {
            width: 50%;
            position: relative;
          }
          .portrait .text-ctnt {
            width: 100%;
            max-width: 720px;
            float: right;
            padding-left: 0;
            padding-right: 0;
          }
          .portrait .text-inner {
            margin: 0 auto;
          }
        }
      `}</style>
    </FmtBlock>
  );
}
