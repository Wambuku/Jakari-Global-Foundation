import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import TargetPopulation from "../pages/TargetPopulation.vue"
import YouthDevelopment from "../pages/YouthDevelopment.vue";
import Gallery from "../pages/Gallery.vue";
import ImpactStories from "../pages/ImpactStories.vue";
import Blog from "../pages/Blog.vue";
import JGF from "../pages/JGF.vue";
import CurrentEvents from "../pages/CurrentEvents.vue";
import Orphans from '../pages/Orphans.vue';  
import  Widows from "../pages/Widows.vue"
import Contact from "../pages/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: '/target-population', component: TargetPopulation },
  { path: "/youth-development", component: YouthDevelopment },
  { path: "/gallery", component: Gallery },
  { path: "/impact", component: ImpactStories },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/jgf", component: JGF },
  { path: "/currentevents", component: CurrentEvents },
  { path: '/orphans', component: Orphans }, 
  { path: '/widows', component: Widows }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
