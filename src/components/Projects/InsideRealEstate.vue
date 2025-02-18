<template>
  <div class="project">
    <h2>Inside Real Estate</h2>
    <ul>
      <li>
        Storyblok Integration & Premium Templates – Led the integration of
        Storyblok CMS for marketplace Product Detail Pages (PDPs), making them
        dynamic and easily configurable by product managers. Re-architected
        premium template handling using the Factory pattern, ensuring a scalable
        and maintainable approach that prioritizes active, purchased, and
        unpurchased templates efficiently.
      </li>
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
  border: 1px solid #333;
  border-radius: 8px;
  background: #181818;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project:hover {
  transform: translateY(-10px);
}

h2 {
  font-family: "Roboto";
  font-size: 32px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
}

p {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 20px;
  position: relative;
  padding: 15px 20px;
  background: #222;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    background 0.3s ease;
}

li:hover {
  transform: translateY(-5px);
  background: #333;
}

li::before {
  content: "";
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  background: #0bceaf;
  border-radius: 50%;
  box-shadow:
    0 0 0 2px #222,
    0 0 0 4px #0bceaf;
}
</style>
