import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import TargetPopulation from "../pages/TargetPopulation.vue"
import Initiatives from "../pages/Initiatives.vue";
import Gallery from "../pages/Gallery.vue";
import ImpactStories from "../pages/ImpactStories.vue";
import Blog from "../pages/Blog.vue";
import JGF from "../pages/JGF.vue";
import CurrentEvents from "../pages/CurrentEvents.vue";
import Initiative1 from '../pages/Initiative1.vue'; 
import Initiative2 from '../pages/Initiative2.vue'; 
import Contact from "../pages/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: '/target-population', component: TargetPopulation },
  { path: "/initiatives", component: Initiatives },
  { path: "/gallery", component: Gallery },
  { path: "/impact", component: ImpactStories },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/jgf", component: JGF },
  { path: "/currentevents", component: CurrentEvents },
  { path: '/initiative1', component: Initiative1 }, 
  { path: '/initiative2', component: Initiative2 }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
