<template>
  <div class="overflow-x-hidden">

    <!-- Hero Section -->
    <section class="relative h-[500px] bg-cover bg-center flex items-center justify-center" style="background-image: url('https://img.freepik.com/free-photo/back-view-friends-outdoors_23-2149479928.jpg?ga=GA1.1.342046830.1745838061&semt=ais_hybrid&w=740');">
      <div class="absolute inset-0 bg-black bg-opacity-70"></div>
      <div class="relative text-center px-6 text-white animate-fade-in">
        <h1 class="text-5xl font-bold leading-tight mb-4">Every Child Deserves a Future.</h1>
        <p class="text-xl max-w-2xl mx-auto leading-relaxed">
          Health. Education. Hope. We're here to make it possible.
        </p>
        <router-link to="/contact" class="inline-block mt-8 bg-gold text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition">
          Join Our Mission
        </router-link>
      </div>
    </section>

    <!-- The Crisis Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 text-center animate-slide-up">
        <h2 class="text-4xl font-bold text-gray-800 mb-8">The Crisis</h2>
        <p class="text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Over 150 million orphaned children worldwide face daily threats from disease, hunger, lack of education, and emotional neglect. Every statistic represents a real child whose future hangs in the balance.
        </p>
        <p class="mt-6 text-gray-600 max-w-4xl mx-auto leading-relaxed">
          At Orphan Life Foundation, we refuse to accept this as normal. Together, we can rebuild futures — one child at a time.
        </p>
      </div>
    </section>

    <!-- Focus Areas Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6 text-center animate-fade-in">
        <h2 class="text-4xl font-bold text-gray-800 mb-12">Our Focus Areas</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <font-awesome-icon :icon="['fas', 'book-open']" class="text-gold h-16 w-16 mb-4" />
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Education</h3>
            <p class="text-gray-600">
              We empower children through scholarships, learning materials, and building educational centers.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <font-awesome-icon :icon="['fas', 'heartbeat']" class="text-gold h-16 w-16 mb-4" />
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Health Care</h3>
            <p class="text-gray-600">
              Our health programs tackle nutrition, clean water access, HIV/AIDS treatment, and mental well-being.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <font-awesome-icon :icon="['fas', 'hands-helping']" class="text-gold h-16 w-16 mb-4" />
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Emotional Support</h3>
            <p class="text-gray-600">
              Mentorship, counseling, and safe spaces to nurture self-esteem and emotional resilience.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Current Projects Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 text-center animate-slide-up">
        <h2 class="text-4xl font-bold text-gray-800 mb-12">Current Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div class="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <img src='https://img.freepik.com/free-photo/close-up-african-kids-reading-together_23-2148860425.jpg?ga=GA1.1.342046830.1745838061&semt=ais_hybrid&w=740' alt="Operation Education Project" class="rounded-lg mb-6" />
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Operation Education Project</h3>
            <p class="text-gray-600">
              Supplying school fees, uniforms, and books across underserved areas in Africa, Philippines, and India.
            </p>
          </div>

          <div class="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <img src='https://img.freepik.com/free-photo/medic-patient-looking-human-body-analysis_482257-21552.jpg?ga=GA1.1.342046830.1745838061&semt=ais_hybrid&w=740' alt="HIV & AIDS Assistance" class="rounded-lg mb-6" />
            <h3 class="text-2xl font-bold mb-4 text-gray-800">HIV & AIDS Assistance Program</h3>
            <p class="text-gray-600">
              Providing free testing, treatment, education, and emotional support to protect vulnerable orphans.
            </p>
          </div>

        </div>

        <router-link to="/contact" class="inline-block mt-10 bg-gold text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition">
          See All Projects
        </router-link>
      </div>
    </section>

    <!-- Final Call to Action -->
    <section class="py-20 bg-gray-900 text-white text-center animate-fade-in">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-6">You Can Change a Life Today</h2>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
          Help us reach more orphans with essential care, education, and hope. Your support makes a real difference.
        </p>
        <router-link to="/donate" class="inline-block bg-gold text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition">
          Donate Now
        </router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
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
