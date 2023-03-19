import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/views/HelloWorld";
import LoginPage from "@/views/LoginPage";

const routes = [
    { path : "/", name : "HelloWorld", component : HelloWorld },
    { path : "/Login", name : "LoginPage", component : LoginPage },
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes,
    hash : false
});

export default router;