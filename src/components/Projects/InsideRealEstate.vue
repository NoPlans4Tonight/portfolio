<template>
  <div class="project">
    <h2>Inside Real Estate</h2>
    <p>
      Storyblok Integration & Premium Templates – Led the integration of
      Storyblok CMS for marketplace Product Detail Pages (PDPs), making them
      dynamic and easily configurable by product managers. Re-architected
      premium template handling using the Factory pattern, ensuring a scalable
      and maintainable approach that prioritizes active, purchased, and
      unpurchased templates efficiently.
    </p>
    <ul>
      <li>
        Marketplace Carousel – Designed and implemented a dynamic product
        carousel, giving product managers full control to highlight featured
        products without requiring code changes. This improved flexibility and
        marketing capabilities for the business.
      </li>
      <li>
        Lead Routing Architecture – Researched and restructured lead routing
        logic, designing a robust technical architecture to support new business
        rules. Ensured seamless and efficient lead distribution by leveraging a
        modular and scalable approach.
      </li>
      <li>
        Factory Pattern & Software Architecture – Applied the Factory pattern
        and other design principles to streamline business logic, reduce
        redundancy, and enhance maintainability across multiple features,
        including premium templates and lead routing. Focused on writing
        scalable, reusable, and efficient code to drive long-term improvements
        in system architecture.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InsideRealEstate",
};
</script>

<style scoped>
.project {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.frame {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.pics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
}

.pics img:nth-child(1) {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}

.pics img:nth-child(2) {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.pics img:nth-child(3) {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
