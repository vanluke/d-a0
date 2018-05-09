import secrectService from './secret-service';

test('should create encrypted text', () => {
  const text = 'password';
  const expected = 'a4eb293b0d26f35d'; // password,
  const actual = secrectService.encrypt(text);

  expect(actual).toEqual(expected);
});
