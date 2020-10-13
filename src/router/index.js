import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入路由模块化文件
import centerRouter from './routes/center'
import cinemaRouter from './routes/cinema'
import filmRouter from './routes/film'
import detailRouter from "./routes/detail";
import cityRouter from "./routes/city";
import vuexRouter from "./routes/vuex";
import authRouter from "./routes/auth";

const routes = [
    {
        path: "/",
        // 访问根路由跳转到电影页面
        redirect: "/film",
    },
    centerRouter,
    cinemaRouter,
    filmRouter,
    detailRouter,
    cityRouter,
    vuexRouter,
    // 注册路由
    ...authRouter,
];

const router = new VueRouter({
  mode: 'history',
  // 前缀  http://localhost:3000/app/film
  // base: process.env.BASE_URL,
  routes
})

export default router
