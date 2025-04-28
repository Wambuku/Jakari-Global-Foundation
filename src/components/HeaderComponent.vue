<template>
  <header class="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 text-white">
    <nav class="container mx-auto flex justify-between items-center p-4">
      <!-- Logo -->
 
      <div class="flex items-center gap-4">
          <img src="../assests/logo.png" alt="Logo" class="h-14 w-14 object-cover rounded-full shadow-md" />
        </div>

      

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-8 items-center font-medium">
        <li>
          <router-link to="/" class="hover:text-yellow-400 transition">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-yellow-400 transition">About</router-link>
        </li>
        <!-- Initiatives Dropdown -->
        <li class="relative group">
          <button @click="toggleDropdown('initiatives')" class="flex items-center gap-1 hover:text-yellow-400 transition">
            Initiatives
            <span class="text-xs">▼</span>
          </button>
          <ul v-if="showDropdowns.initiatives" class="absolute top-10 left-0 bg-white text-black shadow-lg rounded-md py-2 w-52">
            <li v-for="item in initiativesLinks" :key="item.name">
              <router-link :to="item.link" class="block px-4 py-2 hover:bg-gray-100 transition">{{ item.name }}</router-link>
            </li>
          </ul>
        </li>

        <li>
          <router-link to="/gallery" class="hover:text-yellow-400 transition">Gallery</router-link>
        </li>

        <li>
          <router-link to="/target-population" class="hover:text-yellow-400 transition">Target Population</router-link>
        </li>

        <li>
          <router-link to="/impact" class="hover:text-yellow-400 transition">Impact Stories</router-link>
        </li>

        <!-- Blog Dropdown -->
        <li class="relative group">
          <button @click="toggleDropdown('blog')" class="flex items-center gap-1 hover:text-yellow-400 transition">
            Blog
            <span class="text-xs">▼</span>
          </button>
          <ul v-if="showDropdowns.blog" class="absolute top-10 left-0 bg-white text-black shadow-lg rounded-md py-2 w-64 space-y-1">
            <li v-for="item in blogLinks" :key="item.name">
              <router-link :to="item.link" class="block px-4 py-2 hover:bg-gray-100 transition">{{ item.name }}</router-link>
            </li>
          </ul>
        </li>

        <li>
          <router-link to="/contact" class="hover:text-yellow-400 transition">Contact</router-link>
        </li>
      </ul>

      <!-- Action Buttons -->
      <div class="flex items-center gap-4">
        <router-link to="/contact" class="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition">
          Get Involved
        </router-link>

        <!-- Mobile Menu Button -->
        <button class="md:hidden focus:outline-none" @click="toggleMobileMenu">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="showMobileMenu" class="md:hidden bg-white/90 backdrop-blur-lg shadow-lg p-6 rounded-b-md">
      <ul class="flex flex-col gap-6 text-black font-semibold">
        <router-link to="/" class="hover:text-yellow-400 transition">Home</router-link>
        <router-link to="/about" class="hover:text-yellow-400 transition">About</router-link>

        <!-- Mobile Initiatives Dropdown -->
        <div>
          <div @click="toggleSubMenu('initiatives')" class="flex justify-between items-center cursor-pointer">
            Initiatives
            <span>▼</span>
          </div>
          <ul v-if="subMenu.initiatives" class="pl-4 mt-2 space-y-2 text-gray-700">
            <li v-for="item in initiativesLinks" :key="item.name">
              <router-link :to="item.link" class="block hover:text-yellow-400">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>

        <router-link to="/gallery" class="hover:text-yellow-400 transition">Gallery</router-link>
        <router-link to="/target-population" class="hover:text-yellow-400 transition">Target Population</router-link>
        <router-link to="/impact" class="hover:text-yellow-400 transition">Impact Stories</router-link>

        <!-- Mobile Blog Dropdown -->
        <div>
          <div @click="toggleSubMenu('blog')" class="flex justify-between items-center cursor-pointer">
            Blog
            <span>▼</span>
          </div>
          <ul v-if="subMenu.blog" class="pl-4 mt-2 space-y-2 text-gray-700">
            <li v-for="item in blogLinks" :key="item.name">
              <router-link :to="item.link" class="block hover:text-yellow-400">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>

        <router-link to="/contact" class="hover:text-yellow-400 transition">Contact</router-link>
        <router-link to="/donate" class="bg-yellow-400 px-4 py-2 text-center rounded-full hover:bg-yellow-500 text-black transition">Donate</router-link>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const showMobileMenu = ref(false);
const subMenu = ref({
  initiatives: false,
  blog: false,
});
const showDropdowns = ref({
  initiatives: false,
  blog: false,
});

const initiativesLinks = [
  { name: "Youth Development", link: "/youth-development" },
  { name: "Orphans", link: "/orphans" },
  { name: "Widows", link: "/widows" },
];

const blogLinks = [
  { name: "Jakari Global Foundation | What it entails?", link: "/jgf" },
  { name: "Current Events", link: "/currentevents" },
  { name: "Why Orphans?", link: "/orphans" },
  { name: "Why Youths?", link: "/youth-development" },
  { name: "Why Widows?", link: "/widows" },
];

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

const toggleSubMenu = (menu) => {
  subMenu.value[menu] = !subMenu.value[menu];
};

const toggleDropdown = (dropdown) => {
  showDropdowns.value[dropdown] = !showDropdowns.value[dropdown];
};
</script>

<style scoped>
/* Smooth dropdown animation */
ul[role="menu"] {
  transition: all 0.3s ease;
}
</style>
