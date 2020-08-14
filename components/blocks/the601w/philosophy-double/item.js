import { LinkGroup, MediaGroup, TextGroupTitleBody } from '../../../ui';

export const BlockItem = ({ item }) => (
  <>
    <MediaGroup attr={ item } />
    <TextGroupTitleBody attr={ item } />
    <LinkGroup attr={ item } />
  </>
);