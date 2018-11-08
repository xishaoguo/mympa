"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const errorHandler = {
  error(app, logger) {
    app.use(async (ctx, next) => {
      if ("404" != ctx.status) return;
      ctx.status = 404; //收集错误，打电话，发短信，发邮件

      logger.error("我的天呐，404");
      ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="/" homePageName="回到我的主页"></script>';
    });
  }

};
exports.default = errorHandler;