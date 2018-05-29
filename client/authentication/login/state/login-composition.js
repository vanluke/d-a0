import {compose, withState, mapProps} from 'recompose';
import {reduce} from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {setUser} from 'client/users/user-actions';
import {getIdToken} from 'client/users/id-token-service';
import ErrorMessage from 'client/common/components/error-message';
import authenticationService, {tokenService} from 'client/authentication/authentication-service';
import config from 'client/common/config';
import {getErrors, hasErrors} from './login-selectors';

const constructErrors = (errors, touched) => reduce(errors, (acc, curr, i) => ({
  ...acc,
  [i]: touched[i] === true ? (<ErrorMessage error={curr} />) : null,
}), {});

const WithValidation = (initialState, validationRules) =>
  compose(
    connect(null, {setUser}),
    withState('state', 'updateState', {...initialState, errors: {}}),
    mapProps(({updateState, state, ...rest}) => ({
      onSubmit: (event) => {
        event.preventDefault();
        updateState(st => ({...st, isLoading: true}));
        return authenticationService
          .authenticate(state.form)
          .map(({response}) => {
            updateState(st => ({...st, isLoading: false}));
            return response;
          })
          .subscribe((response) => {
            tokenService(config.token.accessToken)
              .setToken(response.access_token);
            tokenService(config.token.idToken)
              .setToken(response.id_token);
            rest.setUser(getIdToken());
            rest.history.push('/');
          });
      },
      onBlur: field => () =>
        updateState(st => ({
          ...st,
          touched: {...st.touched, [field]: true},
          errors: constructErrors(getErrors(st.form, validationRules), st.touched),
        })),
      onChange: name => value =>
        updateState(st => (
          {
            ...state,
            form: {
              ...st.form,
              [name]: value,
            },
            isValid: hasErrors(st.form, validationRules),
            errors: constructErrors(getErrors(st.form, validationRules), st.touched),
          }
        )),
      isValid: state.isValid,
      isLoading: state.isLoading,
      form: state.form,
      touched: state.touched,
      errors: state.errors,
      ...rest,
    })),
  );


export default WithValidation;
