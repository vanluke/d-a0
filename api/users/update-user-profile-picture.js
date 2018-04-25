import request from '../request';
import config from '../config';
import cloudinary from '../cloudinary';

const {
  routes,
} = config.get('auth0');

export default (req, res) => {
  const {user, file} = req.body;
  const {authorization} = req.headers;
  cloudinary.v2.uploader.upload(file, {
    resource_type: 'image',
    folder: 'users/avatars/',
    public_id: file.name,
    tags: [user.user_id, 'images'],
  }, (error, result) => {
    if (error) {
      return res.send(error.code, error);
    }
    const picture = {
      user_metadata: {
        picture: result.url,
      },
    };
    return request({
      url: `${routes.users}/${user.user_id}`,
      method: 'PATCH',
      headers: {
        authorization,
      },
      data: JSON.stringify({...picture}),
    }).map(({response, code}) => ({response, code}))
      .catch(err => res.send(500, err))
      .subscribe(({response, code}) => res.send(code, response));
  });
};
