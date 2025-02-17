<template>
  <div class="project">
    <h2>Foxtrot</h2>
    <p>
      Used SOLID design principles for developing services attached to the
      external e-commerce web application along with an internal inventory
      system web application.
    </p>
    <ul>
      <li>
        Built API endpoints using Laravel MVC, Django MVT, and Flask MVC which
        served JSON details of orders, items, inventory, and user & customer
        detail information to React frontend.
      </li>
      <li>
        Completed component unit test driven development within 2-week sprint
        cycles.
      </li>
      <li>
        Implemented a new algorithm to pull in customer payment information on
        order history details.
      </li>
      <li>
        Removed API call per order, and implemented a hash map of user payment
        tokens from profiles, and decorated each order with payment details from
        the hash map; this new algorithm of payment token matching dramatically
        increased page load time.
      </li>
      <li>Ensured high-quality code using a comprehensive testing approach.</li>
      <li>
        Used Datadog and sentry.io to monitor both backend web applications and
        refactored slow search queries to improve performance.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FoxtrotComponent",
};
</script>

<style scoped>
.project {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}
</style>
