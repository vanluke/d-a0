import cors from 'cors';
import bodyParser from 'body-parser';
import {Server} from 'http';
import app from './app';
import mount from './router';
import config from './config';
import postsIO from './posts/posts-io';
import './error';

const server = Server(app);

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

mount(app);

postsIO(server);

const port = config.get('port');
const ip = config.get('ip');


server.listen(port, ip, () => console.log('\x1b[36m%s\x1b[0m', `[API] listening on ${port}`, new Date().toString()));

export default server;
