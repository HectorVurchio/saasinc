<template>
  <footer class="footer-20192">
    <div class="site-section">
      <div class="container">
        <div class="cta d-block d-md-flex align-items-center px-5">
          <div>
            <h2 class="mb-0">Ready for a next project?</h2>
            <h3 class="text-dark">Let's get started!</h3>
          </div>
          <div class="ml-auto">
            <a href="#" class="btn btn-dark rounded-0 py-3 px-5">Contact us</a>
          </div>
        </div>
        <div class="row rowfoot-one">
          <div class="col-sm-4">
            <router-link class="navbar-brand" to="/">
              <img src="../assets/sasImg.png" alt="" />
            </router-link>
          </div>
          <div class="col-sm-3">
            <ul class="sas-list">
              <li>
                <router-link to="/about">ABOUT</router-link>
              </li>
              <li>
                <router-link to="/sasinc/services">SERVICES</router-link>
              </li>
              <li>
                <router-link to="/sasinc/employment">EMPLOYMENT</router-link>
              </li>
              <li>
                <router-link to="/sasinc/contact">CONTACT</router-link>
              </li>
              <li>
                <router-link to="/sasinc/entrance">ENTRANCE</router-link>
              </li>
            </ul>
          </div>
          <div class="col-sm-5 social_area">
            <div>FOLLOW US ON:</div>
            <div>
              <a href="https://www.facebook.com/profile.php?id=100049191835850"
                ><i class="bi bi-facebook"></i
              ></a>
              <a href="https://www.instagram.com/sascustom/"
                ><i class="bi bi-instagram"></i
              ></a>
              <a href="#"><i class="bi bi-linkedin"></i></a>
              <a href="#"><i class="bi bi-youtube"></i></a>
            </div>
            <div>2022</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import bootstrap from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
export default {
  name: "FooterMain",
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.footer-20192 {
  position: relative;
  color: #fff;
  background-color: #040505;
}
.footer-20192 .cta {
  width: 90%;
  margin: auto;
  -webkit-box-shadow: -20px -20px 0 0 rgb(52 58 64 / 20%);
  box-shadow: -20px -20px 0 0 rgb(230 226 215);
  padding: 20px;
  background-color: #ac9556;
  top: -40px;
  position: relative;
}
.footer-20192 .cta h2,
.footer-20192 .cta h3 {
  line-height: 1.5;
}
.footer-20192 .cta h3 {
  font-size: 20px;
}
.ml-auto,
.mx-auto {
  margin-left: auto !important;
}
.sas-list li {
  list-style: none;
  text-align: left;
}
.sas-list li a {
  text-decoration: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
}
img {
  max-width: 100%;
  max-height: 100%;
}
.social_area > div:nth-child(1) {
  color: #fa7e1e;
  font-size: 18px;
  font-family: "Roboto";
  font-style: italic;
  text-align: left;
}
.social_area > div:nth-child(2) {
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: auto;
  font-size: 26px;
}
.social_area > div:nth-child(2) > a:nth-child(1) {
  color: #4267b2;
}
.social_area > div:nth-child(2) > a:nth-child(2) {
  color: #d62976;
}
.social_area > div:nth-child(2) > a:nth-child(3) {
  color: #0077b5;
}
.social_area > div:nth-child(2) > a:nth-child(4) {
  color: #ff0000;
}
.social_area > div:nth-child(3) {
  position: relative;
  top: 30px;
  text-align: right;
  color: #ac9556;
  font-weight: bold;
}
</style>
