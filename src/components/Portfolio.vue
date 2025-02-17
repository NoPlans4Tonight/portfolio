<template>
  <div class="container">
    <Navbar />
    <Hero />
    <About />
    <Experiences />
  </div>
</template>

<script>
import About from "./About.vue";
import Hero from "./Hero.vue";
import Navbar from "./Navbar.vue";
import Experiences from "./Projects/Experiences.vue";

export default {
  name: "PortfolioComponent",
  components: {
    Hero,
    Experiences,
    Navbar,
    About,
  },
};
</script>

<style scoped></style>
