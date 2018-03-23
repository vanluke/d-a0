import cors from 'cors';
import bodyParser from 'body-parser';
import app from './app';
import mount from './router';
import config from './config';
import './error';

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

mount(app);

const port = config.get('port');
const ip = config.get('ip');

app.listen(port, ip, () => console.log('\x1b[36m%s\x1b[0m', `[API] listening on ${port}`, new Date().toString()));

export default app;
