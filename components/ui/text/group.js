import { TextPretitle, TextTitle, TextSubtitle, TextBody } from './index';
import { fmtColorAccent } from '../index';

export const TextGroup = ({ attr, style = {} }) => {
  const accent = (attr.fmt_color_accent) ? { color: attr.fmt_color_accent } : {};
  return ((attr.text_body || attr.text_pretitle || attr.text_title || attr.text_subtitle) && (
    <div className="ow-text ow-group" style={ style }>
      <TextPretitle attr={ attr } style={{ ...fmtColorAccent(attr) }} />
      <TextTitle    attr={ attr } />
      <TextSubtitle attr={ attr } style={{ ...fmtColorAccent(attr) }} />
      <TextBody     attr={ attr } />
    </div>
  ));
}
export const TextGroupTitleBody = ({ attr, style = {} }) => {
  if (!attr) {
    console.log('Missing attr.')
    return;
  }
  return ((attr.text_body || attr.text_title) ? (
    <div className="ow-text ow-group" style={ style }>
      <TextTitle attr={ attr } style={{ ...fmtColorAccent(attr) }}  />
      <TextBody  attr={ attr } />
    </div>
  ) : null);
}