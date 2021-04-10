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
        path: '/student/shadows',
        name: 'Shadows',
        component: () => import('../views/student/Shadows.vue')
    },
    {
        path: '/student/shadow-search',
        name: 'ShadowSearch',
        component: () => import('../views/student/ShadowSearch.vue')
    },
    {
        path: '/student/shadow-calendar',
        name: 'ShadowCalendar',
        component: () => import('../views/student/ShadowCalendar.vue')
    },
    {
        path: '/employee/upcoming-shadows',
        name: 'UpcomingShadows',
        component: () => import('../views/employee/UpcomingShadows.vue')
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
