const plainConfig = {
  isLoaded: true,
};

module.exports = (() => {
  if (process.env.NODE_ENV === 'test') {
    return loadTestConfig();
  }
  return loadLiveConfig();

})();

function loadTestConfig() {
  const config = require('./test-config');
  return {
    ...config,
    ...plainConfig,
  };
}

function loadLiveConfig() {
  const config = require('./live-config');
  return {
    ...config,
    ...plainConfig,
  };
}

