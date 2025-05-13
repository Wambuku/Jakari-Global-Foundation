<template>
  <div class="bg-gray-900 text-white overflow-x-hidden">

    <!-- ABOUT US INTRO -->
    <section class="relative py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <div class="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div class="relative group overflow-hidden rounded-xl shadow-xl">
          <img src="https://cdn.pixabay.com/photo/2012/10/10/10/28/africa-60570_640.jpg" alt="Africa Map" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          <p class="absolute bottom-4 left-4 bg-black/60 text-gold text-xs px-4 py-2 rounded-full uppercase tracking-widest">Working in East Africa</p>
        </div>
        <div class="space-y-6">
          <h2 class="text-4xl md:text-5xl font-bold leading-tight">Who We Are</h2>
          <p class="text-gray-300 text-lg leading-relaxed">
            Everyone has talent and potential — but not everyone has access to opportunity. We partner with rural schools and communities in East Africa to bridge this gap, providing vulnerable youth with the resources, mentorship, and skills they need to succeed.
          </p>
          <p class="text-gray-400">
            Our locally rooted staff co-create programs with parents, community leaders, and youth themselves — ensuring sustainable, impactful outcomes.
          </p>
        </div>
      </div>
    </section>

    <!-- WHAT WE DO -->
    <section class="bg-gray-800 py-24 px-6">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold text-gold mb-12">What We Do</h2>
        <div class="grid md:grid-cols-3 gap-10">
          <div v-for="(item, index) in programs" :key="index" class="group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
            <img :src="item.image" :alt="item.title" class="h-56 w-full object-cover group-hover:scale-110 transition duration-500" />
            <div class="p-6 text-left">
              <h3 class="text-2xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition">{{ item.title }}</h3>
              <p class="text-gray-400">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OUR MISSION -->
    <section class="bg-gray-900 py-24 px-6">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold text-gold mb-6">Our Mission</h2>
        <p class="text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16">
          Educating and empowering the next generation of change agents whose dreams and actions will transform Africa and the world.
        </p>
        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="(item, index) in mission" :key="index" class="group bg-gray-800 p-6 rounded-xl hover:shadow-yellow-400 hover:shadow-lg transition duration-300">
            <font-awesome-icon :icon="item.icon" class="h-12 w-12 text-gold group-hover:scale-110 transition" />
            <h3 class="text-xl font-bold text-gold mt-4 group-hover:text-yellow-400 transition">{{ item.title }}</h3>
            <p class="text-gray-400 mt-3 text-sm">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Footer Section -->
    <section class="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black py-16 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Be Part of the Change</h2>
      <p class="max-w-xl mx-auto mb-6">Your support helps empower youth and create dignified futures. Get involved today.</p>
      <router-link to="/contact" class="inline-block bg-black text-yellow-400 px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
        Join Our Mission
      </router-link>
    </section>

  </div>
</template>

<script setup>
const programs = [
  {
    title: "Wezesha Vijana (SDG #5)",
    image: "https://cdn.pixabay.com/photo/2024/10/27/07/12/women-9152739_640.jpg",
    desc: "Empower girls with vital health, finance, business, and leadership skills to shape brighter futures."
  },
  {
    title: "Youth Livelihood Program (SDG #8)",
    image: "https://cdn.pixabay.com/photo/2018/07/31/14/09/young-people-3575167_640.jpg",
    desc: "Foster leadership, entrepreneurship, and job readiness among Africa’s youth."
  },
  {
    title: "Program for Disabilities (SDG #10)",
    image: "https://cdn.pixabay.com/photo/2017/09/09/08/40/inclusion-2731340_640.png",
    desc: "Promote inclusivity and independence for individuals with disabilities through tailored programs."
  }
]

const mission = [
  {
    title: "Learn",
    icon: ["fas", "graduation-cap"],
    desc: "Youth develop leadership, communication, entrepreneurship, and life skills through personalized learning."
  },
  {
    title: "Do",
    icon: ["fas", "bolt"],
    desc: "Hands-on experimentation turns concepts into action, paving the way for entrepreneurship."
  },
  {
    title: "Teach",
    icon: ["fas", "chalkboard-teacher"],
    desc: "Empowered youth multiply change by mentoring peers, students, and communities."
  },
  {
    title: "Pay It Forward",
    icon: ["fas", "heart"],
    desc: "Youth turn solutions into service, inspiring leadership and innovation in communities."
  }
]
</script>

<style scoped>
.text-gold { color: #d69e2e; }
.bg-gold { background-color: #d69e2e; }
</style>
