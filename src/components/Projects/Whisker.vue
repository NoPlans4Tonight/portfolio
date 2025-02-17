<template>
  <div class="project">
    <h2>Whisker</h2>
    <ul>
      <li>
        Mainly responsible for developing new features and maintaining the
        quality assurance of litter robot production.
      </li>
      <li>
        Created new assembler stations for assembling robots on the production
      </li>
      <li>
        Developed new QA automation stations for assembling robots on the
        production floor using Svelte for GUI and PHP back-en
      </li>
      <li>
        Created a new system for tracking and managing inventory of robot parts
        using PHP on the Laravel framework.
      </li>
      <li>
        Created a rework station for reconditioned units that needed to be torn
        down and rebuilt.
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
