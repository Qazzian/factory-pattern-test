const config = require('./config/config');

console.info({config});

if (config.isTestConfig) {
  throw new Error('Error: Test config loaded');
}
