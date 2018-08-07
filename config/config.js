(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'path'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('path'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.path);
    global.config = mod.exports;
  }
})(this, function (exports, _path) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _path2 = _interopRequireDefault(_path);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var CONFIG = new Map(); //创建Map键值对
  CONFIG.set('port', 3000);
  CONFIG.set('staticDir', _path2.default.join(__dirname, '..', 'public'));
  CONFIG.set('viewsDir', _path2.default.join(__dirname, '..', 'views'));

  exports.default = CONFIG;
});
