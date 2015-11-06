var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
var pkg = require('./package.json');
var meta = require('./meta.json');
var publicPath = '/assets/@vtex.' + pkg.name + '/';
var production = process.env.NODE_ENV === 'production';

// Generate an entry point for each component in 'src/components/'
var entryPointsNames = fs.readdirSync('src/components');
var entryPoints = {};
entryPointsNames.forEach(function(entryPoint) {
  entryPoints[entryPoint] = './src/components/' + entryPoint + '/index.js';
});

var editorsEntryPointsNames = fs.readdirSync('src/editors');
var lastEntryPoint;
editorsEntryPointsNames.forEach(function(entryPoint) {
  var entryPointName = 'editors/' + entryPoint;
  entryPoints[entryPointName] = ['./src/editors/' + entryPoint + '/index.js'];
  lastEntryPoint = entryPointName;
});

entryPoints[lastEntryPoint].push('webpack-hot-middleware/client');

// Create a commons file for the public components (all components except editors)
var publicEntryPoints = [];
Object.keys(entryPoints).forEach(function(entryPoint) {
  if (entryPoint.indexOf('editors') === -1) {
    publicEntryPoints.push(entryPoint);
  }
});

module.exports = {
  entry: entryPoints,

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],

    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        loader: 'babel',
        query: {
          stage: 0,
          plugins: []
        }
      }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.svg$/,
        loaders: ['raw-loader', 'svgo-loader?' + JSON.stringify({
          plugins: [
            {removeTitle: true},
            {convertColors: {shorthex: false}},
            {convertPathData: false}
          ]
        })]
      }, {
        test: /\.(png|jpg|woff|ttf|eot|woff2)$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.jpg$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: production ? [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.CommonsChunkPlugin('commons.js')
  ] : [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('commons.js')
  ],

  externals: {
    'alt': 'alt',
    'axios': 'axios',
    'immutable': 'Immutable',
    'intl': 'Intl',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-intl': 'ReactIntl',
    'react-router': 'ReactRouter',
    'sdk': 'storefront.sdk'
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'assets': path.join(__dirname, '/src/assets'),
      'editors': path.join(__dirname, '/src/editors'),
      'components': path.join(__dirname, '/src/components'),
      'commons': path.join(__dirname, '/src/commons'),
      'utils': path.join(__dirname, '/src/utils')
    }
  },

  output: {
    path: path.resolve(__dirname, './storefront/assets/'),
    publicPath: publicPath,
    filename: '[name].js',
    chunkFilename: '[name].js',
    jsonpFunction: 'webpackJsonp_' + meta.vendor.replace(/\-/g, '') + '_' + meta.name.replace(/\-/g, ''),
    devtoolModuleFilenameTemplate: 'webpack:///' + pkg.name + '/[resource]'
  },

  eslint: {
    configFile: '.eslintrc'
  },

  devtool: 'source-map',

  watch: production ? false : true,

  quiet: true,

  noInfo: true,

  proxy: {
    '*': 'http://janus-edge.vtex.com.br/'
  }
};

if (process.env.HOT) {
  config.devtool = 'source-map';
  config.entry['editors/index'].unshift('webpack-hot-middleware/client');
  config.plugins.unshift(new webpack.NoErrorsPlugin());
  config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

  config.module.loaders[0].query.plugins.push('react-transform');
  config.module.loaders[0].query.extra = {
    'react-transform': {
      transforms: [{
        transform: 'react-transform-hmr',
        imports: ['react'],
        locals: ['module']
      }, {
        transform: 'react-transform-catch-errors',
        imports: ['react', 'redbox-react', 'utils/reporterOptions']
      }]
    }
  };
}

module.exports = config;
