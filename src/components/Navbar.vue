<template>
  <div class="navbar">
    <div class="logo">
      <div class="Group_1">
        <div class="Rectangle">
          <img src="/developer-on-macbook.png" alt="JLO" class="logo-img" />
        </div>
      </div>
    </div>
    <div class="supportedContent">
      <li class="list">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Work History</a>
      </li>
    </div>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

.navbar {
  display: flex;
  width: 100%;
  padding: 8px 16px;
  align-items: center;
  gap: 16px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #181818;
  z-index: 1000;
}

.logo {
  display: flex;
  padding: 5px 0px;
  align-items: flex-start;
}

.Group_1 {
  width: 74px;
  height: 30px;
}

.Rectangle {
  width: 74px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #181818;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.logo-img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.Rectangle:hover .logo-img {
  transform: scale(1.5);
}

.supportedContent {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

.list {
  display: flex;
  align-items: flex-start;
  padding: 0;
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
}

.list a {
  display: flex;
  align-items: flex-start;
  padding: 8px 20px;
  color: #fff;
  text-decoration: none;
  transition: 0.2s;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
}

.list a:hover {
  color: #fff;
  background-color: rgba(81, 81, 81, 0.2);
  border-bottom: 3px solid #fff;
}
</style>
