import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        params: true,
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
    },
    {
        path: '/florets',
        name: 'Florets',
        component: () =>
            import ('../views/works/Florets.vue')
    }
]

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     scrollBehavior(to, from, savedPosition) {
//         let works = document.getElementById('works')
//         let top = to.hash === '#works' && (window.screen.height - works.offsetHeight) / 2 - 58
//         if (to.hash) {
//             return {
//                 el: to.hash,
//                 behavior: 'smooth',
//                 top
//             }
//         }
//     },
//     routes
// })

const scrollBehavior = (to, from, savedPosition) => {
    // if (to.name === from.name) {
    //     to.meta?.scrollPos && (to.meta.scrollPos.top = 0)
    //     return { top: 0 }
    // }
    const pos = savedPosition || to.meta?.scrollPos || { top: 0 }
    // let behavior = to.name === from.name && to.params.hash && 'smooth' || 'auto'
    // return !to.params.hash && pos || {el: to.params.hash, top: 100, behavior}



    return new Promise((resolve) => {
        // setTimeout(() => {
        //
        // }, 0)
        let works = document.getElementById('works')
        let margin = (window.innerHeight - works.offsetHeight) / 2

        let top = (to.params.hash === '#works' && margin) || (to.params.hash === '#about' && innerWidth < 640 && margin - 100)

        to.name !== from.name && to.params.hash && resolve({el: to.params.hash, top})
        !to.params.hash && resolve(pos)

        to.name === from.name && to.params.hash && resolve({el: to.params.hash, top, behavior: 'smooth'})
    })
}

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior,
    routes
})

export default router
