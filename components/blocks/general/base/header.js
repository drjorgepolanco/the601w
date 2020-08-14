import { ContentGroup } from '../../../ui';

export const BlockHeader = (props) => {
  const { header = null } = props.block.attrs;
  return <ContentGroup attr={ header } attrName={ 'header' } />;
}