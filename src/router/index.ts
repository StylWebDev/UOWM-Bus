import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        children: [
            {
                path: '',
                component: () => import('../views/Home.vue'),
                alias: ['home', ''],
            },
            {
                path: 'tickets',
                component: () => import('../views/Tickets.vue')
            },
            {
                path: 'schedule',
                component: () => import('../views/Schedule.vue'),
                children: [
                    {
                        path: '',
                        component: () => import('../views/schedules/Overview.vue')
                    },
                    {
                        path: ':id([1-8])',
                        component: () => import('../views/schedules/Track.vue')
                    }
                ]
            },
            {
                path: 'busstops',
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
                path: 'about',
                component: () => import('../views/About.vue'),
                alias: ['about','info']
            },
            {
                path: '/:catchAll(.*)*',
                component: () => import('../views/Error.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;