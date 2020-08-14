import { blockBySlug } from '../../../../../../utils';

export const hasAccent = (obj, slug) => blockBySlug(obj, slug).attrs.settings.fmt_color_accent ? blockBySlug(obj, slug).attrs.settings.fmt_color_accent : '';
export const accent = (obj, slug, color) => obj && hasAccent(obj, slug) ? blockBySlug(obj, slug).attrs.settings.fmt_color_accent : color;