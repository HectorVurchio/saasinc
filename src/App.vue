<template>
  <NavBar class="navbarone" />
  <router-view />
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbarone {
  width: 90%;
  margin: auto;
  background: url("@/assets/new-heart-pine.jpg");
  margin-bottom: 30px;
}
</style>
