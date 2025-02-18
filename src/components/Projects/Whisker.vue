<template>
  <div class="project">
    <h2>Whisker</h2>
    <ul>
      <li>
        Developed reverse component lookup to retrieve information about what
        unit the component was potentially installed in. This was critical for
        tracking down issues with units that were already in the field.
      </li>
      <li>
        Created new assembling quality assurance test stations for the litter
        robot feeder line.
      </li>
      <li>
        Enhanced the Litter Robot 4 production line by adding various
        configuration test automation. I added tests that checked the firmware
        of the boards being installed to the units. If any firmware was out of
        date, the test would fail and the unit would be sent to a rework
        station.
      </li>
      <li>
        Created a rework station for units that failed any quality assurance
        tests on the production line to be repaired and sent back to the line.
        Built in a listener to each QA station that would check for failed
        tests. If a test failed the unit was sent straight to rework
        automatically. This saved time and money by not having to manually check
        each unit. Along with keeping track of the failed units in a database.
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
