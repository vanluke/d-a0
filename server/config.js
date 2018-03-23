import convict from 'convict';
import path from 'path';

const conf = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  ip: {
    doc: 'The IP address.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS',
  },
  port: {
    doc: 'The port.',
    format: 'port',
    default: 1337,
    env: 'PORT',
  },
  version: {
    doc: 'Version.',
    format: '*',
    default: '0',
    env: 'VERSION',
  },
});

const env = conf.get('env');
const configPath = path.join(__dirname, '..', 'server-config');

conf.loadFile(`${configPath}/${env}.json`);
conf.validate({allowed: true});

export default conf;
