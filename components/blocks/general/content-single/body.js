import { ContentGroup } from '../../../ui';

export const BlockBody = (props) => {
  const { body = null } = props.block.attrs;
  return <ContentGroup attr={ body } attrName={ 'body' } />;
}