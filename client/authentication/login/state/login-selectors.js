import {
  compose,
  mapValues,
  pickBy,
  get,
  unnest,
} from 'lodash/fp';
import {
  compact,
  values,
} from 'lodash';
import {validate, makeValidationObject} from './login-validators';

export const getValue = get(['target', 'value']);

const filterWithValidation = pickBy(compose(Array.isArray, get('validations')));

export const errorMessage = result =>
  result.filter(error => error !== null).join(', ');

const isEmpty = result => (Array.isArray(result) && result.length === 0);

export const isValid = compose(
  isEmpty,
  compact,
  unnest,
  values,
  mapValues(r => r),
);

export const hasErrors = compose(
  isValid,
  validate,
  filterWithValidation,
  makeValidationObject,
);

export const getErrors = compose(
  mapValues(errorMessage),
  validate,
  filterWithValidation,
  makeValidationObject,
);
