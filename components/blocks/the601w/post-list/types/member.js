import classes from '../../../../../styles/classes.module.scss';

export const TypeMember = ({ item }) => {
  const title   = item.title.rendered;
  const content = item.content.rendered;
  return (
    <div className="member-inner">
      <div className={ `wrap-member-ctnt clearfix` }>
        <div className={ `wrap-text` }>
          { title   && <h4 className={ classes.font_post_list_item_member_title }>{ title }</h4> }
          { content && <div className={ classes.text_body } dangerouslySetInnerHTML={{ __html: content }} /> }
        </div>
      </div>
    </div>
  );
}