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
  auth0: {
    audience: {
      doc: 'Audience',
      format: '*',
      default: '',
      env: 'audience',
    },
    clientId: {
      doc: 'Client Id',
      format: '*',
      default: '',
      env: 'clientId',
    },
    domain: {
      doc: 'Domain',
      format: '*',
      default: '',
      env: 'domain',
    },
    clientSecret: {
      doc: 'Client secret',
      format: '*',
      default: '',
      env: 'secret',
    },
    routes: {
      token: {
        doc: 'Token route',
        format: '*',
        default: '',
        env: 'token',
      },
    },
  },
  secrect: {
    doc: 'AES Secret',
    format: '*',
    default: '',
    env: 'secret',
  },
  cloudinary: {
    apiKey: {
      doc: 'API Key',
      format: '*',
      default: '',
      env: 'cloudinary',
    },
    apiSecret: {
      doc: 'API Secret',
      format: '*',
      default: '',
      env: 'cloudinary',
    },
    cloudName: {
      doc: 'cloud name',
      format: '*',
      default: '',
      env: 'cloudinary',
    }
  }
});

const env = conf.get('env');
const configPath = path.join(__dirname, 'config');

conf.loadFile(`${configPath}/${env}.json`);
conf.validate({allowed: true});

export default conf;
