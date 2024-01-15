import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
    {
        path: '/',
        component: () => import('@/components/HelloWorld.vue'),
        children: [
            {
                path: '/vue',
                name: 'vue',
                meta: {
                    title: 'vue',
                    keepAlive: false,
                    requireAuth: true,
                    index: 2,
                    icon: 'House',
                },
                component: () => import('@/components/VueDemo.vue'),
          },
            {
                path: '/react',
                name: 'react',
                meta: {
                    title: 'react',
                    keepAlive: false,
                    requireAuth: true,
                    index: 5,
                    icon: 'Basketball',
                },
                component: () => import('@/components/ReactDemo.vue'),
            },
        ],
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});