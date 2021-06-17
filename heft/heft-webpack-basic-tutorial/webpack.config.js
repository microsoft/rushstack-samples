'use strict';

const path = require('path');
const sass = require('sass');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

/**
 * If the "--production" command-line parameter is specified when invoking Heft, then the
 * "production" function parameter will be true.  You can use this to enable bundling optimizations.
 */
function createWebpackConfig({ production }) {
  const webpackConfig = {
    // Documentation: https://webpack.js.org/configuration/mode/
    mode: production ? 'production' : 'development',
    resolve: {
      // Important: Do NOT add TypeScript extensions here
      extensions: ['.js', '.jsx', '.json']
    },
    module: {
      rules: [
        {
          // We recommend the newer .scss file format because its syntax is a proper superset of plain CSS.
          // The older .sass syntax is supported only for backwards compatibility.
          // The SASS docs are here: https://sass-lang.com/documentation/syntax
          test: /\.(scss|sass|css)$/,
          exclude: /node_modules/,
          use: [
            {
              // Generates JavaScript code that injects CSS styles into the DOM at runtime.
              // The default configuration creates <style> elements from JS strings
              // https://www.npmjs.com/package/style-loader
              loader: 'style-loader'
            },

            {
              // Translates CSS into CommonJS
              // https://www.npmjs.com/package/css-loader
              loader: 'css-loader',
              options: {
                // 0 => no loaders (default);
                // 1 => postcss-loader;
                // 2 => postcss-loader, sass-loader
                importLoaders: 2,

                // Enable CSS modules:  https://github.com/css-modules/css-modules
                modules: {
                  // The "auto" setting has a confusing design:
                  // - "false" disables CSS modules, i.e. ":local" and ":global" selectors can't be used at all
                  // - "true" means magically disable CSS modules if the file extension isn't like ".module.css"
                  //   or ".module.scss"
                  // - a lambda disables CSS modules only if the lambda returns false; the function parameter is
                  //   the resource path
                  // - a RegExp disables CSS modules only if the resource path does not match the RegExp
                  //
                  // NOTE: Counterintuitively, if you instead set "modules=true" then CSS modules are enabled
                  //       without magic, equivalent to "auto: () => true" instead of "auto: true"
                  //
                  // DEFAULT: "true" (i.e. path based magic)
                  auto: (resourcePath) => {
                    // Enable CSS modules unless the filename opts out using a file extension like "filename.global.scss"
                    return !/\.global\.\w+$/i.test(resourcePath.test);
                  },

                  // This setting has no effect unless CSS modules is enabled. Possible values:
                  // - "local": global CSS by default, overridable using the ":local" selector
                  // - "global": local CSS by default, overridable using the ":global" selector
                  // - "pure": requires selectors to contain at least one local class or id
                  // - a lambda that returns the mode string; the function parameter is the resource path
                  //
                  // DEFAULT: "local"
                  mode: 'local',

                  // Set this to true if you want to be able to reference the global declarations using import statements
                  // similar to local CSS modules
                  //
                  // DEFAULT: false
                  // exportGlobals: true,

                  // Provide a recognizable class/module names for developers
                  //
                  // DEFAULT: "[hash:base64]"
                  localIdentName: production ? '[hash:base64]' : '[local]__[hash:base64:5]'
                },

                sourceMap: !production
              }
            },

            {
              // PostCSS is a general-purpose CSS transformer; however, we prefer to avoid custom CSS syntaxes
              // and only use the standard SASS syntax.  Thus postcss-loader is used here only to apply the popular
              // "autoprefixer" plugin improves browser compatibility by generating vendor prefixes.
              // https://www.npmjs.com/package/postcss-loader
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    // https://www.npmjs.com/package/autoprefixer
                    autoprefixer
                  ]
                },

                sourceMap: !production
              }
            },

            {
              // Compiles SASS syntax into CSS
              // https://www.npmjs.com/package/sass-loader
              loader: 'sass-loader',
              options: {
                implementation: sass,
                sassOptions: {
                  includePaths: [path.resolve(__dirname, 'node_modules')]
                },

                sourceMap: !production
              }
            }
          ]
        },

        {
          test: /\.(jpeg|jpg|png|gif|svg|ico)$/,
          // Allows import/require() to be used with an asset file. The file will be copied to the output folder,
          // and the import statement will return its URL.
          // https://www.npmjs.com/package/file-loader
          loader: 'file-loader'
        },

        {
          test: /\.js$/,
          enforce: 'pre',
          use: [
            // The source-map-loader extracts existing source maps from all JavaScript entries. This includes both
            // inline source maps as well as those linked via URL. All source map data is passed to Webpack for
            // processing as per a chosen source map style specified by the devtool option in webpack.config.js.
            // https://www.npmjs.com/package/source-map-loader
            'source-map-loader'
          ]
        }
      ]
    },

    entry: {
      app: path.join(__dirname, 'lib', 'index.js'),

      // Put these libraries in a separate vendor bundle
      vendor: ['react', 'react-dom']
    },

    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name]_[contenthash].js'
    },

    performance: {
      // This specifies the bundle size limit that will trigger Webpack's warning saying:
      // "The following entrypoint(s) combined asset size exceeds the recommended limit."
      maxEntrypointSize: 250000,
      maxAssetSize: 250000
    },

    devServer: {
      port: 9000,

      // The http://localhost namespace should be relative to the "dist" folder
      contentBase: path.join(__dirname, 'dist')
    },

    devtool: production ? undefined : 'source-map',
    plugins: [
      // See here for documentation: https://github.com/jantimon/html-webpack-plugin
      new HtmlWebpackPlugin({
        template: 'assets/index.html'
      }),

      // See here for documentation: https://webpack.js.org/plugins/define-plugin/
      new DefinePlugin({
        DEBUG: !production
      })
    ]
  };

  return webpackConfig;
}

module.exports = createWebpackConfig;
