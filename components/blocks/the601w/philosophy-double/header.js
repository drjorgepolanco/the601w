import { FmtBlock, MediaIcon } from '../../../ui';
import classes from '../../../../styles/classes.module.scss';

export const BlockHeader = (props) => {
  const { header = null, settings } = props.block.attrs;
  return (
    <FmtBlock attr={ header } attrName={ 'header' }>
      <div className="ctnr-icon" style={{ backgroundColor: settings.fmt_color, width: '100%', height: '100vh', maxHeight: '320px' }}>
        <div className="inner">
          <div className={ `${classes.align_xy} icon-size` }>
            <MediaIcon attr={ header } />
          </div>
        </div>
      </div>
      <style jsx>{`
        .ctnr-icon {
          width: 100%;
          height: 100vh;
          max-height: 320px;
        }
      `}</style>
    </FmtBlock>
  );
}