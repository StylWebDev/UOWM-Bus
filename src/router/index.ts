import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/tickets',
        component: () => import('../views/Tickets.vue')
    },
    {
        path: '/schedule',
        component: () => import('../views/Schedule.vue'),
        children: [
            {
                path: '',
                component: () => import('../views/schedules/Overview.vue')
            },
            {
                path: ':id([1-3])',
                component: () => import('../views/schedules/Track.vue')
            }
        ]
    },
    {
      path: '/busstops',
        component: () => import('../views/Locations.vue'),
        children: [
            {
                path: '',
                component: () => import('../views/Locations/Stops.vue'),
            },
            {
                path: 'map/:busStop',
                component: () => import('../views/Locations/Map.vue'),
            }
        ]

    },
    {
        path: '/about',
        component: () => import('../views/About.vue')
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        path: '/info',
        redirect: '/about'
    },
    {
        path: '/:catchAll(.*)*',
        component: () => import('../views/Error.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;