<template>
  <div class="container mx-auto py-16 px-6 text-white">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(story, index) in stories"
        :key="index"
        class="relative rounded-xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300"
      >
        <img
          :src="getImagePath(story.image)"
          :alt="story.title"
          class="w-full h-64 object-cover"
        />

        <!-- Glass Overlay -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-end p-6 transition-opacity group-hover:opacity-100">
          <div class="w-full">
            <h3 class="text-xl font-bold mb-2">{{ story.title }}</h3>
            <p class="text-sm text-gray-300">{{ story.description }}</p>
            <button
              @click="showDetail(index)"
              class="mt-4 inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-full shadow hover:scale-105 transition"
            >
              Read More
            </button>
          </div>
        </div>

        <!-- Detail Slide Over -->
        <transition name="slide-fade">
          <div
            v-if="detailIndex === index"
            class="absolute inset-0 bg-white text-gray-900 p-8 rounded-xl shadow-2xl flex flex-col z-20 animate-slide-up"
          >
            <button
              @click="closeDetail"
              class="self-end bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition"
            >
              &times;
            </button>
            <h3 class="text-2xl font-bold mt-4">{{ story.title }}</h3>
            <p class="mt-4 text-gray-700 leading-relaxed">{{ story.detail }}</p>
          </div>
        </transition>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";

const stories = ref([
  {
    image: "impact1.jpeg",
    title: "Data To Drive Impact",
    description: "Leveraging data analytics to inform community change.",
    detail: "A project exploring how the non-profit sector can use data to transform urban spaces, much like how businesses use data to propel their strategies.",
  },
  {
    image: "home2.jpeg",
    title: "Charity To Change",
    description: "Empowering churches to invest in community growth.",
    detail: "The faith community holds massive potential for social change but needs cohesive strategies to align efforts with wider societal needs.",
  },
  {
    image: "impact2.jpeg",
    title: "Partner In Change",
    description: "Facilitating upward social mobility.",
    detail: "Partners in Change pairs volunteer coaches with individuals seeking to overcome financial and social barriers through guided mentorship.",
  },
  {
    image: "impact3.jpeg",
    title: "Propel Leadership Project",
    description: "Increasing diversity in non-profit leadership.",
    detail: "A model initiative aimed at addressing the lack of executives of color by building learning cohorts within faith-based organizations.",
  },
  {
    image: "impact4.jpeg",
    title: "Hands And Feet United",
    description: "Connecting churches across communities.",
    detail: "An initiative to foster collaborations between urban, suburban, and rural churches to address local issues through joint efforts.",
  },
  {
    image: "impact5.jpeg",
    title: "Program Replication",
    description: "Scaling best-in-class programs for wider impact.",
    detail: "Documenting and replicating successful programs across different contexts to tackle fundamental social challenges more effectively.",
  },
]);

const detailIndex = ref(null);

const showDetail = (index) => {
  detailIndex.value = index;
};

const closeDetail = () => {
  detailIndex.value = null;
};

const getImagePath = (imageName) => {
  return new URL(`../assests/${imageName}`, import.meta.url).href;
};
</script>

<style scoped>
@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-up {
  animation: slideUp 0.5s ease-out forwards;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
