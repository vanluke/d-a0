import handleAsync from '../middleware/async-handler';
import postService from './post-service';

export default handleAsync(async (req, res) => {
  const {postId} = req.params;
  const posts = await postService.getPostsById(postId);
  return res.status(200).send(posts);
});
