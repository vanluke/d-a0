import {
  Component,
  Children,
  cloneElement,
} from 'react';
import PropTypes from 'prop-types';

class Tabs extends Component {
  constructor(props) {
    super(...props);
    this.state = {
      activeIndex: 0,
    };
  }

  onActivate = activeIndex => this.setState(() => ({activeIndex}))

  render() {
    const {children} = this.props;
    return Children.map(children, (child) => {
      const {displayName} = child.type;
      switch (displayName) {
        case 'TabPanels':
          return cloneElement(child, {
            activeIndex: this.state.activeIndex,
          });
        case 'TabList':
          return cloneElement(child, {
            activeIndex: this.state.activeIndex,
            onActivate: this.onActivate,
          });
        default:
          return child;
      }
    });
  }
}

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Tabs;
