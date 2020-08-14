import { FmtBlock, MediaImageProp, TextBody } from '../../../ui';
import * as wMrkp from '../../../ui/the601w/markup';
import classes from '../../../../styles/classes.module.scss';

export const BlockBody = (props) => {
  const { body, settings, acquisition_price, cash_invested, cash_raise, debt, equity_invested, 
    holding, noi, occupancy, purchase_price, roi, sale_price, sq_footage } = props.block.attrs;

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
  return (
    <FmtBlock attr={ body } attrName={ 'body' }>
      <div className="case-content clearfix">
        <div className={ `sidebar ${classes.padding}` }>
          <div className="info">
            <a href={ body.text_address_link } target="_blank">
              <MediaImageProp src={ body.media_image_url } />
              <p className={ classes.case_body_address }>{ body.text_address }</p>
            </a>
          </div>
          
          <wMrkp.Stats settings={ settings } stats={ stats } />
        </div>
        <div className="body">
          { body.text_body && <div className={ `text-body ${classes.text_body}` } dangerouslySetInnerHTML={{ __html: body.text_body }} /> }
        </div>
      </div>

      <style jsx>{`
        .body, .sidebar {
          padding: 16px 0;
        }
        @media (min-width: 1024px) {
          .sidebar {
            float: left;
            width: 45%;
            padding-right: 32px;
            max-width: 420px;
          }
          .body {
            padding: 0;
            float: right;
            width: 55%;
          }
        }
      `}</style>
    </FmtBlock>
  );
}