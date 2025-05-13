<template>
  <div class="overflow-x-hidden bg-gray-900 text-white">

    <!-- Header Section -->
    <section class="text-center py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">Strategic Priorities</h2>
        <h3 class="text-2xl md:text-3xl text-gold font-semibold mb-6 animate-fade-in delay-200">
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

        <div v-for="(item, index) in priorities" :key="index" class="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all text-center animate-fade-in">
          <div class="flex justify-center mb-4">
            <font-awesome-icon :icon="item.icon" class="text-gold text-4xl" />
          </div>
          <h4 class="text-xl font-semibold text-gold mb-2">{{ item.title }}</h4>
          <p class="text-gray-300 text-sm">{{ item.description }}</p>
        </div>

      </div>
    </section>

    <!-- Visual Strategy Graphic -->
    <section class="bg-white py-20">
      <div class="container mx-auto text-center px-6">
        <h2 class="text-4xl font-bold text-gray-800 mb-8">Strategy At A Glance</h2>
        <img src="https://cdn.pixabay.com/photo/2020/11/25/14/51/business-5775993_640.jpg" alt="Strategic Priorities Overview" class="w-full max-w-4xl mx-auto rounded-lg shadow-md" />
      </div>
    </section>

  </div>
</template>

<script setup>
import { faBriefcase, faHeartbeat, faFutbol, faWheelchair, faHandsHelping, faBullhorn, faChalkboardTeacher, faPrayingHands } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const priorities = [
  {
    title: 'Job Creation & Entrepreneurship',
    icon: faBriefcase,
    description: 'We ensure equitable access to income-generating resources and entrepreneurship support for marginalized groups.'
  },
  {
    title: 'Health and Wellbeing',
    icon: faHeartbeat,
    description: 'Creating sustainable health programs that nurture physical and emotional well-being among underserved communities.'
  },
  {
    title: 'Sports-Based Advocacy & Outreach',
    icon: faFutbol,
    description: 'Leveraging sports as a tool for healing, inclusion, and leadership development in youth and vulnerable groups.'
  },
  {
    title: 'Mobility & Access to Healthcare',
    icon: faWheelchair,
    description: 'Improving mobility and facilitating access to affordable healthcare for marginalized populations.'
  },
  {
    title: 'Prevention, Treatment & Rehab',
    icon: faHandsHelping,
    description: 'Addressing mental health and substance abuse issues through prevention, care, and rehabilitation support.'
  },
  {
    title: 'Advocacy and Civic Engagement',
    icon: faBullhorn,
    description: 'Driving policy reform and community leadership to champion inclusion and human dignity.'
  },
  {
    title: 'Skills Development & Capacity Building',
    icon: faChalkboardTeacher,
    description: 'Delivering tailored training programs to equip individuals with lifelong skills for independence and impact.'
  },
  {
    title: 'Chaplaincy & Family Values',
    icon: faPrayingHands,
    description: 'We offer mentorship and faith-based guidance to promote strong family systems and values.'
  }
];
</script>

<style scoped>
.bg-gold {
  background-color: #FFD700;
}
.text-gold {
  color: #FFD700;
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
