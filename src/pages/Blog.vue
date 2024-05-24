<template>
    <div>
      <!-- Hero Section -->
      <div class="relative bg-gray-100 h-96 flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gold">A DIGNIFIED FUTURE: WHAT IT MEANS</h1>
        </div>
      </div>
  
      <!-- Search Section -->
      <div class="py-16 px-4 md:px-8 lg:px-16">
        <div class="container mx-auto text-center">
          <h2 class="text-2xl font-bold mb-8">Search Results For:</h2>
          <input
            type="text"
            v-model="searchQuery"
            @input="filterResults"
            placeholder="Search ..."
            class="border border-gray-300 px-4 py-2 rounded-md"
          />
          <button @click="filterResults" class="bg-gold text-black px-6 py-2 rounded-md hover:bg-gray-800 hover:text-white ml-2">SEARCH</button>
          <div v-if="searchQuery" class="mt-8">
            <p v-if="filteredResults.length === 0">Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>
            <ul v-else>
              <li v-for="result in filteredResults" :key="result" class="mb-2">{{ result }}</li>
            </ul>
          </div>
          <div v-else class="mt-8">
            <p>It seems we can't find what you're looking for. Perhaps searching can help.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const searchQuery = ref('');
  const allResults = ref([
    'Our Mission',
    'Our Vision',
    'Job Creation and Entrepreneurship',
    'Health and Wellbeing',
    'Advocacy and Outreach Through Sports',
    'Mobility and Access to Healthcare',
    'Prevention, Treatment and Rehabilitation',
    'Advocacy and Outreach',
    'Skills Development and Capacity Building',
    'Chaplaincy, Outreach and Family Values',
    'Clergy/Clerics',
    'Orphans',
    'Persons With Disabilities',
    'The Boy Child',
    'Widows',
    'Home',
    'About',
    'Get Involved',
    'Impact Stories',
    'Our Programmes and Interventions',
    'Blogs',
    'Contact'
  ]);
  
  const filteredResults = ref([]);
  
  const filterResults = () => {
    if (searchQuery.value.toLowerCase() === 'what jakari global foundation entails') {
      router.push('/jgf');
    } else if (searchQuery.value) {
      filteredResults.value = allResults.value.filter(result =>
        result.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    } else {
      filteredResults.value = [];
    }
  };
  </script>
  
  <style scoped>
  .bg-gold {
    background-color: #FFD700;
  }
  </style>
  