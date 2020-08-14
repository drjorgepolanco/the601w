import { fmtClassName } from '../../../ui';
import { getBlockName } from '../../../../utils';
import { BlockHeader } from './header';
import { BlockBody }   from './body';

export const CaseContent = ({ block }) => {
  const attrs = block.attrs ? block.attrs : {};
  const { blockName } = block;
  return (
    <section className={ `ow-sctn clearfix ${getBlockName(blockName)} ${fmtClassName(attrs)}` }>
      <div className="inner" style={{ backgroundColor: '#F6F6F6' }}>
        <div className={ `ow-sctn-ctnt pad-md` } style={{ maxWidth: '1440px' }}>
          <BlockHeader block={ block } />
          <BlockBody   block={ block } />
        </div>
      </div>
    </section>
  );
}