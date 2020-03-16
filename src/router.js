import Vue from 'vue';
import { IonicVueRouter } from "@ionic/vue";

Vue.use(IonicVueRouter);

const router = new IonicVueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        { path: "/", redirect: "/home" },
        {
            path: "/home",
            name: "home",
            component: () =>
                import ( /* webpackChunkName: "home" */ "@/components/HomePage"),
        },
        {
            path: "/new-item",
            name: "new-item",
            component: () =>
                import ( /* webpackChunkName: "new-item" */ "@/components/NewItemPage"),
        }
    ]
});

export default router;