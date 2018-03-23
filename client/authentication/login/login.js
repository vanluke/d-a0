import {
  isNotEmpty,
  isLengthGreaterThan,
  hasCapitalLetter,
} from 'client/authentication/login/state/login-validators';
import withValidation from 'client/authentication/login/state/login-composition';
import Login from './components/login-form';

const validationRules = {
  login: [
    [isNotEmpty, 'Name should not be  empty.'],
  ],
  password: [
    [isLengthGreaterThan(5), 'Minimum Password length of 8 is required.'],
    [hasCapitalLetter, 'Password should contain at least one uppercase letter.'],
  ],
};

const initialState = {
  form: {
    login: '',
    password: '',
  },
  touched: {
    login: false,
    password: false,
  },
  isValid: false,
};

const enhanced = withValidation(initialState, validationRules);

export default enhanced(Login);
