<template>
  <div class="navbar">
    <div class="logo">
      <div class="Group_1">
        <div class="Rectangle">Resume</div>
      </div>
    </div>
    <div class="supportedContent">
      <li class="list">
        <RouterLink to="/">Home</RouterLink>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </li>
    </div>
  </div>
</template>

<style>
.navbar {
  display: flex;
  width: 1140px;
  padding: 8px 16px;
  align-items: center;
  gap: 16px;
}

.logo {
  display: flex;
  padding: 5px 0px;
  align-items: flex-start;
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
  background: #38c2ac;
  color: #fff;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
}

.supportedContent {
  display: flex;
  padding: 0px 0.01px 0px 243.59px;
  justify-content: flex-end;
  align-items: center;
  flex: 1 0 0;
}

.list {
  display: flex;
  align-items: flex-start;
  padding: 0px 20px;
  align-items: flex-start;
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
}

.list a {
  display: flex;
  align-items: flex-start;
  padding: 8px 18.92px 9px 20px;
  color: #fff;
  text-decoration: none;
  transition: 0.2s;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  padding: 0px 20px;
  align-items: flex-start;
}
.list a:hover {
  display: flex;
  align-items: flex-start;
  color: #fff;
  background-color: rgba(81, 81, 81, 0.2);
  border-bottom: 3px solid #fff;
}
</style>
