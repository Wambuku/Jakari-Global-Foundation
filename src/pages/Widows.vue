<template>
    <div class="container mx-auto py-8">
      <!-- Hero Section -->
      <section class="hero-section relative text-white py-16 text-center">
        <div class="absolute inset-0 bg-gray-800 bg-opacity-70"></div>
        <div class="container relative mx-auto px-4">
          <h1 class="text-4xl font-bold mb-4">Widow Support Programs</h1>
          <p class="text-xl">
            The challenges faced by widows worldwide are not just personal; they are societal.
          </p>
          <p class="mt-4 max-w-2xl mx-auto">
            From access to healthcare to economic empowerment, millions of widows struggle daily to provide for their families and secure a better future.
          </p>
          <p class="mt-4 max-w-2xl mx-auto">
            It's essential to remember that every statistic represents a woman facing immense difficulties, needing our support and solidarity.
          </p>
        </div>
      </section>
  
      <!-- Health Section -->
      <section class="py-8">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Our Health Initiatives</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Healthcare Access</h3>
            <p class="text-gold font-semibold">Objective:</p>
            <p class="text-gray-800 mb-4">
              To improve access to healthcare services for widows, ensuring they receive necessary medical attention and support.
            </p>
            <h4 class="text-xl font-bold text-gray-800 mb-4">What we do</h4>
            <p class="text-gray-800 mb-4">
              We provide medical check-ups, health education, and access to essential medicines for widows and their families.
            </p>
            <img src="../assests/health3.jpeg" alt="Healthcare Access" class="w-full h-auto rounded-lg">
          </div>
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h4 class="text-xl font-bold text-gray-800 mb-4">Impact and Future Goal</h4>
            <p class="text-gray-800 mb-4">
              We aim to extend our healthcare programs to reach more widows in remote areas, providing comprehensive health services and support.
            </p>
            <img src="../assests/health4.jpeg" alt="Healthcare Impact" class="w-full h-auto rounded-lg">
            <router-link to="/contact" class="inline-block mt-4 bg-gold text-gray-800 px-4 py-2 rounded">Learn More</router-link>
          </div>
        </div>
      </section>
  
      <!-- Economic Empowerment Section -->
      <section class="py-8">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Economic Empowerment</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Skills Training and Microfinance</h3>
            <p class="text-gold font-semibold">Objective:</p>
            <p class="text-gray-800 mb-4">
              To equip widows with the skills and financial support needed to start and sustain small businesses, promoting economic independence.
            </p>
            <h4 class="text-xl font-bold text-gray-800 mb-4">What we do</h4>
            <p class="text-gray-800 mb-4">
              We offer vocational training, financial literacy workshops, and access to microfinance programs to help widows build sustainable livelihoods.
            </p>
            <img src="../assests/empower.jpeg" alt="Economic Empowerment" class="w-full h-auto rounded-lg">
          </div>
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h4 class="text-xl font-bold text-gray-800 mb-4">Impact and Future Goal</h4>
            <p class="text-gray-800 mb-4">
              Our goal is to expand our economic empowerment initiatives, providing more widows with the tools and resources they need to achieve financial stability.
            </p>
            <img src="../assests/empower1.jpeg" alt="Economic Impact" class="w-full h-auto rounded-lg">
            <router-link to="/contact" class="inline-block mt-4 bg-gold text-gray-800 px-4 py-2 rounded">Learn More</router-link>
          </div>
        </div>
      </section>

    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const sections = ref([
    {
      id: 1,
      title: 'Healthcare Access',
      objective: 'To improve access to healthcare services...',
      whatWeDo: 'We provide medical check-ups, health education...',
      impact: 'We aim to extend our healthcare programs...',
      images: ['healthcare.jpg', 'healthcare-impact.jpg'],
      link: '/healthcare-impact'
    },
    {
      id: 2,
      title: 'Skills Training and Microfinance',
      objective: 'To equip widows with the skills and financial support...',
      whatWeDo: 'We offer vocational training, financial literacy workshops...',
      impact: 'Our goal is to expand our economic empowerment initiatives...',
      images: ['economic-empowerment.jpg', 'economic-impact.jpg'],
      link: '/economic-impact'
    },
  ]);
  
  const getImagePath = (imageName) => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };
  </script>
  
  <style scoped>
  .hero-section {
    background: url('../assests/widows.jpeg') no-repeat center center;
    background-size: cover;
    height: 300px; /* Small part of the picture */
  }
  .bg-gold {
    background-color: #FFD700;
  }
  </style>
  