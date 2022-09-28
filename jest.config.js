// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./src/test/mock-test.js'),
  },
};