<template>
    <div class="bg-gray-50 min-h-screen">
      <!-- Hero -->
      <div class="relative h-[300px] bg-cover bg-center" :style="{ backgroundImage: `url('https://cdn.pixabay.com/photo/2014/10/14/20/24/soccer-488700_640.jpg')` }">
        <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 class="text-4xl md:text-5xl text-white font-extrabold text-center px-4">The Role of Sports in Community Advocacy</h1>
        </div>
      </div>
  
      <!-- Content -->
      <div class="max-w-4xl mx-auto py-12 px-6">
        <p class="text-gray-700 mb-6 leading-relaxed">
          At Jakari Global Foundation, we recognize the transformative power of sports beyond just physical activity. Sports have become a vital platform for community advocacy, fostering inclusion, promoting social cohesion, and raising awareness on critical issues.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Through organized tournaments, sports clinics, and community matches, we bridge gaps across age, gender, and socio-economic divides. These events serve as safe spaces where youth, marginalized groups, and community leaders come together, fostering dialogue and unity.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Our **Sports for Change initiative** has successfully used football, athletics, and netball as mediums to discuss topics like gender equality, mental health, and conflict resolution. By embedding advocacy messages into sports activities, we ensure that learning is engaging, memorable, and community-owned.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          In many instances, sports have also opened pathways to leadership. We identify promising young athletes and provide them with mentorship opportunities, turning them into role models who champion social causes within their communities.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          One notable success story involves a local girls' football team that, after partnering with Jakari, became advocates for girls’ education in their region. Their matches now serve as awareness platforms, drawing crowds and local policymakers into crucial conversations.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Furthermore, sports have proven to be a powerful tool in post-conflict healing and trauma recovery. By facilitating structured team activities, we promote resilience, build self-esteem, and offer psychosocial support to individuals affected by social or economic hardships.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Moving forward, Jakari Global plans to expand this model by integrating **life skills workshops, health screenings, and civic engagement drives** into every sports event, ensuring holistic community development.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          In essence, sports are more than games—they are catalysts for change, connection, and community transformation.
        </p>
  
        <!-- Related Blogs -->
        <div class="mt-12 border-t pt-8">
          <h3 class="text-xl font-bold mb-4 text-gray-800">Related Initiatives:</h3>
          <ul class="space-y-3">
            <li><RouterLink to="/blogs/youth-capacity-building" class="text-yellow-500 hover:underline">Youth Capacity Building and Entrepreneurship</RouterLink></li>
            <li><RouterLink to="/blogs/empowering-widows" class="text-yellow-500 hover:underline">Empowering Widows Through Skill-Based Programs</RouterLink></li>
            <li><RouterLink to="/blogs/inclusive-healthcare-access" class="text-yellow-500 hover:underline">Inclusive Healthcare Access for Persons with Disabilities</RouterLink></li>
          </ul>
        </div>
  
        <div class="mt-8">
          <RouterLink to="/blog" class="text-yellow-500 hover:underline">← Back to Blogs</RouterLink>
        </div>
      </div>
    </div>
  </template>
  