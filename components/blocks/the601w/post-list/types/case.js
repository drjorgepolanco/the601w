import { LinkPostType } from '../../../../ui';
import * as wMrkp       from '../../../../ui/the601w/markup';
import { isOdd }        from '../../../../../utils';
import classes          from '../../../../../styles/classes.module.scss';

export const TypeCase = (props) => {
  const { index, item } = props;
  const caseHero = item.blocks.find(el => el.blockName === 'ow-blocks/the601w-case-hero');
  const orientation = isOdd(index) ? 'rtl' : 'ltr';
  const { body, header, settings } = caseHero.attrs;
  return (
    <div className="case-inner">
      <LinkPostType types={ 'cases' } slug={ item.slug }>
        <div className={ `wrap-case-ctnt clearfix ${orientation}` }>
          <div className="wrap-img" style={{ background: settings.fmt_color_accent }}>
            <div className={ `wrap-ctnt ${classes.align_xy}` }>
              <img src={ header.media_icon_url } className={ classes.post_type_case_icon } alt={ header.text_name } />
              <h3 className={ `${classes.title_thin} ${classes.post_type_case_name}` }>{ header.text_name }</h3>
            </div>
          </div>
          <div className={ `wrap-text ${classes.post_type_case_text}` }>
            <div className="inner">
              <div className={ classes.align_y_tablet_up }>
                <h2 className={ classes.post_type_case_title }    dangerouslySetInnerHTML={{ __html: body.text_title   }} style={{ color: settings.fmt_color_accent }} />
                <h4 className={ classes.post_type_case_subtitle } dangerouslySetInnerHTML={{ __html: header.text_title }} />
                <wMrkp.ReadMore color="#223655" text="Case Study" />
              </div>
            </div>
          </div>
        </div>
      </LinkPostType>
      
      <style jsx>{`
        .case-inner {
          padding: 32px 0;
        }
        .wrap-img {
          height: calc(100vw - 32px);
          max-height: 440px;
          width: 100%;
          position: relative;
        }
        .wrap-case-ctnt {
          position: relative;
          width: 100%;
        }
        h2, h4 {
          padding: 0;
        }
        h2 {
          line-height: 0.8;
        }
        @media (min-width: 768px) {
          
          .case-inner {
            padding: 48px 0;
          }
          .wrap-img {
            width: 55%;
            clear: none;
          }
          .wrap-text {
            width: 45%;
            clear: none;
          }
          .ltr .wrap-img {
            position: relative;
          }
          .ltr .wrap-text {
            float: right;
            position: absolute;
            right: 0;
            height: 100%;
            top: 0;
          }
          .rtl .wrap-img {
            float: right;
            position: relative;
          }
          .rtl .wrap-text {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
}