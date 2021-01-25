module.exports = (() => {
  if (process.env.NODE_ENV !== 'test') {
    throw new Error('Error: Trying to load test config in non testing environment');
  }

  return {
    isTestConfig: true,
  };
})();
