<template>
  <div class="bg-gray-900 text-white">

    <!-- Hero Split Section -->
    <section class="container mx-auto grid md:grid-cols-2 gap-10 items-center py-20 px-6">
      <div class="space-y-6">
        <h1 class="text-5xl font-extrabold leading-tight">Empowering the Next Generation</h1>
        <p class="text-lg text-gray-200">
          Comprehensive programs built to equip youth with skills, knowledge, and opportunities for a brighter tomorrow.
        </p>
        <router-link to="/contact" class="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition">
          Get Involved
        </router-link>
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2018/07/31/14/09/young-people-3575167_640.jpg" alt="Youth Empowerment" class="rounded-xl shadow-lg" />
      </div>
    </section>

    <!-- Z-pattern Info Blocks -->
    <section class="space-y-20 py-20">

      <!-- Skills Training Block -->
      <div class="container mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <img src="https://cdn.pixabay.com/photo/2016/11/22/09/03/training-1848725_640.jpg" alt="Skills Training" class="rounded-lg shadow-lg order-2 md:order-1" />
        <div class="space-y-4 order-1 md:order-2">
          <h2 class="text-4xl font-bold">Skills Training</h2>
          <p class="text-gray-200">
            Practical programs including carpentry, tailoring, and IT skills to foster youth employment and entrepreneurship.
          </p>
          <router-link to="/contact" class="inline-block bg-yellow-400 text-black font-bold px-5 py-2 rounded-full hover:bg-yellow-500 transition">Learn More</router-link>
        </div>
      </div>

      <!-- Education Support Block -->
      <div class="container mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <div class="space-y-4">
          <h2 class="text-4xl font-bold">Education Support</h2>
          <p class="text-gray-200">
            Full and partial scholarships ensuring talented youth access quality education without financial barriers.
          </p>
          <router-link to="/contact" class="inline-block bg-yellow-400 text-black font-bold px-5 py-2 rounded-full hover:bg-yellow-500 transition">Learn More</router-link>
        </div>
        <img src="https://cdn.pixabay.com/photo/2023/10/13/14/39/book-8312948_640.jpg" alt="Education Support" class="rounded-lg shadow-lg" />
      </div>

      <!-- Mentorship Programs Block -->
      <div class="container mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <img src="https://img.freepik.com/free-photo/stacking-wooden-blocks-is-risk-creating-business-growth-ideas_1150-19611.jpg" alt="Mentorship Program" class="rounded-lg shadow-lg order-2 md:order-1" />
        <div class="space-y-4 order-1 md:order-2">
          <h2 class="text-4xl font-bold">Mentorship Programs</h2>
          <p class="text-gray-200">
            Experienced mentors guiding youth to unlock personal potential and make impactful life decisions.
          </p>
          <router-link to="/contact" class="inline-block bg-yellow-400 text-black font-bold px-5 py-2 rounded-full hover:bg-yellow-500 transition">Join Us</router-link>
        </div>
      </div>

    </section>

  </div>
</template>

<script setup>
</script>

<style scoped>
/* Optional hover animations */
img:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}
</style>
