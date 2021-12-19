import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";

const routes = [
    { path: "/:lang(en|es)?", component: Home, name: '' },
    { path: "/:lang(en|es)?/about", component: About, name: 'about'},
];


const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;