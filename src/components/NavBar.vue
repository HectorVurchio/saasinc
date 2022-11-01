<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid d-flex align-items-end">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/sasImg.png" alt="" width="320" height="140" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              class="nav-link fs-3 fw-light"
              aria-current="true"
              to="/about"
              >ABOUT</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link fs-3 fw-light" to="/sasinc/services"
              >SERVICES</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link fs-3 fw-light" to="/sasinc/employment"
              >EMPLOYMENT</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link fs-3 fw-light" to="/sasinc/contact"
              >CONTACT</router-link
            >
          </li>
          <li>
            <router-link class="nav-link fs-3 fw-light" to="/sasinc/entrance"
              >ENTRANCE</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import bootstrap from "bootstrap";
export default {
  name: "NavBar",
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container-fluid {
  font-family: "Barlow Condensed", sans-serif;
}
.router-link-active.router-link-exact-active.nav-link {
  color: red;
}
</style>
