<template>
  <div class="bg-gray-900 text-white overflow-x-hidden">
    
    <!-- Hero Section -->
    <section class="relative animate-fade-in">
      <img src="https://cdn.pixabay.com/photo/2016/03/31/22/02/children-1296800_640.png" alt="Hero Image" class="w-full h-96 object-cover" />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-5xl md:text-6xl font-extrabold text-gold animate-slide-up">ABOUT US</h1>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="container mx-auto py-20 px-6 animate-fade-in">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl font-bold mb-6 leading-tight">
            Everyone has talent and potential — but not everyone has access to opportunity.
          </h2>
          <p class="mb-6 text-gray-300 leading-relaxed">
            We partner with rural schools and communities in East Africa to bridge this gap, providing vulnerable youth with the resources, mentorship, and skills they need to succeed inside and outside the classroom.
          </p>
          <p class="text-gray-400 leading-relaxed">
            Our locally rooted staff drive our program design, fueled by insight from parents, community leaders, and the youth themselves. We are the face of the future we are helping to create.
          </p>
        </div>
        <div class="text-center">
          <img src="https://cdn.pixabay.com/photo/2012/10/10/10/28/africa-60570_640.jpg" alt="Africa Map" class="w-3/4 mx-auto animate-zoom-in" />
          <p class="mt-4 font-medium text-gold uppercase tracking-wide">We Work in Rural East Africa</p>
        </div>
      </div>
    </section>

    <!-- What We Do Section -->
    <section class="bg-gray-800 py-20 px-6 animate-fade-in">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-12 text-gold animate-slide-up">What We Do</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="group p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
            <img src="https://cdn.pixabay.com/photo/2024/10/27/07/12/women-9152739_640.jpg" alt="Wezesha Vijana Program" class="mx-auto mb-6 h-48 w-full object-cover rounded" />
            <h3 class="text-2xl font-semibold mb-4 group-hover:text-yellow-400 transition">Wezesha Vijana (SDG #5)</h3>
            <p class="text-gray-300">
              Empower girls with vital health, finance, business, and leadership skills to shape brighter futures.
            </p>
          </div>

          <div class="group p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
            <img src="https://cdn.pixabay.com/photo/2018/07/31/14/09/young-people-3575167_640.jpg" alt="Youth Livelihood" class="mx-auto mb-6 h-48 w-full object-cover rounded" />
            <h3 class="text-2xl font-semibold mb-4 group-hover:text-yellow-400 transition">Youth Livelihood Program (SDG #8)</h3>
            <p class="text-gray-300">
              Foster leadership, entrepreneurship, and job readiness among Africa’s youth.
            </p>
          </div>

          <div class="group p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
            <img src="https://cdn.pixabay.com/photo/2017/09/09/08/40/inclusion-2731340_640.png" alt="Disability Program" class="mx-auto mb-6 h-48 w-full object-cover rounded" />
            <h3 class="text-2xl font-semibold mb-4 group-hover:text-yellow-400 transition">Program for Disabilities (SDG #10)</h3>
            <p class="text-gray-300">
              Promote inclusivity and independence for individuals with disabilities through tailored programs and opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>

   <!-- Mission Section -->
<section class="bg-gray-900 py-20 px-6">
  <div class="container mx-auto text-center">
    
    <h2 class="text-4xl font-bold text-gold mb-6 animate-slide-up">Our Mission</h2>
    <p class="text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
      Educate and empower the next generation of change agents whose dreams and actions will transform Africa and the world.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mt-12">

      <!-- Learn -->
      <div class="group bg-gray-800 p-6 rounded-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-3 animate-zoom-in">
        <div class="flex justify-center mb-4">
          <font-awesome-icon :icon="['fas', 'graduation-cap']" class="h-16 w-16 text-gold group-hover:scale-110 transition duration-300" />
        </div>
        <h3 class="text-2xl font-bold text-gold mb-4 group-hover:text-yellow-400 transition">Learn</h3>
        <p class="text-gray-300">
          Youth develop leadership, communication, entrepreneurship, and life skills through personalized learning.
        </p>
      </div>

      <!-- Do -->
      <div class="group bg-gray-800 p-6 rounded-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-3 animate-zoom-in delay-200">
        <div class="flex justify-center mb-4">
          <font-awesome-icon :icon="['fas', 'bolt']" class="h-16 w-16 text-gold group-hover:scale-110 transition duration-300" />
        </div>
        <h3 class="text-2xl font-bold text-gold mb-4 group-hover:text-yellow-400 transition">Do</h3>
        <p class="text-gray-300">
          Hands-on experimentation turns concepts into action, paving the way for entrepreneurship and workforce creation.
        </p>
      </div>

      <!-- Teach -->
      <div class="group bg-gray-800 p-6 rounded-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-3 animate-zoom-in delay-400">
        <div class="flex justify-center mb-4">
          <font-awesome-icon :icon="['fas', 'chalkboard-teacher']" class="h-16 w-16 text-gold group-hover:scale-110 transition duration-300" />
        </div>
        <h3 class="text-2xl font-bold text-gold mb-4 group-hover:text-yellow-400 transition">Teach</h3>
        <p class="text-gray-300">
          Empowered youth multiply change by mentoring their peers, younger students, and communities.
        </p>
      </div>

      <!-- Pay It Forward -->
      <div class="group bg-gray-800 p-6 rounded-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-3 animate-zoom-in delay-600">
        <div class="flex justify-center mb-4">
          <font-awesome-icon :icon="['fas', 'heart']" class="h-16 w-16 text-gold group-hover:scale-110 transition duration-300" />
        </div>
        <h3 class="text-2xl font-bold text-gold mb-4 group-hover:text-yellow-400 transition">Pay It Forward</h3>
        <p class="text-gray-300">
          Youth turn solutions into action through service, inspiring leadership and innovation across communities.
        </p>
      </div>

    </div>

  </div>
</section>


  </div>
</template>

<script setup>
</script>

<style scoped>
.bg-gold {
  background-color: #d69e2e;
}
.text-gold {
  color: #d69e2e;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 30px; opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes zoomIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out both;
}

.animate-slide-up {
  animation: slideUp 1s ease-out both;
}

.animate-zoom-in {
  animation: zoomIn 1s ease-out both;
}
</style>
