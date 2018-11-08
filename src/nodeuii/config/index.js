import {extend} from "lodash";
import {join} from "path";
let config ={
    env: process.env.NODE_ENV,
    viewDir:join(__dirname,"..","view"),
    staticDir:join(__dirname,"..","assets"),
}
if(false){
    console.log(123);
    
}
if (process.env.NODE_ENV == "development") {
    const localConfig = {
        port: 8081
    }
    config = extend(config, localConfig);
}

if (process.env.NODE_ENV == "production") {
    const proConfig = {
        port: 80
    }
    config = extend(config, proConfig);
}
export default config;