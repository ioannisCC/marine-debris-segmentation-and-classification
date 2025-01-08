const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  (config) => {
    config.resolve.fallback = {
      util: require.resolve("util/"),
    };
    return config;
  }
);
