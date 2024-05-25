<template>
    <div class="container mx-auto py-8">
      <!-- Hero Section -->
      <section class="hero-section relative text-white py-16 text-center">
        <div class="absolute inset-0 bg-gray-800 bg-opacity-70"></div>
        <div class="container relative mx-auto px-4">
          <h1 class="text-4xl font-bold mb-4">Youth Development Programs</h1>
          <p class="text-xl">
            Empowering the next generation through comprehensive development initiatives.
          </p>
          <p class="mt-4 max-w-2xl mx-auto">
            Our programs aim to provide the youth with the skills, knowledge, and opportunities they need to build a brighter future.
          </p>
        </div>
      </section>
  
      <!-- Skills Training Section -->
      <section class="py-8">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Skills Training</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Vocational Training</h3>
            <p class="text-gold font-semibold">Objective:</p>
            <p class="text-gray-800 mb-4">
              To equip youth with vocational skills that will enable them to secure employment and become self-reliant.
            </p>
            <h4 class="text-xl font-bold text-gray-800 mb-4">What we do</h4>
            <p class="text-gray-800 mb-4">
              We offer various vocational training programs, including carpentry, tailoring, and computer skills, to help youth gain practical skills.
            </p>
            <img src="../assests/vocational-training.jpg" alt="Vocational Training" class="w-full h-auto rounded-lg">
          </div>
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h4 class="text-xl font-bold text-gray-800 mb-4">Impact and Future Goal</h4>
            <p class="text-gray-800 mb-4">
              We aim to expand our vocational training programs to reach more youth in rural and urban areas, providing them with the skills needed for sustainable livelihoods.
            </p>
            <img src="../assests/vocational-impact.jpg" alt="Vocational Impact" class="w-full h-auto rounded-lg">
            <router-link to="/contact" class="inline-block mt-4 bg-gold text-gray-800 px-4 py-2 rounded">Learn More</router-link>
          </div>
        </div>
      </section>
  
      <!-- Education Support Section -->
      <section class="py-8 bg-gray-100">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Education Support</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Scholarship Programs</h3>
            <p class="text-gold font-semibold">Objective:</p>
            <p class="text-gray-800 mb-4">
              To provide scholarships to underprivileged youth, enabling them to pursue their education and achieve their academic goals.
            </p>
            <h4 class="text-xl font-bold text-gray-800 mb-4">What we do</h4>
            <p class="text-gray-800 mb-4">
              We offer scholarships for high school and college students, covering tuition fees, books, and other educational expenses.
            </p>
            <img src="../assests/scholarship.jpg" alt="Scholarship Programs" class="w-full h-auto rounded-lg">
          </div>
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h4 class="text-xl font-bold text-gray-800 mb-4">Impact and Future Goal</h4>
            <p class="text-gray-800 mb-4">
              Our goal is to increase the number of scholarships awarded each year, helping more youth access quality education and improve their future prospects.
            </p>
            <img src="../assests/scholarship-impact.jpg" alt="Scholarship Impact" class="w-full h-auto rounded-lg">
            <router-link to="/contact" class="inline-block mt-4 bg-gold text-gray-800 px-4 py-2 rounded">Learn More</router-link>
          </div>
        </div>
      </section>
  
      <!-- Mentorship Programs Section -->
      <section class="py-8">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Mentorship Programs</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Personal Development Mentorship</h3>
            <p class="text-gold font-semibold">Objective:</p>
            <p class="text-gray-800 mb-4">
              To provide guidance and support to youth through mentorship, helping them develop their personal and professional skills.
            </p>
            <h4 class="text-xl font-bold text-gray-800 mb-4">What we do</h4>
            <p class="text-gray-800 mb-4">
              We connect youth with experienced mentors who offer advice, support, and encouragement to help them navigate their career paths and personal growth.
            </p>
            <img src="../assests/mentorship.jpg" alt="Mentorship Programs" class="w-full h-auto rounded-lg">
          </div>
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h4 class="text-xl font-bold text-gray-800 mb-4">Impact and Future Goal</h4>
            <p class="text-gray-800 mb-4">
              Our aim is to expand our mentorship network, providing more youth with access to role models and mentors who can positively influence their lives.
            </p>
            <img src="../assests/mentorship-impact.jpg" alt="Mentorship Impact" class="w-full h-auto rounded-lg">
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
      title: 'Vocational Training',
      objective: 'To equip youth with vocational skills...',
      whatWeDo: 'We offer various vocational training programs...',
      impact: 'We aim to expand our vocational training programs...',
      images: ['vocational-training.jpg', 'vocational-impact.jpg'],
      link: '/vocational-impact'
    },
    {
      id: 2,
      title: 'Scholarship Programs',
      objective: 'To provide scholarships to underprivileged youth...',
      whatWeDo: 'We offer scholarships for high school and college students...',
      impact: 'Our goal is to increase the number of scholarships awarded each year...',
      images: ['scholarship.jpg', 'scholarship-impact.jpg'],
      link: '/scholarship-impact'
    },
    {
      id: 3,
      title: 'Personal Development Mentorship',
      objective: 'To provide guidance and support to youth through mentorship...',
      whatWeDo: 'We connect youth with experienced mentors...',
      impact: 'Our aim is to expand our mentorship network...',
      images: ['mentorship.jpg', 'mentorship-impact.jpg'],
      link: '/mentorship-impact'
    }
  ]);
  
  const getImagePath = (imageName) => {
    return new URL(`../assests/${imageName}`, import.meta.url).href;
  };
  </script>
  
  <style scoped>
  .hero-section {
    background: url('../assests/youth-development-hero.jpg') no-repeat center center;
    background-size: cover;
    height: 300px; /* Small part of the picture */
  }
  .bg-gold {
    background-color: #FFD700;
  }
  </style>
  