<template>
  <footer class="bg-gray-900 text-gray-300 pt-12 pb-6">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-6">
      
      <!-- Contact Section -->
      <div>
        <h3 class="text-xl font-semibold text-white mb-4">Contact Us</h3>
        <p class="mb-2">Jakar Global Foundation</p>
        <p class="mb-2">P.O. Box 2000100, Nairobi, Kenya</p>
        <p class="mb-2">Phone: +254 701 425 677</p>
        <p class="mb-4">
            Email: 
            <a href="mailto:youremail@example.com" class="hover:text-yellow-400 underline transition">
              youremail@example.com
            </a>
          </p>

        <div class="flex space-x-4 mt-4">
          <a href="#" aria-label="Instagram" class="hover:text-yellow-400 transition">
            <font-awesome-icon :icon="['fab', 'instagram']" class="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" class="hover:text-yellow-400 transition">
            <font-awesome-icon :icon="['fab', 'twitter']" class="h-6 w-6" />
          </a>
          <a href="#" aria-label="TikTok" class="hover:text-yellow-400 transition">
            <font-awesome-icon :icon="['fab', 'tiktok']" class="h-6 w-6" />
          </a>
          <a href="#" aria-label="YouTube" class="hover:text-yellow-400 transition">
            <font-awesome-icon :icon="['fab', 'youtube']" class="h-6 w-6" />
          </a>
        </div>
      </div>

      <!-- Strategic Priorities Section -->
      <div>
        <h3 class="text-xl font-semibold text-white mb-4">Strategic Priorities</h3>
        <ul class="space-y-2">
          <li v-for="item in strategicPriorities" :key="item.label">
            <router-link :to="item.link" class="hover:text-yellow-400 transition">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>

      <!-- Programmes & Interventions Section -->
      <div>
        <h3 class="text-xl font-semibold text-white mb-4">Programmes & Interventions</h3>
        <ul class="space-y-2">
          <li v-for="item in programmes" :key="item.label">
            <router-link :to="item.link" class="hover:text-yellow-400 transition">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>

      <!-- Important Links Section -->
      <div>
        <h3 class="text-xl font-semibold text-white mb-4">Important Links</h3>
        <ul class="space-y-2">
          <li v-for="item in importantLinks" :key="item.label">
            <router-link :to="item.link" class="hover:text-yellow-400 transition">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="container mx-auto mt-12 text-center text-gray-500 text-sm">
      <p>&copy; 2024 Jakari Global Foundation. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// Organized links into arrays for easy maintenance
const strategicPriorities = [
  { label: "Job Creation and Entrepreneurship", link: "/target-population" },
  { label: "Health and Wellbeing", link: "/target-population" },
  { label: "Advocacy and Outreach Through Sports", link: "/target-population" },
  { label: "Mobility and Access to Healthcare", link: "/target-population" },
  { label: "Prevention, Treatment and Rehabilitation", link: "/target-population" },
  { label: "Advocacy and Outreach", link: "/target-population" },
  { label: "Skills Development and Capacity Building", link: "/target-population" },
  { label: "Chaplaincy, Outreach and Family Values", link: "/target-population" }
];

const programmes = [
  { label: "Youth Development", link: "/youth-development" },
  { label: "Orphans", link: "/orphans" },
  { label: "Widows", link: "/widows" }
];

const importantLinks = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Gallery", link: "/gallery" },
  { label: "Impact Stories", link: "/impact" },
  { label: "Our Programmes and Interventions", link: "/initiatives" },
  { label: "Blogs", link: "/blogs" },
  { label: "Contact", link: "/contact" }
];
</script>

<style scoped>
/* Smooth transition on all links and icons */
a,
router-link {
  transition: color 0.3s ease, transform 0.3s ease;
}

/* Hover effect for links */
a:hover,
router-link:hover {
  color: #facc15; /* Tailwind yellow-400 */
  transform: translateX(4px); /* slight shift to right */
}

/* Footer social icons specific */
a[aria-label] svg {
  transition: transform 0.3s ease, color 0.3s ease;
}

/* Hover effect for social icons */
a[aria-label]:hover svg {
  transform: scale(1.2); /* Grow a little on hover */
  color: #facc15; /* Yellow hover */
}

/* Footer section titles */
h3 {
  position: relative;
}

/* Add underline to section titles */
h3::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background-color: #facc15; /* yellow-400 underline */
  margin-top: 8px;
  border-radius: 9999px;
}

/* Footer bottom separator */
footer::after {
  content: '';
  display: block;
  width: 90%;
  margin: 2rem auto 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>

