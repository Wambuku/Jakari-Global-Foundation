import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Brand Icons
import { faInstagram, faTwitter, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

// Solid Icons (for Mission Section)
import { faEnvelope, faGraduationCap, faBolt, faChalkboardTeacher, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTools, faChartLine, faUniversity, faUserFriends, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen, faHeartbeat } from '@fortawesome/free-solid-svg-icons';


// Add icons to the library
library.add(
  faInstagram,
  faTwitter,
  faTiktok,
  faYoutube,
  faEnvelope,
  faGraduationCap,    
  faBolt,              
  faChalkboardTeacher, 
  faHeart,
  faTools, 
  faChartLine, 
   faUniversity, 
   faUserFriends, 
   faBookOpen, 
   faHeartbeat,
   faHandsHelping              
);

export default FontAwesomeIcon;
