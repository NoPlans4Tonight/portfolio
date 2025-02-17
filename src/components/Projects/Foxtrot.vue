<template>
  <div class="project">
    <h2>Foxtrot</h2>
    <ul>
      <li>
        Used SOLID design principles for developing services attached to the
        external e-commerce web application along with an internal inventory
        system web application.
      </li>
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
  font-family: "Roboto", sans-serif;
  font-size: 24px;
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
