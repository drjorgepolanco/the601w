import { FmtBlock } from '../../../ui';
import classes from '../../../../styles/classes.module.scss';

export const BlockHeader = (props) => {
  const { block, } = props;
  const { header = {} } = block.attrs;
  const title = header.text_title ? header.text_title : '';
  return ((header.show) ? (
    <FmtBlock attr={ header } attrName={ 'header' }>
      { title && <h3 className={ classes.text_line }>{ title }</h3> }
    </FmtBlock>
  ) : null);
}