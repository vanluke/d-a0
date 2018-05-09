import postService from './post-service';

export default async (req, res) => {
  const {post} = req.body;
  const {userId} = req.params;

  try {
    return await postService.create(userId, post);
  } catch (e) {
    return res.send(500, e.message);
  }
};
