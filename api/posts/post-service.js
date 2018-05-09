import {
  connect,
  close,
  mogolabEndpoint,
  createId,
} from '../mongodb';

const posts = require('../../__mocks__/posts.json');

const createPost = (userId, post) => ({
  userId,
  id: createId(),
  ...post,
});

const postService = {
  getPostsById(postId) {
    return new Promise((resolve) => {
      return setTimeout(() => resolve(posts.find(p => p.id === postId)), 900);
    });
  },
  async create(userId, post) {
    try {
      const db = await connect(mogolabEndpoint);
      const collection = db.collection.find('posts').insert(createPost(userId, post));
      close(db);
      return collection;
    } catch (e) {
      throw e;
    }
  },
  getPosts(userId) {
    return new Promise((resolve) => {
      return setTimeout(() => resolve(posts), 900);
    });
  },
};

export default postService;
