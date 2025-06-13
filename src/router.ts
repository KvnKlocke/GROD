import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/pages/lobby/Lobby.vue'),
        name: 'Lobby',
    },
    {
        path: '/game',
        component: () => import('@/pages/game/Game.vue'),
        name: 'Game',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
