'use strict';

const createWebpackConfig = require('@rushstack/heft-web-rig/profiles/library/webpack-base.config');

module.exports = function createConfig(env, argv) {
  return createWebpackConfig({
    env: env,
    argv: argv,
    projectRoot: __dirname,

    // Documentation: https://webpack.js.org/configuration/
    configOverride: {
      externals: ['react', 'react-dom', 'tslib'],

      performance: {
        hints: env.production ? 'error' : false
        // This specifies the bundle size limit that will trigger Webpack's warning saying:
        // "The following entrypoint(s) combined asset size exceeds the recommended limit."
        // maxEntrypointSize: 500000,
        // maxAssetSize: 500000
      }
    }
  });
};
