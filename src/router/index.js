import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';
import HomeView from "../Views/HomeView.vue";
import LoginView from "../Views/LoginView.vue";
import SignUpView from "../Views/SignupView.vue";



const isServer = typeof window === 'undefined';
const history = isServer ? createMemoryHistory() : createWebHistory()
const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },

    {
        path: "/login",
        name: "Login",
        component: LoginView,
    },

    {
      path: "/signup",
      name: "Signup",
      component: SignUpView,
  },

];

const router = createRouter({
  history,
  routes,
});

export default router;
