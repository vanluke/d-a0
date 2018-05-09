import createPost from './post-create';
import getPosts from './post-get';
import getPostsById from './get-posts-by-id';

export default (router) => {
  router.post('/:user_id/posts', createPost);
  router.get('/:user_id/posts', getPosts);
  router.get('/posts/:postId', getPostsById);
};
