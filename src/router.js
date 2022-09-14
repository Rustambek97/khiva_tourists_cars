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
