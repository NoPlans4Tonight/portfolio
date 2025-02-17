<template>
  <div class="container">
    <Navbar />
    <Hero />
    <About />
    <Projects />
  </div>
</template>

<script>
import About from "./About.vue";
import Hero from "./Hero.vue";
import Navbar from "./Navbar.vue";
import Projects from "./Projects/Projects.vue";

export default {
  name: "PortfolioComponent",
  components: {
    Hero,
    Projects,
    Navbar,
    About,
  },
};
</script>

<style scoped></style>
