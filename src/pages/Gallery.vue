<template>
    <div>
      <!-- Hero Section -->
      <div class="relative bg-gray-100 h-64 flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gold">Gallery</h1>
          <nav class="mt-2">
            <router-link to="/" class="text-blue-600 hover:underline">Home</router-link>
            <span class="mx-2">></span>
            <span>Gallery</span>
          </nav>
        </div>
      </div>
  
      <!-- Gallery Section -->
      <div class="py-16 px-4 md:px-8 lg:px-16">
        <div class="container mx-auto text-center">
          <h2 class="text-2xl font-bold mb-8">Welcome to the Jakari Global Foundation Gallery</h2>
          <p class="mb-8">Explore images from our events, training sessions, community initiatives, and more.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img v-for="image in images" :key="image.id" :src="image.src" :alt="image.alt" class="w-full h-auto rounded-md shadow-md"/>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import image1 from '../assests/story3.jpeg';
  import image2 from '../assests/story3.jpeg';
  import image3 from '../assests/story3.jpeg';
  import image4 from '../assests/story3.jpeg';
  import image5 from '../assests/story3.jpeg';;
  import image6 from '../assests/story3.jpeg';
  import image7 from '../assests/story3.jpeg';
  import image8 from '../assests/story3.jpeg';
  import image9 from '../assests/story3.jpeg';
  import image10 from '../assests/story3.jpeg';
  import image11 from '../assests/story3.jpeg';
  import image12 from '../assests/story3.jpeg';
  
  const images = ref([
    { id: 1, src: image1, alt: 'Image 1' },
    { id: 2, src: image2, alt: 'Image 2' },
    { id: 3, src: image3, alt: 'Image 3' },
    { id: 4, src: image4, alt: 'Image 4' },
    { id: 5, src: image5, alt: 'Image 5' },
    { id: 6, src: image6, alt: 'Image 6' },
    { id: 7, src: image7, alt: 'Image 7' },
    { id: 8, src: image8, alt: 'Image 8' },
    { id: 9, src: image9, alt: 'Image 9' },
    { id: 10, src: image10, alt: 'Image 10' },
    { id: 11, src: image11, alt: 'Image 11' },
    { id: 12, src: image12, alt: 'Image 12' },
  ]);
  </script>
  
  <style scoped>
  .bg-gold {
    background-color: #FFD700;
  }
  </style>
  