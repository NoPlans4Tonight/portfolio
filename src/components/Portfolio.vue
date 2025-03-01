<template>
  <div class="container">
    <Navbar />
    <Hero />
    <About />
    <Work />
  </div>
</template>

<script>
import About from "./About.vue";
import Hero from "./Hero.vue";
import Navbar from "./Navbar.vue";
import Work from "./Projects/Work.vue";

export default {
  name: "PortfolioComponent",
  components: {
    Hero,
    Work,
    Navbar,
    About,
  },
};
</script>

<style scoped></style>
