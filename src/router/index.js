import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [{
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/stone-electro',
        name: 'StoneElectro',
        component: () =>
            import ('../views/works/StoneElectro.vue')
    },
    {
        path: '/news-site',
        name: 'NewsSite',
        component: () =>
            import ('../views/works/NewsSite.vue')
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () =>
            import ('../views/works/Portfolio.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
    },
    routes
})

export default router