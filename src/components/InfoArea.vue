<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 steve-data">
        <div class="steve-card">
          <img
            id="stevepic"
            src="@/assets/info_area_pic/steve.jpg"
            alt=""
            width="140"
            height="140"
          />
          <div class="main-msj">
            <q class="ceo_quotes">
              <span class="firstLetter">I</span
              ><span
                >s already a 21-year focussed on what we are passionate about,
                turning dreams into lines, beauty into true, reaping the
                satisfaction from our distinguished clientele</span
              >
            </q>
          </div>
          <div>
            <p class="name">Stephen A. Salamy</p>
            <p class="job-title"><span>S.A.S Inc.</span> <span>CEO</span></p>
          </div>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="special-head"><h2>We Specialize In:</h2></div>
        <div class="row">
          <div class="col-6 col-sm-6 service-card">
            <img
              src="@/assets/info_area_pic/white-kitchen.jpg"
              alt=""
              style="width: 100%"
            />
            <h3>Renovation</h3>
            <ul>
              <li>Complete Home Renovation</li>
              <li>Exterior & Interrior Remodels</li>
              <li>Home & Condos</li>
              <li>Comercial & Industrials</li>
            </ul>
          </div>
          <div class="col-6 col-sm-6 service-card">
            <img
              src="@/assets/info_area_pic/front-house.jpg"
              alt="Mountains"
              style="width: 100%"
            />
            <div>
              <h3>Remodeling</h3>
              <ul>
                <li>Room Additions</li>
                <li>Kitchen & Bathroom Remodeling</li>
                <li>Outdoor Kitchens, Pools & Shade Structures</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12 specialty-three">
            <img
              src="@/assets/info_area_pic/inner.jpg"
              alt=""
              width="50%"
              height="60%"
            />
            <div>
              <h3>Consultation</h3>
              <ul>
                <li>Renovation Planning</li>
                <li>Value Engineering</li>
                <li>Developing a Realistic Budget</li>
                <li>Project Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import bootstrap from "bootstrap";
export default {
  name: "InfoArea",
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Sacramento&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.steve-data {
  display: flex;
  align-items: center;
  color: rgb(165 84 165);
}
#stevepic {
  float: left;
  margin: 5px;
  border-radius: 50%;
}
.main-msj {
  text-align: justify;
}
q {
  display: inline;
  text-justify: auto;
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
}

q:before {
  content: open-quote;
  position: relative;
  top: -18px;
  float: left;
  font-size: 80px;
}

q:after {
  content: close-quote;
  position: relative;
  top: -30px;
  font-size: 80px;
  float: right;
}
q .firstLetter {
  float: left;
  font-family: Georgia;
  font-size: 75px;
  line-height: 60px;
  padding-top: 8px;
  padding-right: 8px;
  padding-left: 3px;
}
.name {
  font-family: "Sacramento", cursive;
  font-size: 32px;
  margin-top: 16px;
  text-align: right;
}
.job-title {
  display: inline-block;
  font-family: "Barlow Condensed", sans-serif;
  position: relative;
  top: -18px;
  left: 50px;
  text-align: center;
}
.job-title :nth-child(2) {
  margin-left: 10px;
}
.specialty-three {
  display: flex;
  flex-direction: row;
}
.special-head {
  background: black;
}
.special-head h2 {
  color: white;
  font-family: "Abril Fatface", cursive;
}
ul {
  text-align: left;
  font-family: "Roboto", sans-serif;
  color: var(--bs-nav-link-color);
}
h3 {
  font-family: "Roboto", sans-serif;
  color: var(--bs-nav-link-color);
}
</style>
