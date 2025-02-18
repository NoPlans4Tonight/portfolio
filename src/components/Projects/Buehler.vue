<template>
  <div class="project">
    <h2>Buehler An ITW Company</h2>
    <ul>
      <li>
        Improved public helpdesk website to traffic customer service requests
        built on Laravel framework with HTML, JavaScript, and Bootstrap 4
        frontend.
      </li>
      <li>
        Built web application that improved production and assembly of hardness
        testing machines by 40%; this web application replaced an old process
        that required stand-alone workstations with outdated licenses to receive
        a .DAT license file on a physical USB by replacing it with software
        packages that dynamically updated from Buehler’s ERP system.
      </li>
      <li>
        Gathered requirements to design specifications for application change
        requests that included how assembly was creating licenses prior to the
        web application and identified any pain points in the process.
      </li>
      <li>
        Worked on a globally-dispersed development team to ensure global
        compliance with data sensitivity regulations (GDPR).
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BuehlerComponent",
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
