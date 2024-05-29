<template>
    <div class="container mx-auto py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Events</h1>
      <p class="text-gray-600 mb-6">
        Our events offer stakeholders from around the world an opportunity to come together and exchange ideas and experience. Expanding the global knowledge and understanding of challenges and opportunities in positive youth development, this collaboration drives change.
      </p>
      <div class="flex justify-between items-center mb-6">
        <div class="flex items-center">
          <label for="search" class="sr-only">Search</label>
          <input id="search" type="text" placeholder="Search" class="px-4 py-2 border rounded-lg" v-model="searchQuery" />
        </div>
        <div>
          <label for="show" class="sr-only">Show</label>
          <select id="show" class="px-4 py-2 border rounded-lg" v-model="itemsToShow">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead>
            <tr class="bg-gray-800 text-white">
              <th class="w-1/3 py-2 px-4">Name</th>
              <th class="w-1/3 py-2 px-4">Dates</th>
              <th class="w-1/3 py-2 px-4">Agenda</th>
              <th class="w-1/3 py-2 px-4">Resources</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(event, index) in filteredEvents" :key="index" class="border-b">
              <td class="py-2 px-4">{{ event.name }}</td>
              <td class="py-2 px-4">{{ event.dates }}</td>
              <td class="py-2 px-4">
                <router-link :to="event.agendaLink" class="text-gold">Agenda</router-link>
              </td>
              <td class="py-2 px-4">
                <router-link :to="event.resourcesLink" class="text-gold">Resources</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const searchQuery = ref('');
  const itemsToShow = ref(10);
  const events = ref([
    {
      name: 'Youth  Development  Gathering ',
      dates: 'Nov 15, 2011',
      agendaLink: '/agenda/youthmap',
      resourcesLink: '/resources/youthmap'
    },
    {
      name: 'Construyendo una comunidad de cambio',
      dates: 'Nov 10, 2011',
      agendaLink: '/agenda/comunidad-cambio',
      resourcesLink: '/resources/comunidad-cambio'
    },
    {
      name: 'Dialogo Empleabilidad Juvenil y Prevención de Violencia',
      dates: 'Dec 08, 2011',
      agendaLink: '/agenda/empleabilidad',
      resourcesLink: '/resources/empleabilidad'
    },
    // Add more events as needed
  ]);
  
  const filteredEvents = computed(() => {
    return events.value.filter(event =>
      event.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    ).slice(0, itemsToShow.value);
  });
  </script>
  
  <style scoped>
  .text-gold {
    color: #FFD700;
  }
  
  .bg-gold {
    background-color: #FFD700;
  }
  </style>
  