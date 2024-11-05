import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import HomePage from '../components/Home.vue'
import BlogPage from '../components/Blog.vue'
import FormPage from '@/components/FormPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/blog', component: BlogPage },
    { path: '/about', component: About },
    { path: '/form', component: FormPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
