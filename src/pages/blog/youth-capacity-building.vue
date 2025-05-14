<template>
    <div class="bg-gray-50 min-h-screen">
      <div class="relative h-[300px] bg-cover bg-center" :style="{ backgroundImage: `url('https://cdn.pixabay.com/photo/2019/08/08/07/31/sunset-4392298_640.jpg')` }">
        <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 class="text-4xl md:text-5xl text-white font-extrabold text-center px-4">Youth Capacity Building & Entrepreneurship</h1>
        </div>
      </div>
  
      <div class="max-w-4xl mx-auto py-12 px-6">
        <p class="text-gray-700 mb-6 leading-relaxed">
          Empowering youth through capacity building is crucial for sustainable development. Our programs focus on equipping young people with practical skills, mentorship, and access to resources that enable them to start businesses and become community leaders.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          By nurturing entrepreneurship and innovation, we aim to tackle unemployment and drive socio-economic progress. We believe that youth are not just beneficiaries but vital contributors to community resilience and economic growth.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Jakari Global Foundation’s Youth Capacity Building initiative offers tailored training in areas such as **agriculture, digital skills, artisan crafts, and financial literacy**. These sectors are carefully selected to align with local economic opportunities, ensuring relevance and sustainability.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          A key component of our program is the **Youth Entrepreneurship Incubation Hub**, where aspiring entrepreneurs receive mentorship from successful business leaders, access to startup capital through micro-financing partnerships, and continuous business development support.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          We also facilitate **internships and apprenticeships** with local enterprises, giving participants real-world experience and increasing their employability. This hands-on approach bridges the gap between theoretical knowledge and practical application.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          One of our flagship success stories is the creation of youth-led cooperatives that manage community projects such as waste recycling, urban farming, and local digital marketing services. These initiatives not only generate income but also address pressing community challenges.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          To date, our programs have empowered over <strong>1,200 young people</strong>, with more than 300 successful micro-enterprises launched as a direct result. These businesses are fostering local job creation and inspiring a new generation of change-makers.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Moving forward, Jakari Global envisions expanding this model to rural and peri-urban areas, incorporating **green entrepreneurship, climate-smart agriculture, and digital innovation labs**, ensuring that our youth are future-ready in an ever-evolving economic landscape.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Through capacity building, we are not just teaching skills; we are fostering confidence, self-reliance, and a sense of ownership in the socio-economic transformation of our communities.
        </p>
  
        <div class="mt-12 border-t pt-8">
          <h3 class="text-xl font-bold mb-4 text-gray-800">Discover More:</h3>
          <ul class="space-y-3">
            <li><RouterLink to="/blogs/sports-community-advocacy" class="text-yellow-500 hover:underline">The Role of Sports in Community Advocacy</RouterLink></li>
            <li><RouterLink to="/blogs/faith-community-partnerships" class="text-yellow-500 hover:underline">Faith-Based Community Partnerships</RouterLink></li>
            <li><RouterLink to="/blogs/empowering-widows" class="text-yellow-500 hover:underline">Empowering Widows Through Skill-Based Programs</RouterLink></li>
          </ul>
        </div>
  
        <div class="mt-8">
          <RouterLink to="/blog" class="text-yellow-500 hover:underline">← Back to Blogs</RouterLink>
        </div>
      </div>
    </div>
  </template>
  