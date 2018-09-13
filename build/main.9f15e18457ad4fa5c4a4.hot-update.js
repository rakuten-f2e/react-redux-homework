exports.id = "main";
exports.modules = {

/***/ "./build/assets.json":
/*!***************************!*\
  !*** ./build/assets.json ***!
  \***************************/
/*! exports provided: client, default */
/***/ (function(module) {

module.exports = {"client":{"js":"http://localhost:3001/static/js/bundle.js"}};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _server = __webpack_require__(/*! ./server */ "./src/server/index.js");

var _server2 = _interopRequireDefault(_server);

var _http = __webpack_require__(/*! http */ "http");

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = _http2.default.createServer(_server2.default);

var currentApp = _server2.default;

server.listen("3000" || 3000, function (error) {
  if (error) {
    console.log(error);
  }

  console.log('🚀 started');
});

if (true) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept(/*! ./server */ "./src/server/index.js", function () {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    var newApp = __webpack_require__(/*! ./server */ "./src/server/index.js").default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

var server = (0, _express2.default)();
server.disable('x-powered-by').use(_express2.default.static("/Users/lihsuan.hsieh/Documents/github/react-redux-homework/public")).get('/*', function (req, res) {
  res.status(200).send('<!doctype html>\n  <html lang="">\n  <head>\n      <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n      <meta charset="utf-8" />\n      <title>Welcome to Razzle</title>\n      <meta name="viewport" content="width=device-width, initial-scale=1">\n      ' + (assets.client.css ? '<link rel="stylesheet" href="' + assets.client.css + '">' : '') + '\n      ' + ( false ? undefined : '<script src="' + assets.client.js + '" defer crossorigin></script>') + '\n  </head>\n  <body>\n      <div id="root"></div>\n  </body>\n</html>');
});

exports.default = server;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ })

};
//# sourceMappingURL=main.9f15e18457ad4fa5c4a4.hot-update.js.map