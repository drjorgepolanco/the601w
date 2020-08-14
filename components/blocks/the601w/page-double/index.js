import { FmtSctn }   from '../../../ui';
import { BlockBody } from './body';

export const PageDouble = (props) => {
  return (
    <FmtSctn { ...props }>
      <BlockBody { ...props } />
    </FmtSctn>
  );
}