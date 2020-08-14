import { NavCtrl } from './components/control';

/* Arguments */

// control: both | next | prev
// linkType: both | post | parent
// types: buildings| cases | posts | ...  

export const PostsNav = (props) => {
  const { control, linkNext, linkPrev } = props;
  const parent = { name: 'posts', ...props.parent };
  const isNext = control === 'next' || control === 'both';
  const isPrev = control === 'prev' || control === 'both';
  const both   = control === 'both' ? 'both' : '';
  return (
    <div className="posts-nav clearfix">
      { isNext && (
        <div className={ `ctrl next ${both}` }>
          <NavCtrl { ...props } parent={ parent } control="next" linkType={ linkNext } />
        </div>
      ) }
      
      { isPrev && (
        <div className={ `ctrl prev ${both}` }>
          <NavCtrl { ...props } parent={ parent } control="prev" linkType={ linkPrev } />
        </div>
      ) }

      <style jsx>{`
        .ctrl {
          height: 100%;
          width: 100%;
        }
        .next {
          text-align: right;
        }
        .prev {
          text-align: left;
        }
        .next.both {
          width: 50%;
          float: right;
        }
        .prev.both {
          width: 50%;
          float: left;
        }
      `}</style>
    </div>
  );
}
