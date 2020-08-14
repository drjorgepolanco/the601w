import * as wFmt from '../../../../ui/the601w/format';
import classes from '../../../../../styles/classes.module.scss';

export const HighlightHeader = ({ attr }) => {
  return (
    <div className="header clearfix">
      { attr.text_title    && <h2 className="title">{ attr.text_title }</h2> }
      { attr.text_subtitle && <h4 className="subtitle">{ attr.text_subtitle }</h4> }
      { attr.text_body     && <p className={ `body ${classes.text_body}` }>{ attr.text_body }</p> }

      <style jsx>{`
        .header {
          padding-bottom: 32px;
        }
        .title,
        .subtitle,
        .body {
          color: ${wFmt.color.portfolio_dark};
        }
        .title,
        .subtitle {
          font-family: ${wFmt.font.frank_dmcm};
        }
        .title {
          font-size: 32px;
        }
        .subtitle {
          font-size: 20px;
        }
        .body {
          max-width: 100%;
        }
        @media (min-width: 1280px) {
          
          .body {
            max-width: 65%;
          }
        }
      `}</style>
    </div>
  );
}