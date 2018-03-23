import aes from 'aes-js';
import config from '../config';

const convertToAscii = (value = '') => value.charCodeAt(0);

const getKey = key => (key || '').split('').map(convertToAscii);

const convertToBytes = value => aes.utils.hex.toBytes(value);

const createAESCounter = key => new aes.ModeOfOperation.ctr(key, new aes.Counter(5)); // eslint-disable-line

const decrypt = (aesCounter, encrypted) => aes.utils.utf8.fromBytes(aesCounter.decrypt(encrypted));

const securityService = {
  decrypt(encrypted) {
    const key = getKey(config.get('secrect'));
    const secrect = convertToBytes(encrypted);
    const counter = createAESCounter(key);
    const decrypted = decrypt(counter, secrect);
    return decrypted;
  },
};

export default securityService;
