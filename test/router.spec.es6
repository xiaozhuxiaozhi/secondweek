// const axios = require("axios");
// const { expect } =require("chai");
// const requestsuper =require('supertest');
// const app =require('../app.js');

// function request(){
//     return requestsuper(app.listen())
// }
// describe("后台接口测试", function () {
//     it("test接口测试", function (done) {
//         request()
//         axios.get('/api/add_praise')
//             .then(function (res) {
//                 expect(res.status).to.equal(200);
//                 if (res.data.data == "ok") {
//                     done();
//                 } else {
//                     done(new Error("结果不符合预期"));
//                 }
//             }).catch(function (error) {
//                 done(error);
//                 console.log(error);
//             });

//         // request('http://localhost:3000/test')
//         //     .expect('Content-Type', /json/)
//         //     .expect(200)
//         //     .end(function (response) {
//         //         console.log(response);
//         //         if (res.data == "Hello World") {
//         //             done();
//         //         } else {
//         //             done(err);
//         //         }
//         //     })

//     })
// })


//点赞+1接口自动化测试
import requestsuper from 'supertest'
import app from '../app.js'

function request(){
    return requestsuper(app.listen())
}
describe('测试接口',function(){
    it('点赞',function(done){
        request()
        .get('/api/add_praise')
        .expect('Content-type','json')
        .expect(200)
        .end(function(err,res){
            if(res.success ==true) return done(err);
            done();
        });
    });
});