import 'babel-polyfill'; // eslint-disable-line
import 'raf/polyfill'; // eslint-disable-line
import Enzyme from 'enzyme'; // eslint-disable-line
import Adapter from 'enzyme-adapter-react-16'; // eslint-disable-line

Enzyme.configure({adapter: new Adapter()});

module.exports = {
  verbose: true,
};
