<template>
  <NavBar class="navbarone" />
  <router-view />
  <FooterMain class="footerMain" />
</template>
<script>
import NavBar from "./components/NavBar.vue";
import FooterMain from "@/components/FooterMain.vue";
export default {
  name: "App",
  components: {
    NavBar,
    FooterMain,
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
.footerMain {
  margin-top: 50px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
</style>
