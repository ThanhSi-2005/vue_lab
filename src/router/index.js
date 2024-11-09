import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import HomePage from '../components/Home.vue'
import BlogPage from '../components/Blog.vue'
import FormPage from '@/components/FormPage.vue';
import lab2_b1 from '@/components/lab2_b1.vue';
import CanNhanPage from '@/components/lab3/CanNhanPage.vue';
import BaiVietPage from '@/components/lab3/BaiVietPage.vue';
import ChiTietPage from '@/components/lab3/ChiTietPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/blog', component: BlogPage },
    { path: '/about', component: About },
    { path: '/form', component: FormPage },
    { path: '/lab2_b1', component: lab2_b1 },
    { path: '/lab3/canhanpage', component: CanNhanPage },
    { path: '/lab3/baivietpage', component: BaiVietPage },
    { path: '/lab3/chitietbaivietpage', component: ChiTietPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
