import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import TargetPopulation from "../pages/TargetPopulation.vue"
import YouthDevelopment from "../pages/YouthDevelopment.vue";
import Gallery from "../pages/Gallery.vue";
import ImpactStories from "../pages/ImpactStories.vue";
import Blog from "../pages/Blog.vue";
import Orphans from '../pages/Orphans.vue';  
import  Widows from "../pages/Widows.vue"
import Contact from "../pages/Contact.vue";
import Projects from "../pages/Project.vue";
import EmpoweringWidows from "../pages/blog/empowering-widows.vue";
import HealthcareOutreach from "../pages/blog/healthcare-outreach.vue";
import SportsCommunityAdvocacy from "../pages/blog/sports-community-advocacy.vue";
import YouthCapacityBuilding from "../pages/blog/youth-capacity-building.vue";
import FaithCommunityPartnerships from "../pages/blog/faith-community-partnerships.vue";
import InclusiveHealthcareAccess from "../pages/blog/inclusive-healthcare-access.vue";


const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: '/target-population', component: TargetPopulation },
  { path: "/youth-development", component: YouthDevelopment },
  { path: "/gallery", component: Gallery },
  { path: "/impact", component: ImpactStories },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: '/orphans', component: Orphans }, 
  { path: '/widows', component: Widows },
  { path: '/projects', component: Projects },
  { path: "/blogs/empowering-widows", component: EmpoweringWidows },
{ path: "/blogs/healthcare-outreach", component: HealthcareOutreach },
{ path: "/blogs/sports-community-advocacy", component: SportsCommunityAdvocacy },
{ path: "/blogs/youth-capacity-building", component: YouthCapacityBuilding },
{ path: "/blogs/faith-community-partnerships", component: FaithCommunityPartnerships },
{ path: "/blogs/inclusive-healthcare-access", component: InclusiveHealthcareAccess },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
