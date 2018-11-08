import Koa from "koa";
import config from "./config/index.js"
import routesInit from "./routes/routesInit.js";
import router from 'koa-simple-router';
import errorHandler from "./middwares/errorHandler.js";
import log4js from 'log4js';
import serve from "koa-static";
import render from "koa-swig";
import co from "co";


log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            filename: __dirname + '/logs/ydlogs.log'
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'error'
        }
    }
});
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    locals: locals,
    filters: filters,
    tags: tags,
    extensions: extensions
  }));
const logger = log4js.getLogger('cheese');
const app = new Koa();
routesInit.init(app, router);
errorHandler.error(app,logger);
app.use(serve(config.staticDir));
app.listen(config.port, () => {
    console.log(`ysSystem listening on ${config.port}`)
});
