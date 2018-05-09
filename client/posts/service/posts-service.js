import {Observable} from 'rxjs/Observable';
import io from 'socket.io-client';
import request from 'client/common/request';
import config from 'client/common/config';

const {posts} = config.sockets;
const {path} = config.api;

const postsEndpoint = `${path}/posts`;

class PostsService {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.socket = null;
  }

  connect() {
    this.socket = io(this.endpoint);
    return new Observable((observer) => {
      this.socket.on(posts.message, data => observer.next(data));
      return () => this.socket.disconnect();
    });
  }

  disconnect() {
    this.socket.disconnect();
  }

  getPost({postId}) {
    return request({
      url: `${postsEndpoint}/${postId}`,
      method: 'get',
    });
  }
}

const postsService = new PostsService(posts.endpoint);

export default postsService;
