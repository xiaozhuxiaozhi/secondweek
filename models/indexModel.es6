import rp from 'request-promise'
import { resolve } from 'path'
class indexModel{
    constructor(ctx){
        this.ctx =ctx;
    }
    addPraise(){
        const options ={
            method:'get',
            url:'http://127.0.0.1:8080/secondweek/server/post_count.php'
        }
        return new Promise((resolve,reject)=>{
            rp(options).then(result=>{
                const data =JSON.parse(result);
                if(data.success){
                    resolve(data);
                }else{
                    reject(data);
                }
            })
        })
    }
    getCount(){
        const options ={
            method:'get',
            url:'http://127.0.0.1:8080/secondweek/server/get_count.php'
        }
        return new Promise((resolve,reject)=>{
            rp(options).then(result=>{
                const data =JSON.parse(result);
                if(data.success){
                    resolve(data);
                }else{
                    reject(data);
                }
            })
        })
    }
}

export default indexModel