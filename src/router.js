import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [
            {
                path: '/',
                name: 'airport',
                component: () => import('./components/Airport.vue')
            },
            {
                path: '/travels',
                name: 'travels',
                component: () => import('./components/Travels.vue')
            },
            {
                path: '/travels_2',
                name: 'travels_2',
                component: () => import('./components/Travels_2.vue')
            },
            {
                path: '/travels_3',
                name: 'travels_3',
                component: () => import('./components/Travels_3.vue')
            },
            {
                path: '/travels_4',
                name: 'travels_4',
                component: () => import('./components/Travels_4.vue')
            },
            {
                path: '/cars',
                name: 'cars',
                component: () => import('./components/Cars.vue')
            },
            {
                path: '/gits',
                name: 'gits',
                component: () => import('./components/Guide.vue')
            },
            {
                path: '/galleria',
                name: 'galleria',
                component: () => import('./components/Galleria.vue')
            },
            {
                path: '/about_us',
                name: 'about_us',
                component: () => import('./components/About_Us.vue')
            },
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
