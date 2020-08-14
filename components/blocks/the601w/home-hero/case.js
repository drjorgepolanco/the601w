import { useState }     from 'react';
import { LinkPostType } from '../../../ui';
import * as the601Mrkp  from '../../../ui/the601w/markup';
import classes          from '../../../../styles/classes.module.scss';

export const Case = (props) => {
  const [visible, setVisible] = useState(false);
  const { index, item } = props;
  const { fmt_color, media_image_url, post_slug } = item;
  const slug      = post_slug.toLowerCase();
  const name      = post_slug.toUpperCase();
  const isVisible = visible ? 'is-visible' : '';

  const onMouseEnter = (e) => {
    props.selectCase(media_image_url);
    setVisible(true);
  }
  const onMouseLeave = (e) => {
    props.selectCase(media_image_url);
    setVisible(false);
  }
  return (
    <li key={ index } className={ `case item-${index} ${slug}` }>
      <div className="inner">
        <LinkPostType types="cases" slug={ slug }>
          <h2 style={{ color: fmt_color }} className={ classes.home_case_title } onMouseEnter={ onMouseEnter } onMouseLeave={ onMouseLeave }>
            { name }
          </h2>
          <div className={ `wrap-link ${classes.align_y} ${isVisible}` }>
            <the601Mrkp.ReadMore color="white" text="Case Study" />
          </div>
        </LinkPostType>
      </div>
      <style jsx global>{`
        @media (max-width: 1023px) {

          li.case .read-more .text {
            display: none;
          }
          .wrap-link {
            opacity: 1;
            right: 0;
            left: auto;
          }
          .wrap-link .arrow {
            top: 0;
            left: 0;
          }
        }
      `}</style>

      <style jsx>{`
        li {
          position: relative;
          padding: 0;
        }
        @media (min-width: 1024px) {
          .wrap-link {
            right: 100px;
            transition: all 0.3s;
            opacity: 0
          } 
          .wrap-link.is-visible {
            right: 0;
            left: auto;
            opacity: 1;
          }
        }
      `}</style>
    </li>
  );
}