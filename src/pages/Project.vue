<template>
    <div class="overflow-x-hidden">
  
      <!-- Header Section -->
      <section class="relative h-[400px] bg-cover bg-center flex items-center justify-center" style="background-image: url('https://img.freepik.com/free-photo/happy-children-holding-hands-outdoors_1150-10526.jpg?ga=GA1.1.342046830.1745838061&semt=sph');">
        <div class="absolute inset-0 bg-black bg-opacity-70"></div>
        <div class="relative text-center text-white px-4" v-scroll-animation="'animate-fade-in'">
          <h1 class="text-5xl font-bold leading-tight mb-4">Our Projects</h1>
          <p class="text-xl max-w-3xl mx-auto">
            Every project we launch brings hope, dignity, and opportunity to vulnerable children.
          </p>
        </div>
      </section>
  
      <!-- Projects Grid -->
      <section class="py-20 bg-gray-100">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-12" v-scroll-animation="'animate-slide-up'">Making Impact, One Step at a Time</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
  
            <!-- Project Cards -->
            <div v-for="project in projects" :key="project.id" class="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition transform hover:-translate-y-2" v-scroll-animation="'animate-fade-in'">
              <img :src="project.image" :alt="project.title" class="rounded-lg mb-6 w-full h-52 object-cover" />
              <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ project.title }}</h3>
              <p class="text-gray-600 mb-6">{{ project.description }}</p>
              <router-link :to="project.link" class="inline-block bg-gold text-gray-900 font-bold px-6 py-2 rounded-full hover:bg-yellow-400 transition">
                Learn More
              </router-link>
            </div>
  
          </div>
        </div>
      </section>
  
      <!-- Call to Action Section -->
      <section class="py-20 bg-gray-900 text-white text-center" v-scroll-animation="'animate-fade-in'">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold mb-6">Be Part of the Change</h2>
          <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
            Your support helps us launch more projects that uplift and empower orphaned children worldwide.
          </p>
          <router-link to="/donate" class="inline-block bg-gold text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition">
            Donate Now
          </router-link>
        </div>
      </section>
  
    </div>
  </template>
  
  <script setup>
  const projects = [
    {
      id: 1,
      title: 'Operation Education Project',
      description: 'Supplying school fees, uniforms, and books across underserved areas in Africa, Philippines, and India.',
      image: 'https://img.freepik.com/free-photo/close-up-african-kids-reading-together_23-2148860425.jpg?ga=GA1.1.342046830.1745838061&semt=ais_hybrid&w=740',
      link: '/operation-education'
    },
    {
      id: 2,
      title: 'HIV & AIDS Assistance Program',
      description: 'Providing free testing, treatment, education, and emotional support to protect vulnerable orphans.',
      image: 'https://img.freepik.com/free-photo/medic-patient-looking-human-body-analysis_482257-21552.jpg?ga=GA1.1.342046830.1745838061&semt=ais_hybrid&w=740',
      link: '/hiv-aids-assistance'
    },
    {
      id: 3,
      title: 'Nutrition & Clean Water Access',
      description: 'Ensuring orphaned children receive adequate nutrition and access to safe drinking water.',
      image: 'https://img.freepik.com/free-photo/african-woman-pouring-water-recipient-outdoors_23-2149021910.jpg?ga=GA1.1.342046830.1745838061&semt=ais_hybrid&w=740',
      link: '/nutrition-water'
    },
    {
    id: 4,
    title: 'Girl Empowerment & Hygiene Education',
    description: 'Educating young girls about menstrual health, providing dignity kits, and preventing school dropouts.',
    image: 'https://img.freepik.com/free-photo/female-health-worker-giving-sanitary-pads-girls_23-2149438729.jpg',
    link: '/girl-empowerment'
  },
  {
    id: 5,
    title: 'Digital Literacy Bootcamps',
    description: 'Training underserved youth in basic computer skills, digital safety, and online learning access.',
    image: 'https://img.freepik.com/free-photo/african-boy-using-computer-school_23-2148683782.jpg',
    link: '/digital-literacy'
  },
  {
    id: 6,
    title: 'Child Mental Health & Counseling',
    description: 'Offering trauma counseling, emotional support circles, and wellness activities for orphaned children.',
    image: 'https://img.freepik.com/free-photo/psychologist-consulting-young-girl_23-2149101281.jpg',
    link: '/mental-health'
  }
  ];
  </script>
  
  <style scoped>
  .bg-gold {
    background-color: #FFD700;
  }
  
  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  .animate-fade-in {
    animation: fadeIn 1s ease-out both;
  }
  .animate-slide-up {
    animation: slideUp 1s ease-out both;
  }
  </style>
  