<template>
  <div class="container-fluid entrance">
    <div class="row align-items-center">
      <div class="col-sm-6 welcome">
        <img src="@/assets/entrance.png" alt="" />
      </div>
      <div class="col-sm-6">
        <form action="#">
          <h2>WELCOME!</h2>
          <div class="form-floating my-4">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button type="submit" class="btn btn-dark my-4 w-50">Submit</button>
          <p><a href="#">Forgot your password?</a></p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EntranceView",
  components: {},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
.entrance {
  width: 80%;
  margin-bottom: 100px;
}
.welcome {
  background: black;
  padding-top: 80px;
  padding-bottom: 80px;
}
img {
  width: 100%;
}
form {
  width: 70%;
  margin: auto;
}
form h2 {
  font-family: "Roboto", sans-serif;
  text-align: left;
  margin-bottom: 50px;
}
form a {
  text-decoration: none;
  color: black;
}
form p {
  text-align: right;
}
</style>
