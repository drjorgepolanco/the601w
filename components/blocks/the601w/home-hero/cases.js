import { Case }  from './case';
import classes from '../../../../styles/classes.module.scss';
import * as wFmt from '../../../ui/the601w/format';

export const Cases = (props) => {
  const { attrs } = props.block;
  const { cases_body, cases_list } = attrs;

  const list = (items) => items.map((item, index) => <Case { ...props } key={ index } index={ index } item={ item } />);

  return (
    <div className={ `subsctn cases ${classes.padding}` } style={{ ...wFmt.gradient(cases_body.fmt_bg_color, cases_body.fmt_color_accent) }}>
      <div className="inner" style={{ color: cases_body.fmt_color }}>
        <div className={ `wrap-text ${classes.align_xy_tablet_up}` }>
          <p className={ `${classes.text_body} ${classes.font_size_p_lg}` }>
            { cases_body.text_body }
          </p>
          <ul className={ `clearfix ${classes.resetUl}` }>
            { list(cases_list) }
          </ul>
        </div>
      </div>

      <style jsx>{`
        ul {
          padding: 16px 0;
        }
        @media (min-width: 768px) {
          ul {
            padding: 16px 0 0;
          }
          .subsctn.cases {
            padding-bottom: 0;
          }
          .cases {
            height: calc(100vh);
          }
          .wrap-text {
            max-width: 600px;
            width: 100%;
            right: 0;
          }
        }
      `}</style>
    </div>
  );
}