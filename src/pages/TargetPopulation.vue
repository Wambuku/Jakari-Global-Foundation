<template>
  <div class="overflow-x-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">

    <!-- Header Section -->
    <section class="text-center py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4 animate-slide-up bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Strategic Priorities</h2>
        <h3 class="text-2xl md:text-3xl font-semibold mb-6 animate-fade-in delay-200 text-gradient-gold">
          Targeting Vulnerable Populations with Purpose
        </h3>
        <p class="text-gray-300 max-w-3xl mx-auto animate-fade-in delay-300">
          We build dignified futures for Widows, Orphans, People with Disabilities, and the Boy Child through focused and inclusive priority areas.
        </p>
      </div>
    </section>

    <!-- Priorities Grid -->
    <section class="container mx-auto py-20 px-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <div
          v-for="(item, index) in priorities"
          :key="index"
          class="bg-white/5 backdrop-blur-md border border-gray-700 hover:border-yellow-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all text-center group hover:-translate-y-2"
        >
          <div class="flex justify-center mb-6 transform group-hover:scale-110 transition-transform">
            <font-awesome-icon :icon="item.icon" class="text-gold text-4xl animate-pulse group-hover:animate-none" />
          </div>
          <h4 class="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 mb-3">{{ item.title }}</h4>
          <p class="text-gray-300 text-sm leading-relaxed">{{ item.description }}</p>
        </div>

      </div>
    </section>

    <!-- Visual Strategy Graphic -->
    <section class="relative py-20">
      <div class="container mx-auto text-center px-6">
        <h2 class="text-4xl font-bold text-white mb-8">Strategy At A Glance</h2>
        <div class="relative">
          <img src="https://cdn.pixabay.com/photo/2020/11/25/14/51/business-5775993_1280.jpg" alt="Strategic Priorities Overview" class="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl opacity-90" />
          <div class="absolute inset-0 bg-black/30 rounded-2xl"></div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { faBriefcase, faHeartbeat, faFutbol, faWheelchair, faHandsHelping, faBullhorn, faChalkboardTeacher, faPrayingHands } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const priorities = [
  { title: 'Job Creation & Entrepreneurship', icon: faBriefcase, description: 'We ensure equitable access to income-generating resources and entrepreneurship support for marginalized groups.' },
  { title: 'Health and Wellbeing', icon: faHeartbeat, description: 'Creating sustainable health programs that nurture physical and emotional well-being among underserved communities.' },
  { title: 'Sports-Based Advocacy & Outreach', icon: faFutbol, description: 'Leveraging sports as a tool for healing, inclusion, and leadership development in youth and vulnerable groups.' },
  { title: 'Mobility & Access to Healthcare', icon: faWheelchair, description: 'Improving mobility and facilitating access to affordable healthcare for marginalized populations.' },
  { title: 'Prevention, Treatment & Rehab', icon: faHandsHelping, description: 'Addressing mental health and substance abuse issues through prevention, care, and rehabilitation support.' },
  { title: 'Advocacy and Civic Engagement', icon: faBullhorn, description: 'Driving policy reform and community leadership to champion inclusion and human dignity.' },
  { title: 'Skills Development & Capacity Building', icon: faChalkboardTeacher, description: 'Delivering tailored training programs to equip individuals with lifelong skills for independence and impact.' },
  { title: 'Chaplaincy & Family Values', icon: faPrayingHands, description: 'We offer mentorship and faith-based guidance to promote strong family systems and values.' },
];
</script>

<style scoped>
.text-gold {
  color: #FFD700;
}
.text-gradient-gold {
  background: linear-gradient(to right, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
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
