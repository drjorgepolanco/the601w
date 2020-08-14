import { FmtBlock } from '../../../ui';
import classes from '../../../../styles/classes.module.scss';

export const BlockBody = (props) => {
  const { body, settings } = props.block.attrs; 
  const { fmt_color_accent, fmt_orientation } = settings;
  return (
    <FmtBlock attr={ body } attrName={ 'body' }>
      <div className={ `case-hero__body clearfix ${classes.padding}` }>
        <div className={ `wrap-text clearfix ${classes.padding}` } style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="ctnt-title">
            <h2 className={ classes.title_thin } style={{ color: fmt_color_accent }} dangerouslySetInnerHTML={{ __html: body.text_title }} />
          </div>
          <div className={ `ctnt-body ${fmt_orientation}` }>
            { body.text_body && <div className={ `text-body ${classes.text_body}` } dangerouslySetInnerHTML={{ __html: body.text_body }} /> }
          </div>
        </div>
      </div>

      <style jsx>{`
        .case-hero__body {
          padding-left: 0;
          padding-right: 0;
        }
        .text-body {
          font-style: italic;
        }
        @media (min-width: 1024px) {
          .ctnt-title {
            float: left;
            width: 45%;
            padding-right: 64px;
          }
          .ctnt-body {
            float: right;
            width: 55%;
          }
        }
      `}</style>
    </FmtBlock>
  );
}