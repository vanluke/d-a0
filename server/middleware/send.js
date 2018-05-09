import {clearChunks, flushChunkNames} from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import renderString from './render-routes';

const sendAppToBrowser = ({
  req,
  res,
  routes,
  store,
  stats,
}) => {
  clearChunks();
  const initialState = JSON.stringify(store.getState());
  const context = {};
  const {content} = renderString({
    req,
    context,
    routes,
    store,
  });
  const {
    js,
    scripts,
    // cssHash,
    stylesheets,
  } = flushChunks(stats, {
    chunkNames: flushChunkNames(),
  });
  return res.render('index', {
    content,
    scripts: scripts && scripts.map(s => `/${s}`),
    js,
    stylesheets: stylesheets && stylesheets.map(s => `/${s}`),
    initialState,
  });
};

export default sendAppToBrowser;
