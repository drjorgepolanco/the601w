import { LinkPostType, TextBody } from '../../../ui';

import style      from '../../style.module.scss';
import blockStyle from './style.module.scss';

export const Cases = (props) => {
  const { attrs } = props.block;
  const { cases_body, cases_list } = attrs;

  const list = (items) => {
    return items.map((item, index) => {
      const { fmt_color, media_image_url, text_name } = item;
      const slug  = text_name.toLowerCase();
      const name = text_name.toUpperCase();

      return (
        <li key={ index } className={ `home-case item-${index} ${slug}` }>
          <h2 style={{ color: fmt_color }} onClick={ () => props.selectCase(media_image_url) }>
            { name }
          </h2>
          <div className={ blockStyle.caseLink }>
            <LinkPostType types={ 'cases' } slug={ slug }>
              <span className="arrow">CASE STUDY <i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
            </LinkPostType>
          </div>

          <style jsx>{`
            li {
              position: relative;
            }
            h2 {
              display: block;
              position: relative;
              cursor: pointer;
            }
            div.active {
              visibility: visible;
              opacity: 1;
              left: 200px;
              z-index: 1;
              color: white;
            }
          `}</style>
        </li>
      );
    });
  }
  return (
    <div className={ `subsctn cases ${style.padding}` } style={{ backgroundImage: `linear-gradient(134deg, ${cases_body.fmt_bg_color} 1%, ${cases_body.fmt_color_accent} 60%)` }}>
      <div className="inner" style={{ color: cases_body.fmt_color }}>
        <TextBody attr={ cases_body } />
        <ul className={ `clearfix ${style.resetUl}` }>{ list(cases_list) }</ul>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .cases {
            height: calc(100vh);
          }
        }
      `}</style>
    </div>
  );
}