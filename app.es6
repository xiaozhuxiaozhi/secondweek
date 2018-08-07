import Koa from 'koa'
import router from 'koa-simple-router'
import render from 'koa-swig'
import serve from 'koa-static'
import co from 'co'
import CONFIG from './config/config'
import initController from './controllers/initController'
const app =new Koa();
initController.init(app,router);
app.context.render =co.wrap(render({
    root:CONFIG.get('viewsDir'),
    autoescape:true,
    cache:'memory',
    ext:'html',
    writeBody:false
}));
app.use(serve(CONFIG.get('staticDir')));


app.listen(3000,()=>{
    console.log('server is running...');
})

export default app