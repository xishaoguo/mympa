import indexModel from "../models/indexModel.js"
const  IndexController = {
    indexAction() {
        return async (ctx, next) => {
            const indexmodel = new IndexModel();
            const result = await indexmodel.getData();
            // const result2 = result + data;
            ctx.body = await ctx.render("index",{data:result});
        }
    }
}

export default IndexController;