const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');

module.exports = (env) => {
  const { DEV } = env;
  if (DEV) {
    dotenv.config({ path: './.env' });
  }
  return {
    output: {
      clean: true,
      assetModuleFilename: 'images/[name][ext]',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
          include: /\.module\.css$/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          exclude: /\.module\.css$/,
        },
        {
          test: /\.(svg|png)/,
          type: 'asset',
        },
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    // webpack-dev-server v4.0.0부터는 HMR이 default로 설정되어있다.
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new webpack.DefinePlugin({
        DEVELOPMENT: env.DEV ? 'true' : 'false',
        API_SERVER_HOST: env.DEV
          ? JSON.stringify(process.env.LOCAL_API_SERVER)
          : JSON.stringify(process.env.API_SERVER),
      }),
      new webpack.EnvironmentPlugin({ DEV: 'on' }),
    ],
    resolve: {
      alias: {
        styles: path.resolve('./src/styles/'),
        assets: path.resolve('./src/assets/'),
        pages: path.resolve('./src/views/pages'),
        components: path.resolve('./src/views/components'),
        services: path.resolve('./src/services'),
        lib: path.resolve('./src/lib/'),
      },
    },
    devServer: {
      historyApiFallback: true,
    },
  };
};
