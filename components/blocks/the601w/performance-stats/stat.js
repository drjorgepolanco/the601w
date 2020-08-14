import { FmtBlock, MediaImage } from '../../../ui';
import classes from '../../../../styles/classes.module.scss';
import * as wFmt from '../../../ui/the601w/format';

export const BlockStat = (props) => {
  const { attr = null, attrName = '' } = props;
  return (
    <FmtBlock attr={ attr } attrName={ attrName }>
      <div className={ `wrap block-${attrName}` }>
        { attr.text_pretitle && <p className={ `pretitle ${classes.text_body}` }>{ attr.text_pretitle }</p> }
        { attr.text_title    && <h4 className="title">{ attr.text_title }</h4> }
        { attr.text_subtitle && <p className={ `subtitle ${classes.text_body}` }>{ attr.text_subtitle }</p> }
        <MediaImage attr={ attr } style={{ maxWidth: '160px', margin: '16px auto 0' }} />
      </div>
      <style jsx>{`
        .wrap {
          max-width: 280px;
          margin: 0 auto;
        }
        .pretitle, .title, .subtitle {
          color: ${wFmt.color.portfolio_dark};
          text-align: center;
          padding: 0;
        }
        .title {
          font-family: ${wFmt.font.frank_dmxcm};
          font-size: 56px;
          padding-top: 16px;
        }
      `}</style>
    </FmtBlock>
  );
}