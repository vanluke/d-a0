import React from 'react';
import PropTypes from 'prop-types';
import {compose} from 'lodash/fp';
import {getValue} from 'client/authentication/login/state/login-selectors';
import Arrow from 'client/common/components/icons/arrow';
import Line from 'client/common/components/icons/line';
import Button from 'client/common/components/flat-button';
import {
  Form,
  Label,
  Input,
  Wrapper,
  Header,
} from './login-form-styled';

const Login = ({
  form,
  onChange,
  onSubmit,
  onBlur,
  errors,
  isValid,
}) => (
  <Wrapper>
    <Header>Signin</Header>
    <Form onSubmit={onSubmit} autoComplete="false">
      <Label>
        <Input
          type="text"
          autoComplete="false"
          placeholder="username"
          onFocus={onBlur('login')}
          value={form.login}
          onChange={compose(onChange('login'), getValue)}
        />
        <Arrow />
        <Line />
        {errors.login}
      </Label>
      <Label>
        <Input
          placeholder="password"
          type="password"
          autoComplete="new-password"
          onFocus={onBlur('password')}
          value={form.password}
          onChange={compose(onChange('password'), getValue)}
        />
        <Arrow />
        <Line />
        {errors.password}
      </Label>
      <Button type="submit" disabled={!isValid}>Signup</Button>
    </Form>
  </Wrapper>);

Login.propTypes = {
  form: PropTypes.shape({
    name: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    login: PropTypes.node,
    password: PropTypes.node,
  }),
  isValid: PropTypes.bool.isRequired,
};

Login.defaultProps = {
  errors: {},
};

export default Login;
