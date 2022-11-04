<template>
  <div class="container-fluid employment">
    <div class="row">
      <div class="col">
        <h1>WE'RE HIRING!</h1>
        <h3>Let's go and jump into...</h3>
        <p>
          Here we have some different positions on which you can apply and join
          us to be part of our professional staff...
        </p>
      </div>
    </div>
    <!-- First Row -->
    <div class="row">
      <div class="card">
        <div class="card-header fs-4 bg-dark text-white">Carpenter</div>
        <div class="card-body">
          <h5 class="card-title">Qualifications:</h5>
          <div class="card-text">
            <ul>
              <li>High school diploma or GED (required)</li>
              <li>
                A minimum of 1-year experience as a carpenter in the
                constructionindustry
              </li>
              <li>The ability to communicate effectively</li>
              <li>
                Willingness to work in high pressure situations and projects
                with tight deadlines
              </li>
              <li>
                Ability to work with various materials on the worksite in a
                knowledgeable fashion
              </li>
              <li>Valid Driver's License</li>
              <li>Ability to pass a federal background check</li>
            </ul>
          </div>
          <p>Are you the talent we are looking for?...</p>
          <a href="#" class="btn btn-dark">Apply</a>
        </div>
      </div>
    </div>
    <!-- Second Row -->
    <div class="row">
      <div class="card">
        <div class="card-header fs-4 bg-dark text-white">Electrician</div>
        <div class="card-body">
          <h5 class="card-title">Qualifications:</h5>
          <div class="card-text">
            <ul>
              <li>4 years of professional experience as an electrician</li>
              <li>
                10 years of supervision experience in commercial or light
                industrial installations, including healthcare work
              </li>
              <li>Proficient in reading blue prints, working independently</li>
              <li>
                Conducting all installations and maintenance within current NEC
                requirements
              </li>
              <li>
                Have your own set of personnel hand tools, and have dependable
                transportation
              </li>
              <li>
                Experienced in scheduling and working with technology including
                but not limited to electronic tablets and laptops utilizing
                Microsoft OUTLOOK, WORD, EXCEL among other software while also
                having an OSHA 10 minimum certification
              </li>
            </ul>
          </div>
          <p>Are you the talent we are looking for?...</p>
          <a href="#" class="btn btn-dark">Apply</a>
        </div>
      </div>
    </div>
    <!-- Third Row -->
    <div class="row">
      <div class="card">
        <div class="card-header fs-4 bg-dark text-white">Plumbing</div>
        <div class="card-body">
          <h5 class="card-title">Qualifications:</h5>
          <div class="card-text">
            <ul>
              <li>Proven experience as a plumber</li>
              <li>
                Solid understanding of water distribution and disposal systems
                in residential, commercial and industrial buildings
              </li>
              <li>
                Ability to handle plumbing tools and equipment (pipe wrenches,
                pipe cutters, sewer machines etc.)
              </li>
              <li>Good communication and interpersonal skills</li>
              <li>Friendly with a great deal of patience</li>
              <li>
                Good physical condition and strength with the ability to work in
                tight and/or awkward spaces
              </li>
            </ul>
          </div>
          <p>Are you the talent we are looking for?...</p>
          <a href="#" class="btn btn-dark">Apply</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EmploymentView",
  components: {},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@1,300&display=swap");
.employment {
  width: 70%;
  margin-bottom: 150px;
}
.employment > div:first-child h1,
.employment > div:first-child h3 {
  font-family: "Roboto", sans-serif;
}
.employment > div:first-child p {
  font-family: "Mulish", sans-serif;
  font-size: 26px;
  line-height: 1.1;
}
.card {
  margin-top: 20px;
}
.card .card-header,
.card a {
  font-family: "Roboto", sans-serif;
}
.card-text {
  text-align: left;
}
</style>
