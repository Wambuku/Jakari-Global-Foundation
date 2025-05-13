import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import scrollAnimation from './directives/v-scroll-animation';


/**styling */
import "./style.css";
// import "./assets/tailwind.css"; //tailwind
import FontAwesomeIcon from './plugins/font -awesome';
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount("#app");
app.directive('scroll-animation', scrollAnimation);

