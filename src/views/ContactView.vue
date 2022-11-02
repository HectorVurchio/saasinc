<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 text-center mb-5">
        <h2 class="heading-section">Contact Form #06</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="wrapper">
          <div class="row no-gutters mb-5">
            <div class="col-md-7">
              <div class="contact-wrap w-100 p-md-5 p-4">
                <h3 class="mb-4">Contact Us</h3>
                <div id="form-message-warning" class="mb-4"></div>
                <div id="form-message-success" class="mb-4">
                  Your message was sent, thank you!
                </div>
                <form
                  method="POST"
                  id="contactForm"
                  name="contactForm"
                  class="contactForm"
                  novalidate="novalidate"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="label" for="name">Full Name</label>
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          id="name"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="label" for="email">Email Address</label>
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="label" for="subject">Subject</label>
                        <input
                          type="text"
                          class="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="label" for="#">Message</label>
                        <textarea
                          name="message"
                          class="form-control"
                          id="message"
                          cols="30"
                          rows="4"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="submit"
                          value="Send Message"
                          class="btn btn-primary"
                        />
                        <div class="submitting"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-5 d-flex align-items-stretch">
              <div id="map" style="position: relative; overflow: hidden">
                <!-- Load Google Map Here-->
                <img src="@/assets/googleMap.png" alt="" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="dbox w-100 text-center">
                <div
                  class="icon d-flex align-items-center justify-content-center"
                >
                  <span class="fa fa-map-marker"
                    ><i class="bi bi-geo-alt-fill"></i
                  ></span>
                </div>
                <div class="text">
                  <p>
                    <span>Address:</span> 198 West 21th Street, Suite 721 New
                    York NY 10016
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="dbox w-100 text-center">
                <div
                  class="icon d-flex align-items-center justify-content-center"
                >
                  <span class="fa fa-phone"
                    ><i class="bi bi-telephone-fill"></i
                  ></span>
                </div>
                <div class="text">
                  <p>
                    <span>Phone:</span>
                    <a href="tel://1234567920">+ 1235 2355 98</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="dbox w-100 text-center">
                <div
                  class="icon d-flex align-items-center justify-content-center"
                >
                  <span class="fa fa-paper-plane"
                    ><i class="bi bi-envelope"></i
                  ></span>
                </div>
                <div class="text">
                  <p>
                    <span>Email:</span>
                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="dbox w-100 text-center">
                <div
                  class="icon d-flex align-items-center justify-content-center"
                >
                  <span class="fa fa-globe"><i class="bi bi-globe2"></i></span>
                </div>
                <div class="text">
                  <p><span>Website</span> <a href="#">yoursite.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "bootstrap-icons/font/bootstrap-icons.css";
export default {
  name: "ContactView",
  components: {},
};
</script>
<style scoped>
#form-message-warning {
  color: red;
}
#form-message-warning,
#form-message-success {
  display: none;
}
#form-message-success {
  color: #28a745;
  font-size: 18px;
  font-weight: 500;
}
.dbox .icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #2553b8;
  margin: 0 auto;
  margin-bottom: 20px;
}
.dbox .icon span {
  font-size: 20px;
  color: #fff;
}
.dbox .text {
  width: 100%;
}
.dbox p {
  margin-bottom: 0;
}
.dbox p span {
  font-weight: 500;
  color: #000;
}
.contact-wrap {
  background: #e8edf0;
}
.contactForm .label {
  color: #000;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
}
.form-group {
  margin-bottom: 1rem;
  text-align: left;
}
label {
  width: 100%;
  padding-left: 10px;
  display: inline-block;
  margin-bottom: 0.5rem;
  text-align: left;
}
#contactForm .form-control {
  font-size: 16px;
}
#map {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.btn {
  padding: 12px 16px;
  cursor: pointer;
  border-width: 1px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  -webkit-box-shadow: 0px 10px 20px -6px rgb(0 0 0 / 12%);
  -moz-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 10px 20px -6px rgb(0 0 0 / 12%);
  position: relative;
  margin-bottom: 20px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  background: #2553b8 !important;
}
#map img {
  width: 100%;
  height: 531px;
}
</style>
