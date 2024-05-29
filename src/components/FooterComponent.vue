<template>
  <footer class="bg-gray-800 text-white py-12">
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
    >
      <div>
        <h3 class="text-lg font-semibold mb-4">CONTACT</h3>
        <p>Jakari Global Foundation,</p>
        <p>P.O. Box 2000100 Nairobi, Kenya</p>
        <p>+254 701425677</p>
        <p>youremail.com</p>
        <div class="flex space-x-4 mt-4">
          <a href="#"
            ><font-awesome-icon :icon="['fab', 'instagram']" class="h-6 w-6"
          /></a>
          <a href="#"
            ><font-awesome-icon :icon="['fab', 'twitter']" class="h-6 w-6"
          /></a>
          <a href="#"
            ><font-awesome-icon :icon="['fab', 'tiktok']" class="h-6 w-6"
          /></a>
          <a href="#"
            ><font-awesome-icon :icon="['fab', 'youtube']" class="h-6 w-6"
          /></a>
        </div>
      </div>
      <div>
        <div>
          <h3 class="text-lg font-semibold mb-4">STRATEGIC PRIORITIES</h3>
          <ul>
            <li>
              <router-link to="/target-population" class="hover:text-gold"
                >Job Creation and Entrepreneurship</router-link
              >
            </li>
            <li>
              <router-link to="/target-population" class="hover:text-gold"
                >Health and Wellbeing</router-link
              >
            </li>
            <li>
              <router-link to="/target-population" class="hover:text-gold"
                >Advocacy and Outreach Through Sports</router-link
              >
            </li>
            <li>
              <router-link to="/target-population" class="hover:text-gold"
                >Mobility and Access to Healthcare</router-link
              >
            </li>
            <li>
              <router-link to="/target-population" class="hover:text-gold"
                >Prevention, Treatment and Rehabilitation</router-link
              >
            </li>
            <li>
              <router-link to="/target-population" class="hover:text-gold"
                >Advocacy and Outreach</router-link
              >
            </li>
            <li>
              <router-link to="/target-population" class="hover:text-gold"
                >Skills Development and Capacity Building</router-link
              >
            </li>
            <li>
              <router-link to="/target-population" class="hover:text-gold"
                >Chaplaincy, Outreach and Family Values</router-link
              >
            </li>
          </ul>
        </div>
        
      </div>
      <div>
          <h3 class="text-lg font-semibold mb-4">PROGRAMMES & INTERVENTIONS</h3>
          <ul>
            <li>
              <router-link to="/youth-development" class="hover:text-gold"
                >Youth Development</router-link
              >
            </li>
            <li>
              <router-link to="/orphans" class="hover:text-gold"
                >Orphans</router-link
              >
            </li>
            <li>
              <router-link to="/widows" class="hover:text-gold"
                >Widows</router-link
              >
            </li>
          </ul>
        </div>
      <div>
        <h3 class="text-lg font-semibold mb-4">IMPORTANT LINKS</h3>
        <ul>
          <li>
            <router-link to="/" class="hover:text-gold">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="hover:text-gold">About</router-link>
          </li>
          <li>
            <router-link to="/involved" class="hover:text-gold"
              >Gallery</router-link
            >
          </li>
          <li>
            <router-link to="/impact" class="hover:text-gold"
              >Impact Stories</router-link
            >
          </li>
          <li>
            <router-link to="/initiatives" class="hover:text-gold"
              >Our Programmes and Interventions</router-link
            >
          </li>
          <li>
            <router-link to="/blogs" class="hover:text-gold">Blogs</router-link>
          </li>
          <li>
            <router-link to="/contact" class="hover:text-gold"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="container mx-auto text-center mt-8">
      <p>&copy; 2024 Jakari Global Foundation</p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
