<template>
    <div class="bg-gray-50 min-h-screen">
      <!-- Hero -->
      <div class="relative h-[300px] bg-cover bg-center" :style="{ backgroundImage: `url('https://cdn.pixabay.com/photo/2019/06/27/19/53/doctor-4303020_640.jpg')` }">
        <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 class="text-4xl md:text-5xl text-white font-extrabold text-center px-4">Healthcare Outreach in Remote Villages</h1>
        </div>
      </div>
  
      <!-- Content -->
      <div class="max-w-4xl mx-auto py-12 px-6">
        <p class="text-gray-700 mb-6 leading-relaxed">
          Access to healthcare remains a significant challenge in remote villages. Jakari Global Foundation addresses this by organizing mobile clinics, health education sessions, and collaborations with local health workers to ensure essential services reach those most in need.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          From maternal care to vaccination drives, these initiatives have drastically improved health outcomes in underserved communities, creating a foundation for healthier and more resilient populations.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Our outreach model focuses on **community-centric solutions**, involving local health volunteers who understand the unique cultural and logistical barriers of their regions. By empowering these volunteers with training and resources, we ensure that healthcare is not only delivered but sustained at the grassroots level.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          In addition to treating immediate medical needs, we emphasize **preventive healthcare education**. Workshops on hygiene, nutrition, reproductive health, and disease prevention equip villagers with knowledge to protect their families’ well-being long-term.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          A key success factor has been our partnerships with local clinics and traditional birth attendants. This collaboration bridges modern medical practices with community trust, significantly improving maternal and child health indicators.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Over the past year alone, our healthcare outreach has reached more than <strong>2,500 individuals across 15 villages</strong>, providing critical services such as malaria testing, immunizations, prenatal checkups, and basic dental care.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Looking forward, Jakari Global aims to introduce **telemedicine solutions** for remote diagnostics and consultations, ensuring even greater access to specialized care despite geographic challenges.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Every visit to these villages is not just about healthcare—it's about restoring hope, dignity, and ensuring no one is left behind due to their location.
        </p>
  
        <!-- Related Blogs -->
        <div class="mt-12 border-t pt-8">
          <h3 class="text-xl font-bold mb-4 text-gray-800">Explore More Initiatives:</h3>
          <ul class="space-y-3">
            <li><RouterLink to="/blogs/empowering-widows" class="text-yellow-500 hover:underline">Empowering Widows Through Skill-Based Programs</RouterLink></li>
            <li><RouterLink to="/blogs/youth-capacity-building" class="text-yellow-500 hover:underline">Youth Capacity Building and Entrepreneurship</RouterLink></li>
            <li><RouterLink to="/blogs/inclusive-healthcare-access" class="text-yellow-500 hover:underline">Inclusive Healthcare Access for Persons with Disabilities</RouterLink></li>
          </ul>
        </div>
  
        <div class="mt-8">
          <RouterLink to="/blog" class="text-yellow-500 hover:underline">← Back to Blogs</RouterLink>
        </div>
      </div>
    </div>
  </template>
  