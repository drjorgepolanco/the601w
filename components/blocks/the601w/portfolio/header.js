import { FmtBlock } from '../../../ui';
import classes      from '../../../../styles/classes.module.scss';
import * as wMrkp   from '../../../ui/the601w/markup';

export const BlockHeader = (props) => {
  const { block } = props;
  const { header = {} } = block.attrs;
  const title = header.text_title ? header.text_title : '';
  return ((header.show) ? (
    <FmtBlock attr={ header } attrName="header">
      <wMrkp.BuildingsHeader>
        <h3 className={ classes.title_thick } style={{ color: 'white', textTransform: 'uppercase' }}>
          { title }
        </h3>
      </wMrkp.BuildingsHeader>
    </FmtBlock>
  ) : null);
}