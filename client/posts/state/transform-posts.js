import map from 'lodash/fp/map';

const transformPosts = posts => map(post => ({
  ...post,
  makes: post.makes.join(' '),
  tags: post.tags.join(' '),
}))(posts);

export default transformPosts;
