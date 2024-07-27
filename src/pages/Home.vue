<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gray-900 text-white">
      <video
        class="w-full h-full object-cover absolute inset-0"
        autoplay
        loop
        muted
      >
        <source
          src="../assests/video1.webm"
          type="video/webm"
        />
      </video>
      <div class="relative container mx-auto py-32 text-center">
        <h1 class="text-4xl font-bold">Uplift. Restore. Dignify.</h1>
        <h2 class="text-2xl mt-4">
          A Dignified Future for Vulnerable Populations in Kenya
        </h2>
        <div class="mt-6">
          <router-link
            to="/contact"
            class="bg-gold text-black px-6 py-3 rounded hover:bg-yellow-400"
            >Get Involved</router-link
          >
          <router-link
            to="/target-population"
            class="ml-4 text-white underline hover:text-yellow-400"
            >Learn More</router-link
          >
        </div>
      </div>
    </section>

    <!-- Founder Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        <div class="md:w-1/2">
          <img
            src="../assests/director.png"
            alt="Dr. Director name"
            class="w-full rounded-lg shadow-lg"
          />
        </div>
        <div class="md:w-1/2 md:pl-16 mt-8 md:mt-0">
          <h2 class="text-3xl font-bold">
            Dr.Directors name and his callings
          </h2>
          <p class="mt-4 text-gray-700">
            The Jakari Global Foundation is guided by the vision of ‘A
            Dignified Future ’ for vulnerable populations. The foundation is
            committed to creating an equitable future and restoring
            socio-economic participation to the Boy Child, Widows, Orphans, and
            Persons with Disabilities in Kenya, through equal access to
            resources, skills, capabilities, and human and civil rights.
          </p>
          <router-link
            to="/about"
            class="inline-block mt-4 bg-gold text-black px-4 py-2 rounded hover:bg-yellow-400"
            >Read More</router-link
          >
        </div>
      </div>
    </section>

    <!-- Building a Movement Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold">We’re Building a Movement</h2>
        <p class="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our U.S. Service Learning Program gives students in underperforming
          urban high schools the opportunity to impact their local communities
          in powerful ways. And through our Global School Construction Program,
          our students prove that service and education can build a stronger
          community and a better future.
        </p>
         <!-- First Hover Effect -->
         <div class="relative group mt-8 max-w-md mx-auto">
          <img
            src="../assests/home1.jpeg"
            alt="Movement"
            class="w-full object-cover transition-all duration-300 group-hover:opacity-0"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="text-center text-white bg-black bg-opacity-50 p-4 rounded-lg">
              <h3 class="text-2xl font-bold">Our Approach</h3>
              <p class="mt-4 max-w-lg mx-auto">
                Since 2015, our network has provided 17,000+ youth with caring,
                consistent mentors in more than 30 cities worldwide. We invest
                in the leaders of these programs by providing capacity building
                resources, evidence-based training for their mentors, a personal
                coach, and a community of practice that supports one another and
                shares innovative ideas.
              </p>
              <router-link
                to="/target-population"
                class="inline-block mt-4 bg-gold text-black px-4 py-2 rounded hover:bg-yellow-400"
                >Meet The Mentoring Network</router-link
              >
            </div>
          </div>
        </div>

        <!-- Second Hover Effect -->
        <div class="relative group mt-8 max-w-md mx-auto">
          <img
            src="../assests/home2.jpeg"
            alt="Movement"
            class="w-full object-cover transition-all duration-300 group-hover:opacity-0"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="text-center text-white bg-black bg-opacity-50 p-4 rounded-lg">
              <h3 class="text-2xl font-bold">Our Impact</h3>
              <p class="mt-4 max-w-lg mx-auto">
                Since 2015, our network has provided 17,000+ youth with caring,
                consistent mentors in more than 30 cities worldwide. We invest
                in the leaders of these programs by providing capacity building
                resources, evidence-based training for their mentors, a personal
                coach, and a community of practice that supports one another and
                shares innovative ideas.
              </p>
              <router-link
                to="/impact"
                class="inline-block mt-4 bg-gold text-black px-4 py-2 rounded hover:bg-yellow-400"
                >See The Impact we made</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Creating Lasting Change Section -->
    <section class="bg-gray-900 text-white py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold">Creating Lasting Change</h2>
        <div class="flex flex-col md:flex-row justify-center mt-8">
          <div class="md:w-1/3">
            <h3 class="text-5xl font-bold">2.5 million</h3>
            <p class="mt-2">Hours served by U.S. students</p>
          </div>
          <div class="md:w-1/3 mt-8 md:mt-0">
            <h3 class="text-5xl font-bold">2,069</h3>
            <p class="mt-2">Schools built in 8 developing countries</p>
          </div>
          <div class="md:w-1/3 mt-8 md:mt-0">
            <h3 class="text-5xl font-bold">341,633</h3>
            <p class="mt-2">Students attending buildOn schools globally</p>
          </div>
        </div>
        <router-link
          to="/impact"
          class="inline-block mt-8 bg-gold text-black px-4 py-2 rounded hover:bg-yellow-400"
          >Explore Our Impact</router-link
        >
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
.bg-gold {
  background-color: #d4af37;
}
</style>
