import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  toggleIsBussy,
  selectIsBussy,
  selectError,
  selectNumbers,
} from './state';

const TestComponent = ({
  isBussy,
  numbers,
  error,
}) => (
  <section>
    {isBussy}
    {numbers && JSON.stringify(numbers)}
    {error && JSON.stringify(error)}
  </section>
);

TestComponent.propTypes = {
  isBussy: PropTypes.bool.isRequired,
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  error: PropTypes.string.isRequired,
};

class Test extends PureComponent {
  componentDidMount() {
    const {initialize} = this.props;
    initialize();
  }

  render() {
    return (<TestComponent
      {...this.props}
    />);
  }
}

Test.propTypes = {
  initialize: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  numbers: selectNumbers(state),
  error: selectError(state),
  isBussy: selectIsBussy(state),
});

const mapDispatchToProps = dispatch => ({
  initialize: () => dispatch(toggleIsBussy()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
