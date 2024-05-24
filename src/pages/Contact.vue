<template>
  <div>
    <!-- Hero Section -->
    <div
      class="relative bg-cover bg-center h-96"
      :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div
        class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white"
      >
        <h2 class="text-2xl md:text-4xl font-bold">GET IN TOUCH</h2>
        <h1 class="text-4xl md:text-6xl font-bold mt-2">
          CONTACT <span class="text-gold">US</span>
        </h1>
      </div>
    </div>

    <!-- Contact Information and Form Section -->
    <div class="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Information -->
        <div>
          <h3 class="text-2xl font-bold mb-4 text-gray-800">GET IN TOUCH</h3>
          <p>Jakari Global Foundation,</p>
          <p>P.O. Box 2000100 Nairobi, Kenya</p>
          <p>+254 701425677</p>
          <p>youremail.com</p>
        </div>

        <!-- Contact Form -->
        <div>
          <h3 class="text-2xl font-bold mb-4 text-gray-800">MESSAGE US</h3>
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="name" class="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div class="mb-4">
              <label for="subject" class="block text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                class="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-gray-700">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                class="w-full px-4 py-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-gold text-black px-6 py-2 rounded-md hover:bg-yellow-400"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import heroImage from "../assests/contact.jpeg"; // Replace your image

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  // Handle form submission
  console.log("Form submitted:", form.value);
};
</script>

<style scoped>
.bg-gold {
  background-color: #ffd700;
}
</style>
