/* Returns an Array out of a list of items */
export const toArray = (items) => {
  const arr = [];
  for (let i = 0; i < items.length; i++) {
    arr.push(items[i].text);
  }
  return arr;
}

/* Returns the index of an item by ID */
export const indexById = (posts, post) => posts.findIndex(({ id }) => id === post.id);

/* Returns the index of an item by Slug */
export const indexBySlug = (posts, post) => posts.findIndex(({ slug }) => slug === post.slug);