var express = require('express');
var webpack = require('webpack');
var httpProxy = require('http-proxy');
var proxy = new httpProxy.createProxyServer();
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

if (config.proxy) {
  var paths = Object.keys(config.proxy);
  paths.forEach(function (path) {
    var proxyOptions;
    if (typeof config.proxy[path] === 'string') {
      proxyOptions = {target: config.proxy[path], ws: true};
    } else {
      proxyOptions = config.proxy[path];
    }
    app.all(path, function (req, res) {
      proxy.web(req, res, proxyOptions);
    });
  });
}

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
