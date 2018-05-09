import handleAsync from '../middleware/async-handler';
import postService from './post-service';

export default handleAsync(async (req, res) => {
  const {userId} = req.params;
  const posts = await postService.getPosts(userId);
  return res.status(200).send(posts);
});
