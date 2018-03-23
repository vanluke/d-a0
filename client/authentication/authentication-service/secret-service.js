import aes from 'aes-js';
import config from 'client/common/config';

const convertToAscii = (value = '') => value.charCodeAt(0);

const getKey = key => (key || '').split('').map(convertToAscii);

const convertToBytes = value => aes.utils.utf8.toBytes(value);

const createAESCounter = key => new aes.ModeOfOperation.ctr(key, new aes.Counter(5)); // eslint-disable-line

const encrypt = (aesCounter, text) => aes.utils.hex.fromBytes(aesCounter.encrypt(text));

const secrectService = {
  encrypt(text) {
    const key = getKey(config.salt);
    const secrect = convertToBytes(text);
    const counter = createAESCounter(key);
    const encrypted = encrypt(counter, secrect);
    return encrypted;
  },
};

export default secrectService;
