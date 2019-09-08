import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home";//引入home路有文件
Vue.use(VueRouter);

const router=new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/home",

        },
        home,//将home路由单独写一个文件
    ]
})

export default router;