import classes from '../../../../styles/classes.module.scss';
import * as wFmt from '../../../ui/the601w/format';

export const BlockHeader = ({ block }) => {
  const { header } = block.attrs;
  return (
    <div className="block-header">
      <div className="inner">
        <div className="text">
          { header.text_title    && <h3 style={{ color: 'white', textTransform: 'uppercase' }}>{ header.text_title }</h3> }
          { header.text_subtitle && <p className={ `${classes.text_subtitle} ${classes.font_size_p_md}` }>{ header.text_subtitle }</p> }
        </div>
      </div>

      <style jsx>{`
        * {
          color: white;
        }
        .text {
          padding: 48px 32px 28px;
        }
        h3, p {
          padding: 0;
          margin: 0;
        }
        h3 {
          font-family: ${wFmt.font.frank_dmcm};
          font-size: 32px;
        }
      `}</style>
    </div>
  );
}
