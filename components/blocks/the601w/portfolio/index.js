import { FmtSctn }     from '../../../ui';
import { BlockHeader } from './header';
import { BlockBody }   from './body';
import classes         from '../../../../styles/classes.module.scss';

export const Portfolio = ({ block }) => {
  const { posts_type } = block.attrs;
  const isBuilding = posts_type === 'building';
  const titleClass = isBuilding ? classes.font_post_list_title : classes.font_post_list_title_line_through;
  return (
    <FmtSctn block={ block }>
      <div className="post-list" style={{ background: '#f6f6f6' }}>
        <BlockHeader block={ block } titleClass={ titleClass } />
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