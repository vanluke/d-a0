import {clearIdToken} from 'client/users/id-token-service';
import {clearAccessToken} from 'client/users/access-token-service';

const removeUserTokens = () => (clearIdToken(), clearAccessToken());

export {removeUserTokens};
