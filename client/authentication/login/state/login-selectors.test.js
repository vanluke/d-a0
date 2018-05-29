import {getErrors} from './login-selectors';
import {
  isNotEmpty,
  isLengthGreaterThan,
  hasCapitalLetter,
} from './login-validators';

test('should gets validation error', () => {
  const validationRules = {
    login: [
      [isNotEmpty, 'Name should not be  empty.'],
    ],
    password: [
      [isLengthGreaterThan(5), 'Minimum Password length of 8 is required.'],
      [hasCapitalLetter, 'Password should contain at least one uppercase letter.'],
    ],
  };
  const props = {login: '', password: ''};
  const actual = getErrors(props, validationRules);
  const expected = {
    login: 'Name should not be  empty.',
    password: 'Minimum Password length of 8 is required., Password should contain at least one uppercase letter.',
  };
  expect(actual).toEqual(expected);
});

test('should validation error be empty', () => {
  const validationRules = {
    login: [
      [isNotEmpty, 'Name should not be  empty.'],
    ],
    password: [
      [isLengthGreaterThan(5), 'Minimum Password length of 8 is required.'],
      [hasCapitalLetter, 'Password should contain at least one uppercase letter.'],
    ],
  };
  const props = {login: 'name', password: 'NNNNNNs'};
  const actual = getErrors(props, validationRules);
  const expected = {login: '', password: ''};
  expect(actual).toEqual(expected);
});
