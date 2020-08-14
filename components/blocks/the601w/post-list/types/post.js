import { LinkPostType, MediaBgImageProp } from '../../../../ui';
import * as wMrkp from '../../../../ui/the601w/markup';
import classes from '../../../../../styles/classes.module.scss';

export const TypePost = ({ item }) => {
  const { image, title, slug } = item;
  const $w_portfolio = '#223655';
  return (
    <div className="post-inner">
      <LinkPostType types={ 'posts' } slug={ slug }>
        <div className={ `wrap-post-ctnt clearfix` }>
          <div className="wrap-img">
            <MediaBgImageProp src={ image } />
          </div>
          <div className="wrap-text">
            { title.rendered && <h4 className={ classes.font_post_list_item_post_title }>{ title.rendered }</h4> }
            <wMrkp.ReadMore color={ $w_portfolio } text="Read More" />
          </div>
        </div>
      </LinkPostType>
      
      <style jsx>{`
        .post-inner {
          padding: 16px 0;
        }
        .wrap-img {
          height: calc(100vw - 64px);
          max-height: 360px;
        }
        .wrap-text {
          padding: 16px;
          padding-top: 0;
        }
      `}</style>
    </div>
  );
}