import {
  compose,
  map,
  mapValues,
  mergeWith,
} from 'lodash/fp';

export const makePredicate = ([predicate, error]) => a => (predicate(a) ? null : error);

export const makePredicates = map(makePredicate);

const runPredicates = ({input, validations}) =>
  map(predFn => predFn(input), makePredicates(validations));

export const validate = mapValues(runPredicates);
export const makeValidationObject = mergeWith((input, validations) =>
  ({input, validations}));

export const isNotEmpty = prop => prop && prop.trim().length > 0;
export const hasCapitalLetter = prop => /[A-Z]/.test(prop);
export const isGreaterThan = len => prop => (prop > len);
export const isLengthGreaterThan = len => compose(isGreaterThan(len), a => a.length);
