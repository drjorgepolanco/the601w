import { fmtClassLayout, fmtFlexGroup, fmtFlexItemGroup, fmtFloatClass, fmtHeight, fmtGridGroup, fmtGridItemGroup, fmtMargin, fmtMaxHeight, fmtMaxWidth, fmtWidth } from './index';

export const fmtLayoutType  = (attr) => (attr && attr.fmt_layout_type) ? attr.fmt_layout_type : '';
export const fmtLayoutClass = (attr) => (fmtLayoutType(attr)) ? `layout-${fmtLayoutType(attr)}` : '';

/* Layout */
export const fmtLayoutList = (attr) => {
  if (attr && attr.fmt_layout_type) {
    switch(attr.fmt_layout_type) {
      case 'flex':
        return ({ ...fmtFlexGroup(attr) });
      case 'grid':
        return ({ ...fmtGridGroup(attr) });
      default:
        return {};
    }
  }
}


/* Layout Item Style */
export const fmtLayoutItemStyle = (settings, attr) => {
  if (attr && settings && settings.fmt_layout_type) {
    const type = settings.fmt_layout_type;
    const fmtNotGrid = { ...fmtHeight(settings), ...fmtMargin(settings), ...fmtMaxHeight(settings) }
    switch(type) {
      case 'class':
        return ({ ...fmtNotGrid });
      case 'flex':
        return ({ ...fmtNotGrid, ...fmtFlexItemGroup(attr) });
      case 'float':
        return ({ ...fmtNotGrid, ...fmtWidth(attr), ...fmtMaxWidth(attr) });
      case 'grid':
        return ({ ...fmtGridItemGroup(settings, attr) });
      default:
        return ({});
    }
  }
}

/* Layout item Class */
export const fmtLayoutItemClass = (settings, attr) => {
  if (attr && settings && settings.fmt_layout_type) {
    const type = settings.fmt_layout_type;
    switch(type) {
      case 'class':
        return fmtClassLayout(attr);
      case 'float':
        return fmtFloatClass(attr);
      default:
        return '';
    }
  }
}