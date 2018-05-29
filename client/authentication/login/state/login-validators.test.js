import {
  makePredicate,
  makePredicates,
  isLengthGreaterThan,
  makeValidationObject,
  hasCapitalLetter,
  isNotEmpty,
  validate,
  isGreaterThan,
} from './login-validators';

test('should make predicates', () => {
  const predicate = [isNotEmpty, 'Error message'];
  const actual = makePredicate(predicate);
  expect(typeof actual).toEqual('function');
});

test('should predicates return message', () => {
  const predicate = [isNotEmpty, 'Error message'];
  const value = '';
  const actual = makePredicate(predicate)(value);
  expect(actual).toEqual('Error message');
});

test('should create an array of predicates', () => {
  const props = {validations: [isNotEmpty, 'Name should not be  empty.']};
  const actual = makePredicates(props);

  expect(Array.isArray(actual)).toBeTruthy();
  expect(typeof actual[0]).toEqual('function');
});

test('should validate create predicates', () => {
  const input = {
    login: {
      input: '',
      validations: [[isNotEmpty, 'Name should not be  empty.']],
    },
    password: {
      input: '',
      validations: [[
        isLengthGreaterThan(5),
        'Minimum Password length of 8 is required.',
      ], [
        hasCapitalLetter,
        'Password should contain at least one uppercase letter.',
      ]],
    },
  };
  const actual = validate(input);
  const {login, password} = actual;
  expect(login).toEqual(expect.arrayContaining(['Name should not be  empty.']));
  expect(password)
    .toEqual(expect
      .arrayContaining(['Minimum Password length of 8 is required.']));
  expect(password)
    .toEqual(expect
      .arrayContaining(['Password should contain at least one uppercase letter.']));
});

test('should merge input with validation', () => {
  const props = [{login: '', password: ''}, { // eslint-disable-line
    login: [[isNotEmpty, 'Name should not be  empty.']],
    password: [
      [isLengthGreaterThan(5), 'Minimum Password length of 8 is required.'],
      [hasCapitalLetter, 'Password should contain at least one uppercase letter.'],
    ]}];
  const expected = {
    login: {
      input: '',
      validations: [[isNotEmpty, 'Name should not be  empty.']],
    },
    password: {
      input: '',
      validations: [
        [isLengthGreaterThan(5), 'Minimum Password length of 8 is required.'],
        [hasCapitalLetter, 'Password should contain at least one uppercase letter.'],
      ],
    },
  };
  const actual = makeValidationObject(props[0])(props[1]);
  const actualString = JSON.stringify(actual);
  const expectedString = JSON.stringify(expected);
  expect(actualString).toEqual(expectedString);
});

test('should check if is not empty', () => {
  const props = 'not empty';
  const actual = isNotEmpty(props);
  expect(actual).toBeTruthy();
});

test('should fails when string is empty', () => {
  const props = '';
  const actual = isNotEmpty(props);
  expect(actual).toBeFalsy();
});

test('should check if contains capital letter', () => {
  const props = 'John';
  const actual = hasCapitalLetter(props);
  expect(actual).toBeTruthy();
});

test('should fails when not contains capital letter', () => {
  const props = 'john';
  const actual = hasCapitalLetter(props);
  expect(actual).toBeFalsy();
});

test('should check if it is is greater than', () => {
  const props = 5;
  const compareTo = 10;
  const actual = isGreaterThan(props)(compareTo);
  expect(actual).toBeTruthy();
});

test('should fails when it is not greater than', () => {
  const props = 15;
  const compareTo = 10;
  const actual = isGreaterThan(props)(compareTo);
  expect(actual).toBeFalsy();
});

test('should validate length', () => {
  const hasMoteThan5Characters = isLengthGreaterThan(5);
  const props = 'ssssss';
  const actual = hasMoteThan5Characters(props);
  expect(actual).toBeTruthy();
});

test('should validation fails when length is not met', () => {
  const hasMoteThan5Characters = isLengthGreaterThan(5);
  const props = 'sss';
  const actual = hasMoteThan5Characters(props);
  expect(actual).toBeFalsy();
});
