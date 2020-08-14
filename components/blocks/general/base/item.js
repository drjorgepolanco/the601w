import { LinkGroup, MediaGroup, TextGroup } from '../../../ui';

export const BlockItem = ({ item }) => (
  <>
    <MediaGroup attr={ item } />
    <TextGroup attr={ item } />
    <LinkGroup attr={ item } />
  </>
);