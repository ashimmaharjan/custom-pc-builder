<template>
  <div class="w-full h-auto bg-[#343A40] mt-0.5">
    <div class="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
      <!-- Side Image -->
      <div
        class="hidden lg:flex lg:col-span-1 h-full justify-center items-center"
      >
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_yqyt4zdn.json"
          background="transparent"
          speed="1"
          style="width: 500px; height: 500px"
          loop
          autoplay
        ></lottie-player>
      </div>

      <!-- Signup Form -->
      <div class="col-span-1 h-full p-10">
        <div class="w-[80%] mx-auto h-full bg-white shadow-md rounded-lg p-10">
          <h3 class="display-4">User Signup</h3>
          <br />
          <form @submit.prevent="registerUser">
            <div class="form-group mb-3">
              <input
                id="inpuFirstname"
                type="text"
                v-model="firstname"
                placeholder="First name"
                required=""
                autofocus=""
                class="form-control rounded-pill border-1 shadow-sm px-4"
              />
            </div>
            <div class="form-group mb-3">
              <input
                id="InputLastname"
                type="text"
                v-model="lastname"
                placeholder="Last name"
                required=""
                autofocus=""
                class="form-control rounded-pill border-1 shadow-sm px-4"
              />
            </div>
            <div class="form-group mb-3">
              <input
                id="inputEmail"
                type="email"
                v-model="email"
                placeholder="Email address"
                required=""
                autofocus=""
                class="form-control rounded-pill border-1 shadow-sm px-4"
              />
            </div>
            <div class="form-group mb-3">
              <input
                id="inputNumber"
                type="text"
                v-model="contact"
                placeholder="Contact Number"
                required=""
                autofocus=""
                class="form-control rounded-pill border-1 shadow-sm px-4"
              />
            </div>
            <div class="form-group mb-3">
              <input
                id="inputAddress"
                type="text"
                v-model="address"
                placeholder="Address"
                required=""
                autofocus=""
                class="form-control rounded-pill border-1 shadow-sm px-4"
              />
            </div>
            <div class="form-group mb-3">
              <input
                id="inputPassword"
                type="password"
                v-model="password"
                placeholder="Password"
                required=""
                class="
                  form-control
                  rounded-pill
                  border-1
                  shadow-sm
                  px-4
                  text-danger
                "
              /><br />
            </div>
            <button
              type="submit"
              class="
                bg-[#1C0A70]
                uppercase
                shadow-lg
                w-full
                py-3
                text-white text-center
                rounded-lg
              "
            >
              Signup
            </button>
            <div class="text-center d-flex justify-content-between mt-4">
              <p>
                <router-link to="/login">Already have an account?</router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      contact: "",
      address: "",
    };
  },
  methods: {
    async registerUser() {
      const user = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        contact: this.contact,
        address: this.address,
      };
      const result = await axios.post(
        "http://localhost:80/user/register",
        user
      );
      if (result.data.success) {
        window.location.reload();
        alert("User Created Successfully");
      } else {
        alert("Invalid Credential");
      }
    },
  },
};
</script>



<style scoped>
.login,
.image {
  min-height: 100vh;
}

.bg-image {
  background-image: url("https://th.bing.com/th/id/R.134fbf92b87ece5e53935684df86647e?rik=Bxki1fu2GrMy9Q&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f24333-video_games-typography-technology-circuits-simple_background.jpg&ehk=IpZNmsh%2bqGm3Dzgwz%2f07Z6QlGOu1pAD7ObQIRmQ6KNE%3d&risl=&pid=ImgRaw&r=0");
  background-size: cover;
  background-position: center center;
}
</style>