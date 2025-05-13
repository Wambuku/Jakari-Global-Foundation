<template>
  <div>

    <!-- Hero Section -->
    <section class="relative h-screen w-full overflow-hidden bg-gray-900 text-white">
    <!-- Background Video -->
    <video class="absolute inset-0 w-full h-full object-cover z-0" autoplay loop muted playsinline>
      <source src="../assests/video1.webm" type="video/webm" />
    </video>

    <!-- Gradient + Blur Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 backdrop-blur-sm z-10"></div>

    <!-- Content -->
    <div class="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
      <h1 class="text-5xl md:text-6xl font-extrabold leading-tight animate-slide-up">
        Uplift. Restore. Dignify.
      </h1>
      <p class="mt-4 text-lg md:text-2xl text-gray-200 animate-fade-in delay-200 max-w-2xl">
        Every child deserves dignity. Every life deserves hope. Join us in building a dignified future for vulnerable populations in Kenya.
      </p>

      <!-- CTA Buttons -->
      <div class="mt-8 flex flex-wrap gap-4 justify-center animate-fade-in delay-400">
        <router-link to="/contact" class="bg-gold text-black font-semibold px-8 py-4 rounded-full hover:bg-yellow-400 hover:scale-105 transition transform duration-300">
          Get Involved
        </router-link>
        <router-link to="/target-population" class="text-white underline font-medium hover:text-yellow-400 transition">
          Learn More
        </router-link>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-6 animate-bounce">
        <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </section>


    <!-- Founder Section -->
    <section class="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 py-24 px-6">
    <div class="container mx-auto grid md:grid-cols-2 items-center gap-12">

      <!-- Text Section -->
      <div class="order-2 md:order-1 animate-fade-in">
        <span class="text-gold uppercase tracking-wide text-sm font-semibold">Founder’s Story</span>
        <h2 class="text-4xl font-bold text-gray-800 mt-2 leading-snug">
          “A Vision Rooted in Dignity and Service.”
        </h2>
        <p class="text-gray-700 mt-6 leading-relaxed">
          Guided by the vision of <strong>'A Dignified Future'</strong>, <strong>Jakari Global Foundation</strong> is committed to empowering vulnerable populations in Kenya through equitable access to resources, education, and human rights.
        </p>
        <router-link to="/about" class="inline-block mt-6 bg-gold text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition">
          Read More
        </router-link>
      </div>

      <!-- Image Section -->
      <div class="order-1 md:order-2 animate-zoom-in">
        <div class="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://cdn.pixabay.com/photo/2014/09/21/11/00/businesswoman-454874_640.jpg"
            alt="Dr. Director Name"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-30 transition duration-300"></div>
        </div>
      </div>

    </div>
  </section>


    <!-- Building a Movement Section -->
    <section class="bg-white py-24 px-6">
    <div class="container mx-auto text-center max-w-4xl">
      <h2 class="text-4xl font-bold text-gray-800 mb-6">We’re Building a Movement</h2>
      <p class="text-gray-600 text-lg leading-relaxed mb-12">
        Through our programs, we empower youth and build strong communities both locally and globally.
      </p>

      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <!-- Card 1 -->
        <div class="group relative overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.01]">
          <img
            src="https://cdn.pixabay.com/photo/2020/06/15/16/53/hands-5302566_640.jpg"
            alt="Our Approach"
            class="w-full h-64 object-cover"
          />
          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6 text-center">
            <h3 class="text-2xl font-bold">Our Approach</h3>
            <p class="text-sm mt-3">
              Since 2015, we have provided mentorship and built capacity for youth across 30+ cities worldwide.
            </p>
            <router-link to="/target-population" class="mt-4 inline-block bg-gold text-black px-5 py-2 rounded-full hover:bg-yellow-400 transition">Meet the Network</router-link>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="group relative overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.01]">
          <img
            src="https://cdn.pixabay.com/photo/2013/02/21/10/21/architecture-84183_640.jpg"
            alt="Our Impact"
            class="w-full h-64 object-cover"
          />
          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6 text-center">
            <h3 class="text-2xl font-bold">Our Impact</h3>
            <p class="text-sm mt-3">
              Thousands of lives changed globally through education, mentoring, and building a resilient future.
            </p>
            <router-link to="/impact" class="mt-4 inline-block bg-gold text-black px-5 py-2 rounded-full hover:bg-yellow-400 transition">See Our Impact</router-link>
          </div>
        </div>

        <!-- Card 3 --> 
        <div class="group relative overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.01]">
          <img
            src="https://cdn.pixabay.com/photo/2016/12/19/10/16/hands-1917895_640.png"
            alt="Our Community"
            class="w-full h-64 object-cover"
          />
          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6 text-center">
            <h3 class="text-2xl font-bold">Our Community</h3>
            <p class="text-sm mt-3">
              Join a network of passionate individuals and organizations committed to making a difference.
            </p>
            <router-link to="/community" class="mt-4 inline-block bg-gold text-black px-5 py-2 rounded-full hover:bg-yellow-400 transition">Join Us</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>


    <!-- Creating Lasting Change Section -->
    <section class="bg-gray-900 text-white py-24 px-6">
    <div class="container mx-auto text-center max-w-4xl">
      <h2 class="text-4xl font-bold mb-12">Creating Lasting Change</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        <!-- Stat 1 -->
        <div class="flex flex-col items-center animate-fade-in">
          <div class="text-yellow-400 text-6xl mb-4">
            <svg class="w-14 h-14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 2H7a2 2 0 01-2-2V6a2 2 0 012-2h3.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293H17a2 2 0 012 2v10a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="text-5xl font-bold text-yellow-400">
            {{ counter1 }}
          </h3>
          <p class="mt-3 text-gray-300">Hours served by U.S. students</p>
        </div>

        <!-- Stat 2 -->
        <div class="flex flex-col items-center animate-fade-in delay-200">
          <div class="text-yellow-400 text-6xl mb-4">
            <svg class="w-14 h-14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M9 21V6h6v15M10 3h4" />
            </svg>
          </div>
          <h3 class="text-5xl font-bold text-yellow-400">
            {{ counter2 }}
          </h3>
          <p class="mt-3 text-gray-300">Schools built in 8 countries</p>
        </div>

        <!-- Stat 3 -->
        <div class="flex flex-col items-center animate-fade-in delay-400">
          <div class="text-yellow-400 text-6xl mb-4">
            <svg class="w-14 h-14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a2 2 0 00-2-2h-3v4zM2 20h5v-4H4a2 2 0 00-2 2v2zM9 20h6v-6H9v6zM9 10h6V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v6z" />
            </svg>
          </div>
          <h3 class="text-5xl font-bold text-yellow-400">
            {{ counter3 }}
          </h3>
          <p class="mt-3 text-gray-300">Students impacted globally</p>
        </div>
      </div>

      <router-link to="/impact" class="inline-block mt-12 bg-gold text-black px-8 py-4 rounded-full hover:bg-yellow-400 transition">
        Explore Our Impact
      </router-link>
    </div>
  </section>


  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const counter1 = ref(0)
const counter2 = ref(0)
const counter3 = ref(0)

function animateValue(refVar, target, duration = 1500) {
  let start = 0
  const step = Math.ceil(target / (duration / 30))

  const interval = setInterval(() => {
    start += step
    if (start >= target) {
      refVar.value = target.toLocaleString()
      clearInterval(interval)
    } else {
      refVar.value = start.toLocaleString()
    }
  }, 30)
}
onMounted(() => {
  animateValue(counter1, 2500000)
  animateValue(counter2, 2069)
  animateValue(counter3, 341633)
})
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

.animate-zoom-in {
  animation: zoomIn 1s ease-out both;
}

/* Delays */
.delay-300 {
  animation-delay: 0.3s;
}

.bg-gold {
  background-color: #d4af37;
}

/* Animations */
@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slideUp 1s ease-out both;
}

.animate-fade-in {
  animation: fadeIn 1.2s ease-out both;
}

.delay-200 {
  animation-delay: 0.2s;
}
.delay-400 {
  animation-delay: 0.4s;
}
</style>
