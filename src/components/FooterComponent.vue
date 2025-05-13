<template>
  <footer class="bg-gray-900 text-gray-300 pt-20 pb-8 relative">

    <!-- CTA Top Bar -->
    <div class="bg-yellow-400 text-black text-center py-10">
      <h2 class="text-3xl font-bold mb-4">Support A Dignified Future</h2>
      <router-link to="/contact" class="inline-block bg-black text-yellow-400 px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
        Partner With Us
      </router-link>
    </div>

    <!-- Main Footer -->
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 mt-16">

      <!-- About -->
      <div>
        <img src="/src/assests/logo (2).png" alt="Jakari Global Foundation" class="h-12 mb-4" />
        <p class="text-gray-400 text-sm leading-relaxed">
          Empowering vulnerable populations through education, mentorship, and inclusive development across East Africa.
        </p>
        <p class="mt-4 text-sm">P.O. Box 2000100, Nairobi, Kenya</p>
        <p class="text-sm">Phone: +254 701 425 677</p>
        <p class="text-sm">
          Email: <a href="mailto:info@jakariglobal.org" class="hover:text-yellow-400 underline">info@jakariglobal.org</a>
        </p>
      </div>

      <!-- Navigation -->
      <div class="grid grid-cols-2 gap-6">
        <div>
          <h3 class="text-white font-semibold mb-4">Programs</h3>
          <ul class="space-y-2">
            <li v-for="item in programmes" :key="item.label">
              <router-link :to="item.link" class="hover:text-yellow-400 hover:underline transition">{{ item.label }}</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-white font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="item in importantLinks" :key="item.label">
              <router-link :to="item.link" class="hover:text-yellow-400 hover:underline transition">{{ item.label }}</router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Social & Newsletter -->
      <div>
        <h3 class="text-white font-semibold mb-4">Stay Connected</h3>
        <div class="flex space-x-4 mb-6">
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
        <form class="flex items-center space-x-2">
          <input type="email" placeholder="Your email" class="w-full px-4 py-2 rounded-lg text-black focus:outline-none" />
          <button type="submit" class="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
            Subscribe
          </button>
        </form>
      </div>

    </div>

    <!-- Footer Bottom -->
    <div class="container mx-auto mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
      &copy; 2024 Jakari Global Foundation. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
const programmes = [
  { label: "Youth Development", link: "/youth-development" },
  { label: "Orphans", link: "/orphans" },
  { label: "Widows", link: "/widows" }
]

const importantLinks = [
  { label: "About", link: "/about" },
  { label: "Gallery", link: "/gallery" },
  { label: "Impact Stories", link: "/impact" },
  { label: "Initiatives", link: "/initiatives" },
  { label: "Blogs", link: "/blogs" },
  
]
</script>

<style scoped>
h3::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background-color: #facc15;
  margin-top: 6px;
  border-radius: 9999px;
}
</style>
