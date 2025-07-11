<template>
  <div id="about" class="section">
    <div class="col1">
      <img src="/developer-on-macbook.png" alt="Avatar" />
    </div>
    <div class="col2">
      <div class="col2-inner">
        <h2>About Me</h2>
        <p>
          I'm a Software Engineer with expertise in Laravel and Vue.js,
          specializing in building scalable and high-performance web
          applications. I've led major features, including Storyblok integration
          for marketplace PDPs, a dynamic product carousel, and premium website
          templates, improving user experience and business impact.
        </p>
        <p>
          Beyond development, I mentor junior engineers, sharing best practices
          and guiding them through software design principles like the Factory
          pattern to improve code maintainability. I also architect scalable
          solutions, ensuring clean, efficient, and extensible codebases.
        </p>
        <p>
          I thrive on solving complex problems, optimizing workflows, and
          continuously improving development processes to deliver high-quality
          software.
        </p>
        <div class="skills">
          <ul>
            <li v-for="skill in skills" :key="skill">{{ skill }}</li>
          </ul>
        </div>
        <div class="links">
          <a
            href="https://github.com/NoPlans4Tonight"
            target="_blank"
            class="github-link"
          >
            <i class="fab fa-github" /> GitHub
          </a>
          <div
            class="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="jonathon-l-887229141"
            data-version="v1"
          >
            <a
              class="badge-base__link LI-simple-link"
              href="https://www.linkedin.com/in/jonathon-l-887229141?trk=profile-badge"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skillsData from "../helpers/skillsData";

export default {
  name: "AboutSection",
  data() {
    return {
      skills: skillsData,
    };
  },
};
</script>

<style scoped>
.section {
  display: flex;
  width: 100%;
  padding: 150px 0px 60px 0px;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
}

.col1,
.col2 {
  display: flex;
  padding: 55px 15px;
  align-items: flex-start;
  flex: 1 1 0;
}

.col1 {
  background: url(<path-to-image>) #181818 0px 0px / 100% 100% no-repeat;
}

.col1 img {
  max-width: 100%;
  height: auto;
}

.col2 {
  max-width: 570px;
  min-height: 1px;
  padding: 20px 15px 18.56px 30px;
}

.col2-inner {
  width: 100%;
}

h2 {
  color: #fff;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 38.4px;
}

p {
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 100%;
}

.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  width: 100%;
  flex-shrink: 0;
}

li {
  display: inline-flex;
  padding: 1px 10.42px 1px 11px;
  align-items: flex-start;
  border-radius: 10px;
  border: 1px solid #0bceaf;
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin: 0px 20px 10px 0px;
}

.github-link {
  display: inline-flex;
  align-items: center;
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  text-decoration: none;
  margin-top: 20px;
}

.github-link i {
  margin-right: 8px;
}

.github-link:hover {
  color: #fff;
  background-color: rgba(81, 81, 81, 0.2);
  padding: 5px 10px;
  border-radius: 5px;
  border-bottom: 3px solid #fff;
}

.links {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .section {
    flex-direction: column;
    align-items: center;
  }

  .col1,
  .col2 {
    flex: 1 1 100%;
    padding: 20px 15px;
  }

  .col2 {
    max-width: 100%;
  }
}
</style>
