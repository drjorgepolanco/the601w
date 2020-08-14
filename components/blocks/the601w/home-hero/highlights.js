import classes from '../../../../styles/classes.module.scss';
import * as wFmt from '../../../ui/the601w/format';

export const Highlights = (props) => {
  const { attrs } = props.block;
  const { highlights_body, highlights_list } = attrs;
  
  /* Body */
  const { fmt_bg_color, fmt_color, text_title } = highlights_body;

  const list = (items) => {
    return items.map((item, index) => {
      const { media_icon_url, text_title, text_body } = item;
      const title = text_title.toUpperCase();
      const body  = text_body.toUpperCase();
      return (
        <li key={ index } className={ `highlight item-${index}` } style={{ color: fmt_color, textAlign: 'center' }}>
          <img src={ media_icon_url } alt={ title } />
          <h2>{ title }</h2>
          <p>{ body }</p>

          <style jsx>{`
            li {
              width: 100%;
              padding: 32px 0 16px;
            }
            h2 {
              padding: 0;
              padding-top: 20px;
              font-size: 50px;
              font-family: ${wFmt.font.frank_dmcm};
            }
            p {
              padding: 0;
              font-size: 20px;
              font-family: ${wFmt.font.frank_bkcm}
            }
            img {
              display: block;
              max-width: 40px;
              margin: 0 auto;
            }
            @media (min-width: 414px) {
              
              li {
                width: 33.3333%;
                float: left;
              }
            }
          `}</style>
        </li>
      );
    });
  }
  return (
    <div className={ `subsctn highlights ${classes.padding}` } style={{ backgroundColor: fmt_bg_color }}>
      <div className="inner" style={{ maxWidth: '680px', margin: '0 auto' }}>
        <h3 className={ classes.home_highlights_title} style={{ textAlign: 'center', color: fmt_color }}>{ text_title }</h3>
        <ul className={ `clearfix ${classes.resetUl}`}>{ list(highlights_list) }</ul>
      </div>
    </div>
  );
}