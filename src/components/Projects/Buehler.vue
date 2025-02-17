<template>
  <div class="project">
    <h2>Buehler</h2>
    <img src="@/assets/esdLicensing.png" alt="ESD Licensing" />
    <p>
      Built public helpdesk website to traffic customer service requests built
      on Laravel framework with HTML, JavaScript, and Bootstrap 4 frontend.
    </p>
    <ul>
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
        Developed case submission web forms for Dynamics Customer Engagement
        system which was used for customer service, marketing, and sales.
      </li>
      <li>
        Worked on a globally-dispersed development team to ensure global
        compliance with data sensitivity regulations (GDPR).
      </li>
      <li>
        Worked with R&D and Customer Service departments to determine the best
        functionality of future web applications and speed up all manual
        workflows.
      </li>
      <li>
        Led design and implementation of enterprise programs including
        localization of various languages for hardness testing machine software
        using PHP on the Laravel framework.
      </li>
      <li>
        Ensured exceptional code quality using PSR-4 and PSR-6 standards and
        thorough unit testing on newly developed features like dynamic pulls
        from Buehler’s ERP system that checked against unique serial numbers
        assigned to hardness tester machines.
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
  border: 1px solid #ccc;
  border-radius: 8px;
}

img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}
</style>
