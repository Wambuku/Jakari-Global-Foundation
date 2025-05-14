<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero -->
    <div class="relative h-[300px] bg-cover bg-center" :style="{ backgroundImage: `url('https://cdn.pixabay.com/photo/2019/10/06/10/03/team-4529717_640.jpg')` }">
      <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 class="text-4xl md:text-5xl text-white font-extrabold text-center px-4">Empowering Widows Through Skill-Based Programs</h1>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-4xl mx-auto py-12 px-6">
      <p class="text-gray-700 mb-6 leading-relaxed">
        At Jakari Global Foundation, we believe in transforming lives through practical skills and economic empowerment. Our skill-based programs are specifically designed to equip widows with vocational training, ranging from tailoring, handicrafts, to small-scale entrepreneurship.
      </p>
      <p class="text-gray-700 mb-6 leading-relaxed">
        Through partnerships with local artisans and micro-finance institutions, we offer pathways for widows to gain financial independence, build networks of support, and regain their dignity.
      </p>
      <p class="text-gray-700 mb-6 leading-relaxed">
        Success stories from our initiatives include women who have successfully started home-based businesses, formed cooperative groups, and even trained other community members, thus creating a ripple effect of positive change.
      </p>
      <p class="text-gray-700 mb-6 leading-relaxed">
        Beyond income generation, these programs serve as a platform for emotional healing and rebuilding self-esteem. Widows often face not only economic challenges but also social stigma and isolation. By fostering community-driven support groups, we ensure these women have a safe space to share their experiences, learn, and grow together.
      </p>
      <p class="text-gray-700 mb-6 leading-relaxed">
        The foundation also conducts regular workshops focusing on financial literacy, digital skills, and personal development. These sessions help widows understand market demands, manage their earnings, and explore modern channels of commerce like e-commerce and social selling.
      </p>
      <p class="text-gray-700 mb-6 leading-relaxed">
        To date, over <strong>500 widows have graduated</strong> from our programs, with more than 60% of them actively running small businesses or leading local cooperatives. This initiative not only uplifts individuals but also stimulates local economies, making communities more self-reliant.
      </p>
      <p class="text-gray-700 mb-6 leading-relaxed">
        Our vision is to scale this model across more regions, adapting the training to local contexts while ensuring sustainability and long-term impact. We believe that when you empower a widow, you empower an entire community.
      </p>

      <!-- Related Blogs or CTA -->
      <div class="mt-12 border-t pt-8">
        <h3 class="text-xl font-bold mb-4 text-gray-800">More from Jakari:</h3>
        <ul class="space-y-3">
          <li><RouterLink to="/blogs/healthcare-outreach" class="text-yellow-500 hover:underline">Healthcare Outreach in Remote Villages</RouterLink></li>
          <li><RouterLink to="/blogs/youth-capacity-building" class="text-yellow-500 hover:underline">Youth Capacity Building and Entrepreneurship</RouterLink></li>
          <li><RouterLink to="/blogs/sports-community-advocacy" class="text-yellow-500 hover:underline">The Role of Sports in Community Advocacy</RouterLink></li>
        </ul>
      </div>
      <div class="mt-8">
          <RouterLink to="/blog" class="text-yellow-500 hover:underline">← Back to Blogs</RouterLink>
        </div>
    </div>
  </div>
</template>
