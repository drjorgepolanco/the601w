import { FmtSctn }   from '../../../ui';
import { BlockBody } from './body';

export const HomeDouble = (props) => {
  return (
    <FmtSctn { ...props }>
      <BlockBody { ...props } />
    </FmtSctn>
  );
}