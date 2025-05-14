<template>
    <div class="bg-gray-50 min-h-screen">
      <div class="relative h-[300px] bg-cover bg-center" :style="{ backgroundImage: `url('https://cdn.pixabay.com/photo/2015/05/04/19/50/holding-hands-752878_640.jpg')` }">
        <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 class="text-4xl md:text-5xl text-white font-extrabold text-center px-4">Faith-Based Community Partnerships</h1>
        </div>
      </div>
  
      <div class="max-w-4xl mx-auto py-12 px-6">
        <p class="text-gray-700 mb-6 leading-relaxed">
          Faith communities play a vital role in societal transformation. Jakari Global collaborates with religious institutions to align their charitable initiatives with broader community development goals.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Through partnerships, we foster unity, address social challenges, and mobilize resources to create lasting impact. These partnerships amplify grassroots efforts by combining spiritual guidance with tangible community services.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Our **Faith & Action Network** brings together churches, mosques, temples, and interfaith groups to jointly tackle issues such as poverty alleviation, youth empowerment, healthcare access, and disaster response. This collaborative model strengthens social bonds while respecting the diverse beliefs of community members.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          One notable example is the **Community Hope Initiative**, where local churches collaborated with Jakari to set up food banks, organize counseling services, and facilitate vocational training for vulnerable groups including widows and orphans. These holistic interventions have supported over <strong>3,000 individuals</strong> in rebuilding their lives with dignity.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Beyond immediate relief, our faith-based partnerships focus on **capacity building for religious leaders**. We conduct training on community leadership, project management, and advocacy skills, equipping leaders to drive sustainable development within their congregations.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Additionally, our **Interfaith Dialogue Forums** create safe spaces for communities to engage in constructive conversations, fostering mutual understanding and collective problem-solving regardless of religious affiliations.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Looking ahead, Jakari Global aims to expand these partnerships to rural and underserved regions, integrating faith-based perspectives into environmental conservation, gender equality advocacy, and mental health awareness campaigns.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          By uniting spiritual values with practical action, we are building resilient communities grounded in compassion, inclusivity, and shared responsibility.
        </p>
  
        <div class="mt-12 border-t pt-8">
          <h3 class="text-xl font-bold mb-4 text-gray-800">Explore More Initiatives:</h3>
          <ul class="space-y-3">
            <li><RouterLink to="/blogs/empowering-widows" class="text-yellow-500 hover:underline">Empowering Widows Through Skill-Based Programs</RouterLink></li>
            <li><RouterLink to="/blogs/healthcare-outreach" class="text-yellow-500 hover:underline">Healthcare Outreach in Remote Villages</RouterLink></li>
            <li><RouterLink to="/blogs/inclusive-healthcare-access" class="text-yellow-500 hover:underline">Inclusive Healthcare Access for Persons with Disabilities</RouterLink></li>
          </ul>
        </div>
  
        <div class="mt-8">
          <RouterLink to="/blog" class="text-yellow-500 hover:underline">← Back to Blogs</RouterLink>
        </div>
      </div>
    </div>
  </template>
  