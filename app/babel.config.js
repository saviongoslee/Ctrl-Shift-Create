process.env.EXPO_ROUTER_APP_ROOT = "./main/screens"; // Override app directory to use './screens'
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};