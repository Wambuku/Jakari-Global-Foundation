<template>
  <div class="bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="relative">
      <img
        src="../assests/story1.jpeg"
        alt="Hero Image"
        class="w-full h-96 object-cover"
      />
      <div
        class="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
      >
        <div class="text-center">
          <h1 class="text-5xl font-bold text-gold">ABOUT US</h1>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="container mx-auto py-16 px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-4">
            Everyone has talent and potential but not everyone has access to
            opportunities.
          </h2>
          <p class="mb-4">
            We work to address this gap by partnering with rural schools and
            communities in East Africa to provide vulnerable and underserved
            youth with educational resources and support they need to succeed
            both in the classroom and beyond.
          </p>
          <p>
            We are locally respected because our staff comes from the
            communities we serve. With input from parents and local leaders, our
            in-country staff and local youth leaders drive program design and
            are the face of our organization.
          </p>
        </div>
        <div class="text-center">
          <img src="../assests/africa.png" alt="Africa Map" class="mx-auto" />
          <p class="mt-4">WE WORK IN RURAL EAST AFRICA</p>
        </div>
      </div>
    </section>

    <!-- What We Do Section -->
    <section class="bg-gray-800 py-16 px-4">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-8">WHAT WE DO</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <img
              src="../assests/women.jpeg"
              alt="Program 1"
              class="mx-auto mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">
              Wezesha Vijana Program (SDG #5)
            </h3>
            <p>
              Empower girls with health and hygiene knowledge, finance,
              business, and social skills.
            </p>
          </div>
          <div class="text-center">
            <img
              src="../assests/job.jpeg"
              alt="Program 2"
              class="mx-auto mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">
              Youth Livelihood Program (SDG #8)
            </h3>
            <p>
              Develop Africa’s youth through leadership, entrepreneurship, and
              job readiness training.
            </p>
          </div>
          <div class="text-center">
            <img
              src="../assests/disability.jpeg"
              alt="Program 3"
              class="mx-auto mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">
              Program for People with Disabilities (SDG #10)
            </h3>
            <p>
              Enhance accessibility and inclusivity for individuals with
              disabilities through tailored support, resources, and
              opportunities to foster independence and social integration.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="bg-gray-900 py-16 px-4">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold text-gold mb-8">OUR MISSION</h2>
        <p class="mb-8">
          Educate and empower the next generation of change agents, whose dreams
          and actions transform the future for Africa and the world.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="bg-gray-800 p-4 rounded">
            <h3 class="text-xl font-bold text-gold mb-2">LEARN</h3>
            <p>
              Youth learn life skills by developing personalized roadmaps,
              creating entrepreneurship and employability awareness,
              communication, and leadership skills.
            </p>
          </div>
          <div class="bg-gray-800 p-4 rounded">
            <h3 class="text-xl font-bold text-gold mb-2">DO</h3>
            <p>
              Hands-on experimentation turns concepts into reality and ideas
              into action, paving the way for community enterprises and
              workforce creation.
            </p>
          </div>
          <div class="bg-gray-800 p-4 rounded">
            <h3 class="text-xl font-bold text-gold mb-2">TEACH</h3>
            <p>
              Educated and empowered youth create ripples of change by
              collaborating and sharing knowledge with peers, siblings, parents,
              and younger students.
            </p>
          </div>
          <div class="bg-gray-800 p-4 rounded">
            <h3 class="text-xl font-bold text-gold mb-2">PAY-IT-FORWARD</h3>
            <p>
              Participants observe local challenges, and put solutions into
              action through community service. Sharing their skills instills
              confidence and enables young people to become active leaders in
              their communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.bg-gold {
  background-color: #d69e2e;
}
.text-gold {
  color: #d69e2e;
}
.hover\:text-gold:hover {
  color: #d69e2e;
}
</style>
