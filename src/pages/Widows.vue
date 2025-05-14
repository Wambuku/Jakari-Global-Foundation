<template>
  <div class="overflow-x-hidden font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="relative h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-300">
      <div class="w-full md:w-1/2 h-full flex items-center justify-center p-10">
        <div class="max-w-xl text-center md:text-left">
          <h1 class="text-4xl md:text-6xl font-extrabold mb-4">Dignity for Widows</h1>
          <p class="text-lg md:text-xl text-gray-700 mb-6">
            Transforming hardship into hope through health, skills, and economic empowerment.
          </p>
          <router-link to="/contact" class="inline-block bg-yellow-500 text-white font-semibold px-8 py-3 rounded-xl shadow hover:scale-105 transition-transform">
            Get Involved
          </router-link>
        </div>
      </div>
      <div class="w-full md:w-1/2 h-[500px] md:h-full bg-cover bg-center" style="background-image: url('https://img.freepik.com/free-photo/portrait-african-woman-smiling_23-2149021395.jpg');"></div>
    </section>

    <!-- Health Programs Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12">Our Health Initiatives</h2>
        <div class="grid md:grid-cols-2 gap-10">
          <div class="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <img src="https://img.freepik.com/free-photo/close-up-african-american-hand-holding-stethoscope_482257-19507.jpg" alt="Healthcare Access" class="w-32 h-32 rounded-xl object-cover" />
            <div>
              <h3 class="text-2xl font-semibold mb-2">Healthcare Access</h3>
              <p class="text-gray-600 text-sm">
                Health education, check-ups, and affordable medications for widows in remote communities.
              </p>
            </div>
          </div>
          <div class="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <img src="https://img.freepik.com/free-photo/flat-lay-heart-shaped-vegetable-arrangement_23-2148287517.jpg" alt="Impact & Future" class="w-32 h-32 rounded-xl object-cover" />
            <div>
              <h3 class="text-2xl font-semibold mb-2">Impact & Future</h3>
              <p class="text-gray-600 text-sm">
                Expanding mobile medical units and partnerships to ensure essential healthcare for every widow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Economic Empowerment Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12">Empowering Widows Economically</h2>
        <div class="grid md:grid-cols-2 gap-10">
          <div class="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl shadow-md">
            <h3 class="text-2xl font-semibold mb-4">Skills & Microfinance</h3>
            <p class="text-gray-700 mb-6">
              Tailoring, farming, entrepreneurship workshops, and microloans to uplift widows into self-reliance.
            </p>
            <router-link to="/contact" class="inline-block border border-yellow-500 text-yellow-500 font-medium px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition">
              Learn More
            </router-link>
          </div>
          <div class="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl shadow-md">
            <h3 class="text-2xl font-semibold mb-4">Long-term Impact</h3>
            <p class="text-gray-700 mb-6">
              Hundreds of widows empowered with income-generating activities. Our goal is to impact thousands by 2026.
            </p>
            <router-link to="/contact" class="inline-block border border-yellow-500 text-yellow-500 font-medium px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition">
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Minimal scripting required for this layout.
</script>

<style scoped>
</style>
