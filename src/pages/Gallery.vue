<template>
  <div class="bg-gray-900 min-h-screen pt-28 pb-12 px-4 md:px-12">

    <!-- Page Title -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-300">Our Gallery</h1>
      <p class="mt-3 text-gray-500 max-w-2xl mx-auto">
        A visual journey of Jakari Global Foundation's impact — from community initiatives to empowering lives.
      </p>
    </div>

    <!-- Masonry Layout (columns) -->
    <div class="columns-1 sm:columns-2 md:columns-3 gap-4">
      <div
        v-for="image in images"
        :key="image.id"
        class="mb-4 overflow-hidden rounded-xl shadow-md break-inside-avoid group relative"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <!-- Overlay Text on Hover -->
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 class="text-sm font-medium">{{ image.alt }}</h3>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import image1 from '../assests/story3.jpeg';
import image2 from '../assests/health1.jpeg';
import image3 from '../assests/empower.jpeg';
import image4 from '../assests/impact1.jpeg';
import image5 from '../assests/widows.jpeg';
import image6 from '../assests/vocational-training.jpg';
import image7 from '../assests/scholarship.jpg';
import image8 from '../assests/orphans.jpeg';
import image9 from '../assests/story2.jpeg';
import image10 from '../assests/mentorship.jpg';
import image11 from '../assests/story1.jpeg';
import image12 from '../assests/mentorship-impact.jpg';

const images = ref([
  { id: 1, src: image1, alt: 'Story 3' },
  { id: 2, src: image2, alt: 'Health Initiative' },
  { id: 3, src: image3, alt: 'Empowerment Program' },
  { id: 4, src: image4, alt: 'Community Impact' },
  { id: 5, src: image5, alt: 'Widows Support' },
  { id: 6, src: image6, alt: 'Vocational Training' },
  { id: 7, src: image7, alt: 'Scholarship Program' },
  { id: 8, src: image8, alt: 'Orphan Support' },
  { id: 9, src: image9, alt: 'Story 2' },
  { id: 10, src: image10, alt: 'Mentorship Program' },
  { id: 11, src: image11, alt: 'Story 1' },
  { id: 12, src: image12, alt: 'Mentorship Impact' },
]);
</script>
