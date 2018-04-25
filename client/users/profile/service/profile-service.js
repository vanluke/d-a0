import request from 'client/common/request';
import config from 'client/common/config';

const usersEndpoint = `${config.api.path}/users`;

export const profileService = {
  updateProfile(payload) {
    return request({
      url: `${usersEndpoint}/${payload.user.user_id}`,
      method: 'put',
      data: payload,
    });
  }
};
