<template>
  <nav class="navbar navbar-expand-lg bg-light justify-content-around">
    <div class="text-center text-md-left">
      <small
        class="fs-6 font-family-secondary text-uppercase font-weight-bold letter-spacing-caption text-muted"
        >What we do the best</small
      >
      <h1>Services</h1>
    </div>
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="btn btn-light active"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          ALL
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="btn btn-light"
          id="pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >
          CONSTRUCTION
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="btn btn-light"
          id="pills-contact-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          DESIGN
        </button>
      </li>
    </ul>
  </nav>
  <div class="container-fluid">
    <div class="row justify-content-around">
      <div class="col d-flex justify-content-center">
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="@/assets/servicepic/kitchen.jpg"
                class="img-fluid rounded-start"
                alt="#"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Kitchen Remodeling</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="@/assets/servicepic/bathroom.jpg"
                class="img-fluid rounded-start"
                alt="#"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Bathroom Remodeling</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- NEXT ROW-->
    <div class="row justify-content-around">
      <div class="col d-flex justify-content-center">
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="@/assets/servicepic/flooring.jpg"
                class="img-fluid rounded-start"
                alt="#"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Flooring</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="@/assets/servicepic/roofing.jpg"
                class="img-fluid rounded-start"
                alt="#"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Roofing</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- NEXT ROW-->
    <div class="row justify-content-around">
      <div class="col d-flex justify-content-center">
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="@/assets/servicepic/windowsDoor.jpg"
                class="img-fluid rounded-start"
                alt="#"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Windows & Doors</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="@/assets/servicepic/painting.jpg"
                class="img-fluid rounded-start"
                alt="#"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Painting</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-19 mt-lg-20 text-center estimateBtn">
    <a href="#" class="btn btn-lg btn-success">Get a free estimate</a>
  </div>
</template>
<script>
export default {
  name: "ServiceView",
  components: {},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arimo:wght@500&display=swap");
.text-center small {
  font-family: Arimo, sans-serif;
}
.text-center h1 {
  font-weight: bold;
}
button {
  font-family: Arimo, sans-serif;
  color: #9b9b9b;
  font-size: 0.75rem;
  letter-spacing: 0.125rem;
}
.btn:checked + .btn,
.btn.active,
.btn.show,
.btn:first-child:active,
:not(.btn-check) + .btn:active {
  color: #141619;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  border-top: 3px solid #141619;
  border-radius: 0px;
}
.estimateBtn {
  margin-top: 50px;
  margin-bottom: 100px;
}
</style>
