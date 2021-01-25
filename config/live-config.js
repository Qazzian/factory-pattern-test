

module.exports = (() => {
  if (process.env.NODE_ENV === 'test') {
    throw new Error('This file should not be called');
  }
  return {
    isTestConfig: false,
  };
})();
