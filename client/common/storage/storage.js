const storage = typeof window !== 'undefined' && window && window.localStorage;

const localStorage = () => storage || global.localStorage;

export default localStorage;
