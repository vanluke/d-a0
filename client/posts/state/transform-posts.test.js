import transformPosts from './transform-posts';

test('should transform posts', () => {
  const posts = [{
    id: 1,
    tags: ['a', 'b'],
    makes: ['make1'],
  }];
  const actual = transformPosts(posts);
  const expected = [{
    id: 1,
    tags: 'a b',
    makes: 'make1',
  }];
  expect(expected).toEqual(actual);
});
