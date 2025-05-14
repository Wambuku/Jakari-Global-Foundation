<template>
  <div class="bg-gray-900 min-h-screen pt-28 pb-16 px-4 md:px-12 text-white">

    <!-- Section Title -->
    <div class="text-center mb-12">
      <h2 class="text-4xl font-extrabold text-white">From Our Gallery</h2>
      <p class="mt-3 text-gray-400 max-w-2xl mx-auto text-lg">
        A visual journey of Jakari Global Foundation's impact — from community initiatives to empowering lives.
      </p>
    </div>

    <!-- Filters (Functional Tabs) -->
    <div class="flex flex-wrap justify-center gap-4 mb-10">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="activeCategory = cat"
        :class="[ 
          'px-4 py-2 rounded-full border transition',
          activeCategory === cat ? 'border-white text-white' : 'border-gray-600 text-gray-400 hover:text-white hover:border-white'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Gallery Masonry Layout -->
    <div class="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
      <div
        v-for="image in filteredImages"
        :key="image.id"
        class="overflow-hidden rounded-xl shadow-lg relative group cursor-pointer break-inside-avoid"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <!-- Hover Overlay -->
        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <h3 class="text-white text-sm font-semibold">{{ image.alt }}</h3>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Example Pixabay URLs (free use images)
const images = ref([
  { id: 1, src: 'https://cdn.pixabay.com/photo/2019/06/27/19/53/doctor-4303020_640.jpg', alt: 'Health Outreach', category: 'Health' },
  { id: 2, src: 'https://cdn.pixabay.com/photo/2014/08/26/21/54/dentist-428646_640.jpg', alt: 'Mobile Clinic Initiative', category: 'Health' },
  { id: 3, src: 'https://cdn.pixabay.com/photo/2020/11/12/16/58/worker-5736096_640.jpg', alt: 'Empowerment Workshop', category: 'Empowerment' },
  { id: 4, src: 'https://cdn.pixabay.com/photo/2020/09/14/16/50/broom-5571461_640.jpg', alt: 'Community Clean-Up', category: 'Community' },
  { id: 5, src: 'https://cdn.pixabay.com/photo/2019/10/06/10/03/team-4529717_640.jpg', alt: 'Widows Support Group', category: 'Community' },
  { id: 6, src: 'https://cdn.pixabay.com/photo/2020/02/17/11/58/africa-4856283_640.jpg', alt: 'Vocational Training', category: 'Empowerment' },
  { id: 7, src: 'https://cdn.pixabay.com/photo/2020/03/22/21/33/apple-4958609_640.jpg', alt: 'Scholarship Program', category: 'Empowerment' },
  { id: 8, src: 'https://cdn.pixabay.com/photo/2013/08/04/19/33/monkey-169818_640.jpg', alt: 'Orphanage Visit', category: 'Community' },
  { id: 9, src: 'https://cdn.pixabay.com/photo/2017/12/21/15/56/kayh-3032086_640.jpg', alt: 'Community Story', category: 'Community' },
  { id: 10, src: 'https://cdn.pixabay.com/photo/2021/11/06/00/38/volunteer-service-6772198_640.jpg', alt: 'Mentorship Program', category: 'Empowerment' },
  { id: 11, src: 'https://cdn.pixabay.com/photo/2019/04/17/11/29/book-4133988_640.jpg', alt: 'Impact Story', category: 'Community' },
  { id: 12, src: 'https://cdn.pixabay.com/photo/2016/10/26/16/15/lamp-1771817_640.jpg', alt: 'Mentorship Impact', category: 'Empowerment' },
]);

const categories = ['All', 'Health', 'Empowerment', 'Community'];
const activeCategory = ref('All');

const filteredImages = computed(() => {
  if (activeCategory.value === 'All') return images.value;
  return images.value.filter(img => img.category === activeCategory.value);
});
</script>
