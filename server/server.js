import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import 'localstorage-polyfill';
import config from './config';
import hot from '../webpack/hotreload-middleware';
import setup from './setup';

import './error';

//global['localStorage'] = localStorage;

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
  setup(app);
}

const port = config.get('port');
const ip = config.get('ip');

app.listen(port, ip, () => console.log(`listening on ${port}`, new Date().toString()));

export default app;
