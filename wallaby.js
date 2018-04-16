module.exports = function () {
  return {
    files: [
      'client/**/*.js',
      'api/**/*.js',
      'server/**/*.js',
    ],

    tests: [
      'client/**/*test.js',
      'api/**/*.test.js',
      'server/**/*.test.js',
    ],

    testFramework: 'jest',
  };
};
