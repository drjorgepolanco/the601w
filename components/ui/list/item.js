import { FmtItemCtnr, FmtItemCtnt } from '../../ui';

export const ListItem = (Item) => (props) => {
  const { item } = props;

  const attr     = item;
  const attrName = 'item'
  attr['show']   = true;

  return (
    <FmtItemCtnr { ...props } attr={ attr } attrName={ attrName }>
      <FmtItemCtnt { ...props } attr={ attr } attrName={ attrName }>
        <Item { ...props } />
      </FmtItemCtnt>
    </FmtItemCtnr>
  );
}