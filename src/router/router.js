import { createWebHistory, createRouter } from "vue-router";
import store from "@/store/authstore";
import Home from "@/views/Home";
import LoginPage from "@/views/LoginPage";

const routes = [
    { path : "/", name : "Home", component : Home },
    { path : "/Login", name : "LoginPage", component : LoginPage },
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes,
    hash : false
});

router.beforeEach(async (to, from, next)=>{
    if(!store.state.isAuthenticated && to.path.toLowerCase() !== "/login"){
      alert('로그인이 필요한 페이지입니다!');
      next('/login')
    }else{
      next()
    }
  })

export default router;