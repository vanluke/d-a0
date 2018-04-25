import updateUserPicture from './update-user-profile-picture';

export default (router) => {
  router.put('/users/:user_id', updateUserPicture);
};
