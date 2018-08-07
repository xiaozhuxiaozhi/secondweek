(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../models/indexModel", "vm"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../models/indexModel"), require("vm"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.indexModel, global.vm);
    global.indexController = mod.exports;
  }
})(this, function (exports, _indexModel, _vm) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _indexModel2 = _interopRequireDefault(_indexModel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  //创建路由
  var indexController = {
    index: function index() {
      return async function (ctx, next) {
        ctx.body = await ctx.render("index", { title: "Praise" });
      };
    },
    addPraiseCount: function addPraiseCount() {
      return async function (ctx, nexr) {
        var M = new _indexModel2.default();
        var data = await M.addPraise();
        ctx.body = data;
      };
    },
    getPraiseCount: function getPraiseCount() {
      return async function (ctx, next) {
        var M = new _indexModel2.default();
        var data = await M.getCount();
        ctx.body = data;
      };
    }
  };

  exports.default = indexController;
});
