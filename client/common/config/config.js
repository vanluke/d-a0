const env = process.env.APP_ENV || 'development';

const config = require(`./${env}.config.json`); // eslint-disable-line

export default config;
