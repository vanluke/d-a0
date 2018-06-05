import {Server, SocketIO} from 'mock-socket';
import postsService from './posts-service';

jest.mock('socket.io-client');
import * as io from 'socket.io-client'; // eslint-disable-line
jest.mock('client/common/request');
import * as lib from 'client/common/request'; // eslint-disable-line


describe('Posts Service', () => {
  io.default.mockImplementation(SocketIO);
  const requestFN = jest.fn();
  lib.default.mockImplementation(requestFN);
  it('should connect receive message', (done) => {
    const mockServer = new Server('http://localhost:3001');
    const connectPayload = [{
      id: 1,
    }, {
      id: 2,
    }];
    mockServer.on('connection', () => {
      mockServer.emit('posts::message', [connectPayload]);
    });
    postsService.connect().subscribe((response) => {
     expect(response).toEqual(connectPayload);
     done();
     mockServer.stop();
    });
  });
  it('should request post by id', () => {
    const props = {
      postId: 1,
    };
    postsService.getPost(props);
    const expected = {
      method: 'get',
      url: 'http://localhost:3001/api/v0/posts/1',
    };
    expect(requestFN).toHaveBeenCalledWith(expected);
  });
});
