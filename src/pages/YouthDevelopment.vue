<template>
  <div class="overflow-x-hidden">

    <!-- Hero Section -->
    <section class="relative bg-cover bg-center text-white h-[400px] flex items-center justify-center" style="background-image: url('https://cdn.pixabay.com/photo/2018/07/31/14/09/young-people-3575167_640.jpg');">
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
      <div class="relative text-center px-4 animate-fade-in">
        <h1 class="text-5xl md:text-6xl font-bold mb-4 leading-tight">Empowering the Next Generation</h1>
        <p class="text-xl max-w-2xl mx-auto leading-relaxed">
          Comprehensive programs built to equip youth with skills, knowledge, and opportunities for a brighter tomorrow.
        </p>
        <router-link to="/contact" class="inline-block mt-6 bg-gold text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition">Get Involved</router-link>
      </div>
    </section>

    <!-- Skills Training -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-12 animate-slide-up">Skills Training</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in">
          
          <div class="bg-gray-100 rounded-lg shadow-md p-8 group hover:shadow-xl transition">
            <div class="flex items-center justify-center mb-6">
              <font-awesome-icon :icon="['fas', 'tools']" class="text-gold h-16 w-16 group-hover:scale-110 transition" />
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Vocational Training</h3>
            <p class="text-gray-600 mb-6">
              Practical programs including carpentry, tailoring, and IT skills to foster youth employment and entrepreneurship.
            </p>
            <img src='https://cdn.pixabay.com/photo/2016/11/22/09/03/training-1848725_640.jpg' alt="Vocational Training" class="rounded-lg" />
          </div>

          <div class="bg-gray-100 rounded-lg shadow-md p-8 group hover:shadow-xl transition">
            <div class="flex items-center justify-center mb-6">
              <font-awesome-icon :icon="['fas', 'chart-line']" class="text-gold h-16 w-16 group-hover:scale-110 transition" />
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Impact & Future</h3>
            <p class="text-gray-600 mb-6">
              Expanding training centers into rural regions to empower more youth toward sustainable futures.
            </p>
            <img src='https://cdn.pixabay.com/photo/2016/11/22/08/47/training-1848682_1280.jpg' alt="Vocational Impact" class="rounded-lg" />
            <router-link to="/contact" class="inline-block mt-4 bg-gold text-gray-900 font-bold px-6 py-2 rounded-full hover:bg-yellow-400 transition">Learn More</router-link>
          </div>

        </div>
      </div>
    </section>

    <!-- Education Support -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-12 animate-slide-up">Education Support</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in">

          <div class="bg-white rounded-lg shadow-md p-8 group hover:shadow-xl transition">
            <div class="flex items-center justify-center mb-6">
              <font-awesome-icon :icon="['fas', 'graduation-cap']" class="text-gold h-16 w-16 group-hover:scale-110 transition" />
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Scholarship Programs</h3>
            <p class="text-gray-600 mb-6">
              Full and partial scholarships ensuring talented youth access quality education without financial barriers.
            </p>
            <img src='https://cdn.pixabay.com/photo/2023/10/13/14/39/book-8312948_640.jpg' alt="Scholarship Programs" class="rounded-lg" />
          </div>

          <div class="bg-white rounded-lg shadow-md p-8 group hover:shadow-xl transition">
            <div class="flex items-center justify-center mb-6">
              <font-awesome-icon :icon="['fas', 'university']" class="text-gold h-16 w-16 group-hover:scale-110 transition" />
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Impact & Future</h3>
            <p class="text-gray-600 mb-6">
              Growing our support to fund hundreds more students annually to shape Kenya’s next generation of leaders.
            </p>
            <img src='https://cdn.pixabay.com/photo/2018/07/02/20/02/mentor-3512369_640.jpg' alt="Scholarship Impact" class="rounded-lg" />
            <router-link to="/contact" class="inline-block mt-4 bg-gold text-gray-900 font-bold px-6 py-2 rounded-full hover:bg-yellow-400 transition">Learn More</router-link>
          </div>

        </div>
      </div>
    </section>

    <!-- Mentorship Programs -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-12 animate-slide-up">Mentorship Programs</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in">

          <div class="bg-gray-100 rounded-lg shadow-md p-8 group hover:shadow-xl transition">
            <div class="flex items-center justify-center mb-6">
              <font-awesome-icon :icon="['fas', 'user-friends']" class="text-gold h-16 w-16 group-hover:scale-110 transition" />
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Personal Development</h3>
            <p class="text-gray-600 mb-6">
              Experienced mentors guiding youth to unlock personal potential and make impactful life decisions.
            </p>
            <img src='https://img.freepik.com/free-photo/stacking-wooden-blocks-is-risk-creating-business-growth-ideas_1150-19611.jpg?ga=GA1.1.342046830.1745838061&semt=ais_hybrid&w=740' alt="Mentorship Programs" class="rounded-lg" />
          </div>

          <div class="bg-gray-100 rounded-lg shadow-md p-8 group hover:shadow-xl transition">
            <div class="flex items-center justify-center mb-6">
              <font-awesome-icon :icon="['fas', 'hands-helping']" class="text-gold h-16 w-16 group-hover:scale-110 transition" />
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Impact & Future</h3>
            <p class="text-gray-600 mb-6">
              Expanding mentorship circles to reach thousands more, nurturing tomorrow’s changemakers.
            </p>
            <img src='https://img.freepik.com/free-photo/man-jump-through-gaps-hills_1150-19693.jpg?ga=GA1.1.342046830.1745838061&semt=ais_hybrid&w=740' alt="Mentorship Impact" class="rounded-lg" />
            <router-link to="/contact" class="inline-block mt-4 bg-gold text-gray-900 font-bold px-6 py-2 rounded-full hover:bg-yellow-400 transition">Learn More</router-link>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';

// Dynamic asset handling
const getImagePath = (imageName) => {
  return new URL(`../assets/${imageName}`, import.meta.url).href;
};
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
