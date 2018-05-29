import io from 'socket.io';
import postService from './post-service';

export default (server) => {
  io(server, {
    origins: '*:*',
    serveClient: false,
  }).on('connection', async (socket) => {
    socket.emit('posts::message', await postService.getPosts());
    socket.on('posts::receive', (/* data */) => {
      // await postService.createPosts()
    });
  });
};
