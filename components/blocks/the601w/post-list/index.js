import { FmtSctn }     from '../../../ui';
import { BlockHeader } from './header';
import { BlockBody }   from './body';

export const PostList = ({ block }) => {
  return (
    <FmtSctn block={ block }>
      <div className="post-list">
        <BlockHeader block={ block } />
        <BlockBody   block={ block } />
      </div>

      <style jsx global>{`
        .the601w-post-list .attr-header.ow-ctnt {
          padding: 0 0 32px;
        }
      `}</style>
    </FmtSctn>
  )
};