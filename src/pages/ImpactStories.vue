<template>
  <div class="container mx-auto py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="(story, index) in stories"
        :key="index"
        class="relative group"
      >
        <img
          :src="getImagePath(story.image)"
          :alt="story.title"
          class="w-full h-64 object-cover"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div class="text-center text-white p-4 bg-opacity-70 rounded-lg">
            <h3 class="text-2xl font-bold">{{ story.title }}</h3>
            <p class="mt-4">{{ story.description }}</p>
            <button
              @click="showDetail(index)"
              class="mt-4 bg-gray-800 text-gold px-4 py-2 rounded"
            >
              More
            </button>
          </div>
        </div>
        <div
          v-if="detailIndex === index"
          class="absolute inset-0 bg-gold p-8 rounded-lg shadow-lg flex flex-col"
        >
          <button
            @click="closeDetail"
            class="self-end bg-gray-800 text-white p-2 rounded-full"
          >
            &times;
          </button>
          <h3 class="text-2xl font-bold text-gray-800">{{ story.title }}</h3>
          <p class="mt-4 text-gray-800 text-wrap">{{ story.detail }}</p>
        </div>
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
    description:
      "Levearing the latest in data analytics and business intelligence tools to measure and inform impact in cities..",
    detail:
      "A project exploring how the non-profit sector can use and understand data to make cities look more like playgrounds in the same way that other private sector companies use information to propel their business.",
  },
  {
    image: "home2.jpeg",
    title: "Charity To Change",
    description:
      "Engaging churches and church networks in reimagining how congregations can invest in long-term community change.",
    detail:
      "The faith community is a potential force for massive social change – yet it is often fragmented, operating in silos, and desperately needing to align and integrate its efforts with the wider community. ",
  },
  {
    image: "impact2.jpeg",
    title: "PARTNER IN CHANGE",
    description: "Enabling personal, social, and economic upward mobility.",
    detail:
      "Partners in Change pairs trained volunteer coaches with adults who are pursuing tangible goals for moving beyond difficult financial constraints or living situations.",
  },
  {
    image: "impact3.jpeg",
    title: "Propel Leadership Prosect",
    description:
      "Leveraging our diverse network to create a model for increasing the number of people of color in leadership positions in the non-profit sector. ",
    detail:
      "The project will address the underrepresentation of executives of color in the nonprofit sector by building a learning cohort of faith-based nonprofit organizations...",
  },
  {
    image: "impact4.jpeg",
    title: "Hands And Feet United",
    description: "Mobilizing churches to work together across communities",
    detail:
      "The Hands and Feet United platform seeks to partner urban, suburban and rural churches to address issues while building a relational network.",
  },
  {
    image: "impact5.jpeg",
    title: "Program Replication",
    description:
      "Operationalizing the replication of best in class programs in order to  inform our collective knowledge of how fundamental social problems can be solved.",
    detail:
      "Each of the 188 initiatives within the LF network grew out of a specific context with unique relationships, leaders, partners, funding, training, recipients, and other factors.",
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
.bg-gold {
  background-color: #ffd700;
}
</style>
