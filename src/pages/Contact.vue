<template>
  <div class="bg-white min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-[350px] bg-cover bg-center" :style="{ backgroundImage: `url(${heroImage})` }">
      <div class="absolute inset-0 bg-gradient-to-br from-black/70 to-black/40 flex items-center justify-center">
        <div class="text-center text-white space-y-3">
          <h2 class="text-sm md:text-lg uppercase tracking-widest font-medium">We'd Love to Hear from You</h2>
          <h1 class="text-4xl md:text-5xl font-extrabold">Contact <span class="text-yellow-400">Jakar</span></h1>
        </div>
      </div>
    </section>

    <!-- Main Contact Section -->
    <section class="max-w-7xl mx-auto py-20 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Contact Info Card -->
      <div class="space-y-6 bg-gray-50 rounded-2xl shadow-sm p-8">
        <h3 class="text-2xl font-bold text-gray-800">Our Office</h3>
        <div class="text-gray-600 space-y-4">
          <p><strong>Address:</strong><br>Jakar Global Foundation,<br>P.O. Box 2000100,<br>Nairobi, Kenya</p>
          <p><strong>Phone:</strong><br>+254 700 000 000</p>
          <p><strong>Email:</strong><br>contact@jakarglobal.org</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-2">Connect With Us</h4>
          <div class="flex space-x-4 mb-6">
          <a href="#" aria-label="Instagram" class="hover:text-yellow-400 transition">
            <font-awesome-icon :icon="['fab', 'instagram']" class="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" class="hover:text-yellow-400 transition">
            <font-awesome-icon :icon="['fab', 'twitter']" class="h-6 w-6" />
          </a>
          <a href="#" aria-label="TikTok" class="hover:text-yellow-400 transition">
            <font-awesome-icon :icon="['fab', 'tiktok']" class="h-6 w-6" />
          </a>
          <a href="#" aria-label="YouTube" class="hover:text-yellow-400 transition">
            <font-awesome-icon :icon="['fab', 'youtube']" class="h-6 w-6" />
          </a>
        </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="lg:col-span-2 bg-white rounded-2xl shadow-sm p-10 space-y-8">
        <h3 class="text-3xl font-extrabold text-gray-800">Let's Talk</h3>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm text-gray-600 mb-1">Name</label>
              <input v-model="form.name" type="text" class="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400" required />
            </div>
            <div>
              <label class="block text-sm text-gray-600 mb-1">Email</label>
              <input v-model="form.email" type="email" class="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400" required />
            </div>
          </div>
          <div>
            <label class="block text-sm text-gray-600 mb-1">Subject</label>
            <input v-model="form.subject" type="text" class="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div>
            <label class="block text-sm text-gray-600 mb-1">Message</label>
            <textarea v-model="form.message" rows="5" class="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400" required></textarea>
          </div>
          <button type="submit" class="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold py-3 rounded-xl shadow-lg transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import heroImage from "../assests/contact.jpeg";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  console.log("Form submitted:", form.value);
  alert("Thank you for your message! We'll respond soon.");
};
</script>

<style scoped>
.text-yellow-400 {
  color: #FFD700;
}
</style>
