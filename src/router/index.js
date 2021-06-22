import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from "../views/login.vue";
import Admin from "../views/admin/Lebenslauf.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/admin/login",
        name: "login",
        component: login,
    },
    {
        path: "/admin/lebenslauf",
        name: "Admin",
        component: Admin,
    },
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
