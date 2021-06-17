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

                // Enable CSS Modules features for all file types
                modules: true

                // Specify this instead, if you don't want to generate randomized class names:
                //
                //   modules: {
                //     mode: 'global',
                //     exportGlobals: true
                //   }
                //
                // Docs here: https://www.npmjs.com/package/css-loader#boolean-2
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
                }
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
                }
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
