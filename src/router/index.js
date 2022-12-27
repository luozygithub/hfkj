import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/layout";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: layout,
        redirect: '/',
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/Home.vue'),
            },
            {
                path: '/fund',
                name: 'fund',
                component: () => import('../views/Fund.vue'),
            },
            {
                path: '/JoinUs',
                name: 'JoinUs',
                component: () => import('../views/JoinUs.vue'),
            },
            {
                path: '/csr',
                name: 'csr',
                component: () => import('../views/Csr.vue'),
            },
            {
                path: '/blog',
                name: 'blog',
                component: () => import('../views/Blog.vue'),
            },
            {
                path: '/history',
                name: 'history',
                component: () => import('../views/History.vue'),
            },
        ]
    }
]
const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router
