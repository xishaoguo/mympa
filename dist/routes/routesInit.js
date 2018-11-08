"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const routesInit = {
  init(app, router) {
    app.use(router(_ => {
      _.get('/', (ctx, next) => {
        ctx.body = 'hello';
      });
    }));
  }

};
exports.default = routesInit;