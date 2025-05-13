<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative h-[500px] bg-cover bg-center flex items-center justify-center" style="background-image: url('https://img.freepik.com/free-photo/portrait-african-woman-smiling_23-2149021395.jpg');">
      <div class="absolute inset-0 bg-black bg-opacity-70"></div>
      <div class="relative text-center text-white px-6" v-scroll-animation="'animate-fade-in'">
        <h1 class="text-5xl font-bold leading-tight mb-4">Supporting Widows with Dignity</h1>
        <p class="text-xl max-w-3xl mx-auto leading-relaxed">
          Transforming hardship into hope through health, skills, and economic empowerment.
        </p>
        <router-link to="/contact" class="inline-block mt-6 bg-gold text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition">
          Get Involved
        </router-link>
      </div>
    </section>

    <!-- Health Programs Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-12" v-scroll-animation="'animate-slide-up'">Health Initiatives</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="bg-white p-8 rounded-lg shadow-md" v-scroll-animation="'animate-fade-in'">
            <img src="https://img.freepik.com/free-photo/close-up-african-american-hand-holding-stethoscope_482257-19507.jpg?ga=GA1.1.342046830.1745838061&semt=ais_hybrid&w=740" alt="Healthcare" class="rounded-lg mb-6 w-full h-60 object-cover" />
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Healthcare Access</h3>
            <p class="text-gray-600 mb-4">
              We provide health education, check-ups, and access to affordable medications to support widows and their families in remote and underserved communities.
            </p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-md" v-scroll-animation="'animate-fade-in'">
            <img src="https://img.freepik.com/free-photo/flat-lay-heart-shaped-vegetable-arrangement_23-2148287517.jpg?ga=GA1.1.342046830.1745838061&semt=ais_hybrid&w=740"alt="Impact Healthcare" class="rounded-lg mb-6 w-full h-60 object-cover" />
            <h3  class="text-2xl font-bold text-gray-800 mb-4">Impact & Future</h3>
            <p class="text-gray-600 mb-4">
              We aim to scale mobile medical units and local partnerships to increase our healthcare reach, ensuring every widow has access to essential services.
            </p>
            <router-link to="/contact" class="inline-block mt-4 bg-gold text-gray-900 font-bold px-6 py-2 rounded-full hover:bg-yellow-400 transition">
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Economic Empowerment Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-12" v-scroll-animation="'animate-slide-up'">Empowering Widows Economically</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="bg-gray-50 p-8 rounded-lg shadow-md" v-scroll-animation="'animate-fade-in'">
            <img src="https://img.freepik.com/free-photo/front-view-woman-with-face-mask-market_23-2148777461.jpg?ga=GA1.1.342046830.1745838061&semt=ais_hybrid&w=740" alt="Training" class="rounded-lg mb-6 w-full h-60 object-cover" />
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Skills & Microfinance</h3>
            <p class="text-gray-600 mb-4">
              From tailoring and farming to entrepreneurship workshops and microloans — our programs are designed to uplift widows into self-reliance.
            </p>
          </div>
          <div class="bg-gray-50 p-8 rounded-lg shadow-md" v-scroll-animation="'animate-fade-in'">
            <img src="https://img.freepik.com/free-photo/close-up-colleagues-shaking-hands_23-2149006876.jpg?ga=GA1.1.342046830.1745838061&semt=ais_hybrid&w=740" alt="Impact" class="rounded-lg mb-6 w-full h-60 object-cover" />
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Long-term Impact</h3>
            <p class="text-gray-600 mb-4">
              Hundreds of widows have started income-generating activities through our programs. We're committed to reaching thousands more by 2026.
            </p>
            <router-link to="/contact" class="inline-block mt-4 bg-gold text-gray-900 font-bold px-6 py-2 rounded-full hover:bg-yellow-400 transition">
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// (optional: animations, logic, or dynamic loading goes here)
</script>

<style scoped>
.bg-gold {
  background-color: #FFD700;
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
