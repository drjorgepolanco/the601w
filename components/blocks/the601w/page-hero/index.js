import { fmtAlign, fmtColor, fmtPad, fmtPosition, fmtWidthCtnt, FmtSctn, FmtCtnr, FmtCtnt } from '../../../ui';
import classes from '../../../../styles/classes.module.scss';

export const PageHero = (props) => {
  const { body } = props.block.attrs;
  const { text_body, text_subtitle, text_title } = body;
  const style = { ...fmtAlign(body), ...fmtColor(body), ...fmtPad(body), ...fmtWidthCtnt(body), top: `${body.fmt_position_top}%`};
  const classNames = ['ow-ctnt', `attr-body`, fmtPosition(body)].join(' ').trim();
  console.log(body.fmt_position_top)

  return (
    <FmtSctn { ...props }>
      <FmtCtnr attr={ body } attrName={ 'body' }>
      { (body && body.show) && (
          <div className={ classNames } style={ style }>
            <div className="inner">
              <div className="page-hero clearfix">
                <div className="text group">
                  { (text_title)    && <h2 className={ classes.text_title }>{ text_title }</h2> }
                  { (text_subtitle) && <h4 className={ classes.text_subtitle }>{ text_subtitle }</h4> }
                  { (text_body)     && <p className={ classes.text_body } dangerouslySetInnerHTML={{ __html: text_body }} /> }
                </div>
              </div>
            </div>
          </div>
        ) }
      </FmtCtnr>
      <style jsx>{`        
        .text {
          max-width: 550px;
          margin: 0 auto;
        }
      `}</style>
      <style jsx global>{`
        @media (max-width: 1023px) {
          
          .the601w-page-hero {
            height: auto !important;
            background: #f6f6f6;
          }
          .the601w-page-hero * {
            color: #223655;
          }
          .the601w-page-hero .ow-bg-group {
            position: relative;
            height: 100vw;
            max-height: 768px;
          }
          .the601w-page-hero .ow-sctn-ctnt .ow-bg-group {
            position: absolute;
            height: 100%;
          }
          .the601w-page-hero .ow-ctnt.pos {
            transform: none;
            top: auto;
            left: auto;
            position: relative;
          }
          .page-hero a {
            color: white;
            text-decoration: underline;
          }
        }
      `}</style>
    </FmtSctn>
  );
}