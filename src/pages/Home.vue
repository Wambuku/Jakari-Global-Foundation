<template>
  <div>

    <!-- Hero Section -->
    <section class="relative bg-gray-900 text-white overflow-hidden animate-fade-in">
      <video class="w-full h-full object-cover absolute inset-0 opacity-40" autoplay loop muted playsinline>
        <source src="../assests/video1.webm" type="video/webm" />
      </video>
      <div class="relative container mx-auto py-40 text-center">
        <h1 class="text-5xl md:text-6xl font-extrabold leading-tight animate-slide-up">Uplift. Restore. Dignify.</h1>
        <h2 class="text-2xl md:text-3xl mt-6 text-gray-200 animate-slide-up delay-200">A Dignified Future for Vulnerable Populations in Kenya</h2>
        <div class="mt-8 flex flex-col md:flex-row justify-center gap-4 animate-fade-in delay-300">
          <router-link to="/contact" class="bg-gold text-black font-semibold px-8 py-4 rounded-full hover:bg-yellow-400 hover:scale-105 transition transform duration-300">
            Get Involved
          </router-link>
          <router-link to="/target-population" class="text-white underline font-medium hover:text-yellow-400 hover:scale-105 transition transform duration-300">
            Learn More
          </router-link>
        </div>
      </div>
    </section>

    <!-- Founder Section -->
    <section class="bg-gray-100 py-20 animate-fade-in">
      <div class="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2">
          <img src="https://cdn.pixabay.com/photo/2014/09/21/11/00/businesswoman-454874_640.jpg" alt="Dr. Director Name" class="w-full rounded-lg shadow-lg animate-zoom-in" />
        </div>
        <div class="md:w-1/2">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Dr. Director Name and His Calling</h2>
          <p class="text-gray-700 leading-relaxed">
            Guided by the vision of 'A Dignified Future', Jakari Global Foundation is committed to empowering vulnerable populations in Kenya through equitable access to resources, education, and human rights.
          </p>
          <router-link to="/about" class="inline-block mt-6 bg-gold text-black px-6 py-3 rounded-full hover:bg-yellow-400 hover:scale-105 transition transform duration-300">
            Read More
          </router-link>
        </div>
      </div>
    </section>

    <!-- Building a Movement Section -->
    <section class="bg-white py-20 animate-fade-in">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold text-gray-800 animate-slide-up">We’re Building a Movement</h2>
        <p class="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
          Through our programs, we empower youth and build strong communities both locally and globally.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <!-- Card 1 -->
          <div class="relative group overflow-hidden rounded-lg shadow-lg animate-zoom-in">
            <img src="https://cdn.pixabay.com/photo/2020/06/15/16/53/hands-5302566_640.jpg" alt="Our Approach" class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
              <h3 class="text-2xl font-bold text-white">Our Approach</h3>
              <p class="mt-4 text-white leading-relaxed text-sm">
                Since 2015, we have provided mentorship and built capacity for youth across 30+ cities worldwide.
              </p>
              <router-link to="/target-population" class="inline-block mt-4 bg-gold text-black px-6 py-2 rounded-full hover:bg-yellow-400 hover:scale-105 transition transform duration-300">
                Meet the Network
              </router-link>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="relative group overflow-hidden rounded-lg shadow-lg animate-zoom-in delay-200">
            <img src="https://cdn.pixabay.com/photo/2013/02/21/10/21/architecture-84183_640.jpg" alt="Our Impact" class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
              <h3 class="text-2xl font-bold text-white">Our Impact</h3>
              <p class="mt-4 text-white leading-relaxed text-sm">
                Thousands of lives changed globally through education, mentoring, and building a resilient future.
              </p>
              <router-link to="/impact" class="inline-block mt-4 bg-gold text-black px-6 py-2 rounded-full hover:bg-yellow-400 hover:scale-105 transition transform duration-300">
                See Our Impact
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Creating Lasting Change Section -->
    <section class="bg-gray-900 text-white py-20 animate-fade-in">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-12 animate-slide-up">Creating Lasting Change</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="animate-zoom-in">
            <h3 class="text-5xl font-bold text-yellow-400">2.5M+</h3>
            <p class="mt-4 text-gray-300">Hours served by U.S. students</p>
          </div>
          <div class="animate-zoom-in delay-200">
            <h3 class="text-5xl font-bold text-yellow-400">2,069</h3>
            <p class="mt-4 text-gray-300">Schools built in 8 countries</p>
          </div>
          <div class="animate-zoom-in delay-400">
            <h3 class="text-5xl font-bold text-yellow-400">341,633</h3>
            <p class="mt-4 text-gray-300">Students impacted globally</p>
          </div>
        </div>
        <router-link to="/impact" class="inline-block mt-12 bg-gold text-black px-8 py-4 rounded-full hover:bg-yellow-400 hover:scale-105 transition transform duration-300">
          Explore Our Impact
        </router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
// Nothing else needed
</script>

<style scoped>
.bg-gold {
  background-color: #d4af37;
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

@keyframes zoomIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* Classes */
.animate-fade-in {
  animation: fadeIn 1s ease-out both;
}

.animate-slide-up {
  animation: slideUp 1s ease-out both;
}

.animate-zoom-in {
  animation: zoomIn 1s ease-out both;
}

/* Delays */
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
.delay-400 {
  animation-delay: 0.4s;
}
</style>
