import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Mission from '../pages/Mission.vue';
import Vision from '../pages/Vision.vue';
import Initiatives from '../pages/Initiatives.vue';
import GetInvolved from '../pages/GetInvolved.vue';
import ImpactStories from '../pages/ImpactStories.vue';
import Blog from '../pages/Blog.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/mission', component: Mission },
  { path: '/vision', component: Vision },
  { path: '/initiatives', component: Initiatives },
  { path: '/involved', component: GetInvolved },
  { path: '/impact', component: ImpactStories },
  { path: '/blog', component: Blog },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
