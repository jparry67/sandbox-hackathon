import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/todos',
        name: 'Todos',
        component: () => import('../views/Todos.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue')
    },
    {
        path: '/shadow',
        name: 'Shadow',
        component: () => import('../views/Shadow.vue')
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: () => import('../views/Calendar.vue')
    },    
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            next({
                path: "/"
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router
