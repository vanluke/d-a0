import React from 'react';
import configureMockStore from 'redux-mock-store';
import {createEpicMiddleware} from 'redux-observable';
import {shallow, mount} from 'enzyme';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import TestContainer from 'client/common/utils/store-test-component';
import {
  postsEpic,
} from './state';
import {initialState} from './state/posts-reducer';
import PostsContainer from './posts';
import Posts from './components/posts';

describe('Posts', () => {
  describe('Container', () => {
    const posts = [{
      id: '5ae18295446b6fbe752f4461',
      isActive: false,
      balanceTo: '54196.68',
      image: 'http://placehold.it/32x32',
      title: 'Quis qui id deserunt est.',
      name: 'sit',
      makes: [
        'EARTHMARK',
        'COGNICODE',
        'APEX',
      ],
      author: 'richardosborn@apex.com',
      email: 'richardosborn@apex.com',
      phone: '+48 (944) 489-3435',
      location: {
        latitude: -13.085184,
        longitude: -121.239648,
      },
      about: 'Nulla irure consequat dolore ad fugiat consequat duis esse exercitation dolore. Duis ipsum excepteur exercitation excepteur. Tempor est sint fugiat voluptate laborum ullamco dolor tempor incididunt sint elit id.\r\n',
      description: 'Amet ad cillum anim ad proident mollit sit non pariatur proident sint. Laboris velit dolor deserunt ad et velit. Dolor sit consequat aliquip sint aute aliqua. Magna minim culpa laborum tempor enim ut et ea.\r\nAute cupidatat enim laboris mollit culpa elit incididunt amet nulla ea occaecat. Dolore irure consequat in pariatur sunt dolor ea fugiat. Ut ipsum voluptate sint minim.\r\n',
      registered: '2014-03-15T02:19:39 -01:00',
      modified: '2015-04-28T04:42:02 -02:00',
      tags: [
        'ullamco',
        'consequat',
        'ea',
        'consectetur',
        'ea',
        'minim',
        'non',
      ],
    }];
    const dependencies = {
      postsService: {
        connect: () => Observable.of(posts),
      },
    };
    const epicMiddleware = createEpicMiddleware(postsEpic, {dependencies});
    const mockStore = configureMockStore([epicMiddleware]);
    let store = mockStore({
      posts: {
        ...initialState,
      }
    });

    beforeEach(() => {
      const postsState = initialState.set('posts', posts);
      store = mockStore({
        posts: postsState,
      });
    });

    afterEach(() => {
      epicMiddleware.replaceEpic(postsEpic);
    });

    it('should render', () => {
      const wrapper = shallow(<TestContainer><PostsContainer /></TestContainer>);

      expect(wrapper.isEmptyRender()).toBeFalsy();
    });

    it('should Posts receive props', () => {
      const wrapper = mount(<TestContainer store={store}>
        <PostsContainer />
      </TestContainer>); // eslint-disable-line
      const actual = wrapper.find(Posts).props();
      expect({posts, isLoading: false}).toEqual(actual);
    });
    it('should redner Posts', () => {
      const wrapper = mount(<TestContainer store={store}>
        <PostsContainer />
      </TestContainer>); // eslint-disable-line
      const actual = wrapper.find(Posts);
      expect(actual).toHaveLength(1);
    });
  });
});
