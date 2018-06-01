// import {Observable} from 'rxjs/Observable';
// import io from 'socket.io-client';
// import request from 'client/common/request';
// import config from 'client/common/config';

// const {posts} = config.sockets;
// const {path} = config.api;

// const postsEndpoint = `${path}/posts`;

// class PostsService {
//   constructor(endpoint) {
//     this.endpoint = endpoint;
//     this.socket = null;
//   }

//   connect() {
//     this.socket = io(this.endpoint);
//     return new Observable((observer) => {
//       this.socket.on(posts.message, data => observer.next(data));
//       return () => this.socket.disconnect();
//     });
//   }

//   disconnect() {
//     this.socket.disconnect();
//   }

//   getPost({postId}) { // eslint-disable-line
//     return request({
//       url: `${postsEndpoint}/${postId}`,
//       method: 'get',
//     });
//   }
// }

// const postsService = new PostsService(posts.endpoint);

// export default postsService;
import {Server, SocketIO} from 'mock-socket';
import postsService from './posts-service';

describe('Posts Service', () => {
  it('should connect to the socket', (done) => {
    const mockServer = new Server('http://localhost:3001/');
    mockServer.on('connection', () => {
      console.log('BOPOM!!!');
      mockServer.emit('posts::message', 'test message 1');
    });
    window.io = SocketIO;
    setTimeout(() => {
      postsService.connect();
      const actual = postsService.socket;
      console.log(postsService.socket);
      expect(actual).toBeDefined();
      done();
    }, 100);
  });
  it('should gets posts');
  it('should disconnect from socket');
});
