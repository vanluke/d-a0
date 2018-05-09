const transformPosts = posts => posts.map(post => ({
  ...post,
  makes: post.makes.join(' '),
  tags: post.tags.join(' '),
}));

export default transformPosts;
