import { rejects } from "assert";

/**
 * @fileoverview 实现index的数据模型
 * @author yuyu
 * 
 */

 /**
  * 生成一段异步的数据
  */

  /**
   * 获取具体的API的数据，
   * @returns 返回异步处理结果
   * @example return new Promise()
   */
  export default class indexModel{
      constructor(app){
        this.app = app;
      }
      getData(){
          return new Promise((resolev,rejects)=>{
            setTimeout(()=>{
                resolev(
                    "Hello Action"
                );
            },1000);
        });
      }
  }