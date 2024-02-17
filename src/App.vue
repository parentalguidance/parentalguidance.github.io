<template>
  <div class="container">
  </div>
  <MainPage/>
  <SiteFooter/>
</template>

<script>
import MainPage from './components/Main.vue'
import 'primeicons/primeicons.css'
import SiteFooter from "@/components/SiteFooter";

export default {
  name: 'App',
  components: {
    SiteFooter,
    MainPage,
  }
}
</script>

<style>
body {
  background-color: #ddb2b2;
}

.container {
  background-image: url("./assets/images/hands.jpg");
  background-repeat: no-repeat;
  z-index: -1;
  min-width: 200vw;
  min-height: 100vh;
  padding: 0;
  top: 0;
  left: 0;
  position: absolute;
  background-size: 100% 500px;
  background-attachment: fixed;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #114b5f;
  direction: rtl;
}
</style>
