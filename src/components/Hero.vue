<template>
  <div class="hero-section">
    <div class="hero-ovelay">
      <div class="hero-row">
        <div class="hero-col1">
          <div class="col1-header">
            <span>Hello I'm</span>
            <div class="header-information">
              <h1>Jonathon Lochan</h1>
              <h4>Senior Software Engineer</h4>
              <div class="contact">
                <div class="email">
                  <i class="fa-regular fa-envelope" /> jlochan53@gmail.com
                </div>
                <div class="location">
                  <IconLocation class="pin-drop" /> Chicago IL
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-col2">
          <div class="col2-border">
            <img
              src="https://jlochanportfolio.s3.us-east-2.amazonaws.com/IMG_7889.jpeg"
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconLocation from "./icons/IconLocation.vue";

export default {
  name: "HeroSection",
  components: {
    IconLocation,
  },
};
</script>

<style scoped>
.hero-section {
  display: flex;
  width: 1920px;
  align-items: flex-start;
  flex-shrink: 0;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 99vw;
  height: 80%;
  background: url("@/assets/HomeSection.jpg") rgb(83, 83, 83) 0px 0px / cover
    no-repeat;
  transform: translateX(-50%);
  z-index: -1;
}

.hero-section::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80%;
  background: rgba(0, 0, 0, 0.7);
  z-index: -1;
}

.hero-row {
  display: flex;
  width: 1140px;
  padding: 180px 0px;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.hero-col1 {
  display: flex;
  max-width: 570px;
  min-height: 1px;
  padding: 0px 15px;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
}

.col1-header {
  width: 540px;
  height: 476px;
}

.header-information {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 10px;
}

span {
  display: inline-flex;
  padding: 6px 30.03px 6px 30px;
  align-items: flex-start;
  border-radius: 20px 20px 20px 0px;
  background: #0bceaf;
  color: #fff;
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1px;
  margin-top: 70px;
}

h1 {
  color: #fff;
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: 65px; /* 108.333% */
}

h4 {
  color: #fff;
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 34px; /* 130.769% */
}

.contact {
  display: flex;
  width: 540px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.location,
.email {
  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px;
  opacity: 0.9;
}

.pin-drop {
  width: 24px;
  height: 24px;
}

.hero-col2 {
  display: flex;
  max-width: 570px;
  min-height: 1px;
  padding: 30px 85px 0px 85px;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
}

.col2-border {
  display: flex;
  width: 400px;
  height: 400px;
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
}

.col2-border img {
  width: 360px;
  height: 360px;
  max-width: 400px;
  object-fit: cover;
  object-position: bottom;
  flex-shrink: 0;
  border-radius: 180px;
  border: 20px solid rgba(0, 0, 0, 0.4);
  background: url(<path-to-image>) rgb(0, 0, 0) 0px 0px / 100% 100% no-repeat;
}
</style>
