import { FmtBlock } from '../../../ui';
import classes from '../../../../styles/classes.module.scss';
import * as wFmt from '../../../ui/the601w/format';

export const BlockHeader = (props) => {
  const { header = null } = props.block.attrs;
  return (
    <FmtBlock attr={ header } attrName={ 'header' }>
      <div className="block-header">
        { header.text_title && <h4 className={ `title ${classes.text_line}` }>{ header.text_title }</h4> }
      </div>

      <style jsx>{`
        .title {
          color: ${wFmt.color.highlights};
          font-family: ${wFmt.font.frank_dmxcm};
          letter-spacing: 3px;
        }
      `}</style>
    </FmtBlock>
  );
}