import express from 'express';
import config from './config';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import hot from '../webpack/hotreload-middleware';

const app = express();

app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'pug');
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

const DEV = process.env.NODE_ENV === 'development';
if (DEV) {
  hot.useWebpackMiddleware(app);
} else {
  const clientConfig = webpackConfig.find(cnf => cnf.name === 'client');
  const publicPath = clientConfig.output.publicPath;
  const outputPath = clientConfig.output.path;
  const clientStats = require('../build/stats.json');
  const serverRender = require('../build/server/server.js').default;

  app.use(publicPath, express.static(outputPath));
  app.use(serverRender({clientStats, outputPath}));
}

const port = config.get('port');
const ip = config.get('ip');

app.listen(port, ip, () => console.log(`listening on ${port}`, new Date().toString()));

export default app;
