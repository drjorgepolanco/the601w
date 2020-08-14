import { ListGroup } from '../../../ui';
import { BlockItem } from './item';

const List = ListGroup(BlockItem);

export const BlockList = (props) => <List { ...props } />