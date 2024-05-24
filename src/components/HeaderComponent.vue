<template>
  <header class="fixed w-full bg-gray-800 text-white z-10">
    <nav class="container mx-auto flex justify-between items-center p-4">
      <div class="flex items-center space-x-4">
        <img src="../assests/logo.jpeg" alt="Logo" class="h-10" />
        <ul class="hidden md:flex space-x-6">
          <li>
            <router-link to="/" class="hover:text-gold">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="hover:text-gold">About</router-link>
          </li>
          <li class="relative group">
            <button
              @click="toggleDropdown('initiatives')"
              class="hover:text-gold flex items-center"
            >
              Initiatives <span class="ml-2">▼</span>
            </button>
            <ul
              v-if="showDropdowns.initiatives"
              class="absolute left-0 mt-2 w-48 bg-white text-black shadow-md"
            >
              <li>
                <router-link to="/initiative1" class="block px-4 py-2 hover:bg-gray-100">Initiative 1</router-link>
              </li>
              <li>
                <router-link to="/initiative2" class="block px-4 py-2 hover:bg-gray-100">Initiative 2</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/gallery" class="hover:text-gold">Gallery</router-link>
          </li>
          <li>
            <router-link to="/target-population" class="hover:text-gold">Target Population</router-link>
          </li>
          <li class="relative group">
            <button
              @click="toggleDropdown('impact')"
              class="hover:text-gold flex items-center"
            >
              Impact Stories <span class="ml-2">▼</span>
            </button>
            <ul
              v-if="showDropdowns.impact"
              class="absolute left-0 mt-2 w-48 bg-white text-black shadow-md"
            >
              <li>
                <router-link to="/impact1" class="block px-4 py-2 hover:bg-gray-100">Story 1</router-link>
              </li>
              <li>
                <router-link to="/impact2" class="block px-4 py-2 hover:bg-gray-100">Story 2</router-link>
              </li>
            </ul>
          </li>
          <li class="relative group">
            <button
              @click="toggleDropdown('blog')"
              class="hover:text-gold flex items-center"
            >
              Blog <span class="ml-2">▼</span>
            </button>
            <ul
              v-if="showDropdowns.blog"
              class="absolute left-0 mt-2 space-y-6 w-48 bg-white text-black shadow-md"
            >
              <li>
                <router-link to="/jgf" class="block hover:text-gold">Jakari Global Foundation|What it entails?</router-link>
              </li>
              <li>
                <router-link to="/currentevents" class="block hover:text-gold">CURRENT EVENTS</router-link>
              </li>
              <li>
                <router-link to="/orphans" class="block hover:text-gold">WHY ORPHANS</router-link>
              </li>
              <li>
                <router-link to="/boychild" class="block hover:text-gold">WHY BOY CHILD</router-link>
              </li>
              <li>
                <router-link to="/pws" class="block hover:text-gold">WHY PERSON WITH DISABILITIES</router-link>
              </li>
              <li>
                <router-link to="/widows" class="block hover:text-gold">WHY WIDOWS</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/contact" class="hover:text-gold">Contact</router-link>
          </li>
        </ul>
      </div>
      <div class="flex items-center space-x-4">
        <router-link
          to="/contact"
          class="bg-gold text-black px-4 py-2 rounded hover:bg-yellow-400"
        >Get Involved</router-link>
        <button class="md:hidden" @click="toggleMobileMenu">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
    <div v-if="showMobileMenu" class="md:hidden bg-gray-800 text-white p-4">
      <ul class="space-y-4">
        <li>
          <router-link to="/" class="block hover:text-gold">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="block hover:text-gold">About</router-link>
        </li>
        <li>
          <div
            @click="toggleSubMenu('initiatives')"
            class="flex justify-between items-center cursor-pointer"
          >
            Initiatives <span>▼</span>
          </div>
          <ul v-if="subMenu.initiatives" class="mt-2 space-y-2">
            <li>
              <router-link to="/initiative1" class="block hover:text-gold">Initiative 1</router-link>
            </li>
            <li>
              <router-link to="/initiative2" class="block hover:text-gold">Initiative 2</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/gallery" class="block hover:text-gold">Gallery</router-link>
        </li>
        <li>
          <router-link to="/target-population" class="block hover:text-gold">Target Population</router-link>
        </li>
        <li>
          <div
            @click="toggleSubMenu('impact')"
            class="flex justify-between items-center cursor-pointer"
          >
            Impact Stories <span>▼</span>
          </div>
          <ul v-if="subMenu.impact" class="mt-2 space-y-2">
            <li>
              <router-link to="/impact1" class="block hover:text-gold">Story 1</router-link>
            </li>
            <li>
              <router-link to="/impact2" class="block hover:text-gold">Story 2</router-link>
            </li>
          </ul>
        </li>
        <li>
          <div
            @click="toggleSubMenu('blog')"
            class="flex justify-between items-center cursor-pointer"
          >
            Blog <span>▼</span>
          </div>
          <ul v-if="subMenu.blog" class="mt-2 space-y-6">
            <li>
              <router-link to="/jgf" class="block hover:text-gold">Jakari Global Foundation|What it entails?</router-link>
            </li>
            <li>
              <router-link to="/currentevents" class="block hover:text-gold">CURRENT EVENTS</router-link>
            </li>
            <li>
              <router-link to="/orphans" class="block hover:text-gold">WHY ORPHANS</router-link>
            </li>
            <li>
              <router-link to="/boychild" class="block hover:text-gold">WHY BOY CHILD</router-link>
            </li>
            <li>
              <router-link to="/pws" class="block hover:text-gold">WHY PERSON WITH DISABILITIES</router-link>
            </li>
            <li>
              <router-link to="/widows" class="block hover:text-gold">WHY WIDOWS</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/contact" class="block hover:text-gold">Contact</router-link>
        </li>
        <li>
          <router-link
            to="/donate"
            class="block bg-gold text-black px-4 py-2 rounded hover:bg-yellow-400"
          >Donate</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const showMobileMenu = ref(false);
const subMenu = ref({
  initiatives: false,
  impact: false,
  blog: false,
});
const showDropdowns = ref({
  initiatives: false,
  impact: false,
  blog: false,
});

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

<style scoped></style>
