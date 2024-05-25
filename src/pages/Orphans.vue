<template>
    <div class="container mx-auto py-8">
      <!-- Hero Section -->
      <section class="hero-section relative text-white py-16 text-center">
      <div class="absolute inset-0 bg-gray-800 bg-opacity-70"></div>
      <div class="container relative mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Orphan Health Programs</h1>
        <p class="text-xl">
          The state of health for orphans worldwide is not just an issue; it's a crisis.
        </p>
        <p class="mt-4 max-w-2xl mx-auto">
          From illnesses like HIV/AIDS to the basic human need for clean water and proper nutrition, millions of orphan children face life-threatening circumstances every single day.
        </p>
        <p class="mt-4 max-w-2xl mx-auto">
          What we must not forget is that every statistic is a life—a child in need of a family, love, and, most importantly, basic health services.
        </p>
        <p class="mt-4 max-w-2xl mx-auto">
          At Orphan Life Foundation, we're committed to making a tangible difference in the lives of the orphans and underprivileged in rural areas.
        </p>
      </div>
    </section>
  
      <!-- Education Section -->
      <section class="py-8">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Our Education Projects at a Glance</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Operation Education Project (OEP)</h3>
            <p class="text-gold font-semibold">Objective:</p>
            <p class="text-gray-800 mb-4">
              To provide resources for better education to orphaned and underprivileged children in the underserved areas of the Philippines, India, Columbia, and Africa, ensuring they have access to the knowledge and skills needed for a secure future.
            </p>
            <h4 class="text-xl font-bold text-gray-800 mb-4">What we do</h4>
            <p class="text-gray-800 mb-4">
              We fund academic programs, develop educational facilities, and supply learning materials to various orphanages and schools.
            </p>
            <img src="../assests/education.jpeg" alt="Education Project" class="w-full h-auto rounded-lg">
          </div>
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h4 class="text-xl font-bold text-gray-800 mb-4">Impact and Future Goal</h4>
            <p class="text-gray-800 mb-4">
              Thousands of children have been enrolled in schools, with a significant percentage advancing to higher levels of education. We aim to raise more funds to magnify our impact and reach more orphaned children across the world.
            </p>
            <img src="../assests/books.jpeg" alt="Education Impact" class="w-full h-auto rounded-lg">
            <router-link to="/contact" class="inline-block mt-4 bg-gold text-gray-800 px-4 py-2 rounded">Get Involved</router-link>
          </div>
        </div>
      </section>
  
      <!-- Health Section -->
      <section class="py-8">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Our Health Projects at a Glance</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">HIV & AIDS Assistance (H2A)</h3>
            <p class="text-gold font-semibold">Objective:</p>
            <p class="text-gray-800 mb-4">
              To curb the devastating impacts of HIV and AIDS on orphan children and their families.
            </p>
            <h4 class="text-xl font-bold text-gray-800 mb-4">What we do</h4>
            <p class="text-gray-800 mb-4">
              We focus on improving access to nutritional and health services, keeping children in school, protecting their legal and human rights, and promoting emotional support.
            </p>
            <img src="../assests/health1.jpeg" alt="Health Project" class="w-full h-auto rounded-lg">
          </div>
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h4 class="text-xl font-bold text-gray-800 mb-4">Impact and Future Goal</h4>
            <p class="text-gray-800 mb-4">
              We have allocated around $3,000 specifically for the HIV/AIDS program, aimed at rooting out one of the causes of children becoming orphaned in specific regions. By 2020, we performed HIV tests on all orphan children registered in our database and provided medical assistance and sensitization to the community. We aim to raise more funds to provide ongoing health services and support to the community.
            </p>
            <img src="../assests/health2.jpeg" alt="Health Impact" class="w-full h-auto rounded-lg">
            <router-link to="/contact" class="inline-block mt-4 bg-gold text-gray-800 px-4 py-2 rounded">Get Involved</router-link>
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
      title: 'Operation Education Project (OEP)',
      objective: 'To provide resources for better education...',
      whatWeDo: 'We fund academic programs, develop educational facilities...',
      impact: 'Thousands of children have been enrolled in schools...',
      images: ['education1.jpg', 'education2.jpg'],
      link: '/education-impact'
    },
    {
      id: 2,
      title: 'HIV & AIDS Assistance (H2A)',
      objective: 'To curb the devastating impacts of HIV and AIDS...',
      whatWeDo: 'We focus on improving access to nutritional and health services...',
      impact: 'We have allocated around $3,000 specifically for the HIV/AIDS program...',
      images: ['health1.jpg', 'health2.jpg'],
      link: '/health-impact'
    }
  ]);
  </script>
  
  <style scoped>
  .hero-section {
    background: url('../assests/orphans.jpeg') no-repeat center center;
    background-size: cover;
  }
  .bg-gold {
    background-color: #FFD700;
  }
  </style>
  