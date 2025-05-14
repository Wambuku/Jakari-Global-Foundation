<template>
  <div class=" min-h-screen">

    <!-- Compact Hero Section -->
    <div class="relative h-[250px] flex items-center justify-center">
      <h1 class="text-3xl md:text-4xl font-extrabold text-gradient-gold text-center">
        Latest Blogs & Updates
      </h1>
    </div>

    <!-- Sticky Search Bar -->
    <div class="sticky top-0 z-10 shadow-md py-4">
      <div class="max-w-5xl mx-auto px-4 flex gap-4">
        <input
          v-model="searchQuery"
          @input="filterBlogs"
          type="text"
          placeholder="Search blogs..."
          class="w-full border border-gray-300 rounded-full py-3 px-5 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          @click="filterBlogs"
          class="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow hover:scale-105 transition"
        >
          Search
        </button>
      </div>
    </div>

    <!-- Blogs Grid Section -->
    <div class="  py-12 px-4">
      <div v-if="filteredBlogs.length === 0" class="text-center text-gray-500">
        <p>No blogs found. Try different keywords.</p>
      </div>
      <div v-else class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
  <div
    v-for="blog in filteredBlogs"
    :key="blog.id"
    @click="goToBlog(blog.slug)"
    class="group bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer overflow-hidden"
  >
    <!-- Image with gradient accent -->
    <div class="relative overflow-hidden rounded-t-2xl">
      <img :src="blog.image" :alt="blog.title" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
    </div>

    <!-- Content Area -->
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-3 text-gray-800 group-hover:text-yellow-600 transition">{{ blog.title }}</h3>
      <p class="text-sm text-gray-600 mb-6 line-clamp-3">{{ blog.excerpt }}</p>
      <div class="flex items-center justify-between">
        <span class="text-yellow-500 font-semibold group-hover:text-yellow-600 transition">Read More →</span>
      </div>
    </div>
  </div>
</div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const searchQuery = ref('');

const blogs = ref([
  { id: 1, title: 'Empowering Widows Through Skill-Based Programs', slug: 'empowering-widows', image: 'https://cdn.pixabay.com/photo/2019/10/06/10/03/team-4529717_640.jpg', excerpt: 'Discover how skill-based initiatives are changing lives for widows in underprivileged communities.' },
  { id: 2, title: 'Healthcare Outreach in Remote Villages', slug: 'healthcare-outreach', image: 'https://cdn.pixabay.com/photo/2019/06/27/19/53/doctor-4303020_640.jpg', excerpt: 'Bridging the healthcare gap by bringing services closer to marginalized populations.' },
  { id: 3, title: 'The Role of Sports in Community Advocacy', slug: 'sports-community-advocacy', image: 'https://cdn.pixabay.com/photo/2014/10/14/20/24/soccer-488700_640.jpg', excerpt: 'Using sports as a platform to unite communities and promote positive social change.' },
  { id: 4, title: 'Youth Capacity Building and Entrepreneurship', slug: 'youth-capacity-building', image: 'https://cdn.pixabay.com/photo/2019/08/08/07/31/sunset-4392298_640.jpg', excerpt: 'Equipping the next generation with skills and opportunities for economic independence.' },
  { id: 5, title: 'Faith-Based Community Partnerships', slug: 'faith-community-partnerships', image: 'https://cdn.pixabay.com/photo/2015/05/04/19/50/holding-hands-752878_640.jpg', excerpt: 'Collaborating with faith organizations to foster long-term community growth and resilience.' },
  { id: 6, title: 'Inclusive Healthcare Access for Persons with Disabilities', slug: 'inclusive-healthcare-access', image: 'https://cdn.pixabay.com/photo/2016/10/18/08/52/blood-pressure-monitor-1749577_640.jpg', excerpt: 'Innovative approaches to ensuring accessible healthcare services for everyone.' },
]);

const filteredBlogs = computed(() => {
  if (!searchQuery.value) return blogs.value;
  return blogs.value.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const filterBlogs = () => {
  // Computed does filtering automatically
};

const goToBlog = (slug) => {
  router.push(`/blogs/${slug}`);
};
</script>

<style scoped>
.text-gradient-gold {
  background: linear-gradient(to right, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
