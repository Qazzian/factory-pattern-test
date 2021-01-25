const config = require('./config.js');

describe('loaded test config', () => {
  test('config loaded',  () => {
    expect(config).toBeDefined();
    expect(config.isLoaded).toBe(true);
    expect(config.isTestConfig).toBe(true);
  });
});
