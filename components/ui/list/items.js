import { FmtList } from '../../ui';

export const ListItems = (ListItem) => (props) => {
  const { block } = props;
  const { list = [], settings = {} } = block.attrs;
  const attr = settings;
  const attrName = 'list';
  
  const items = () => list.length ? list.map((item, index) => <ListItem key={ index } item={ item } block={ block } />) : null;

  return (list && list.length ? (
    <FmtList attr={ attr } attrName={ attrName }>
      { items() }
    </FmtList>
  ) : null);
}