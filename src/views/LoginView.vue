<template>
  <div class="w-full h-auto py-20 bg-[#343A40] mt-0.5">
    <div class="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
      <!-- Side Image -->
      <div
        class="hidden lg:flex lg:col-span-1 h-full justify-center items-center"
      >
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_pounvezv.json"
          background="transparent"
          speed="1"
          style="width: 500px; height: 500px"
          loop
          autoplay
        ></lottie-player>
      </div>

      <!-- Signup Form -->
      <div class="col-span-1 h-full p-2 md:p-10">
        <div
          class="
            w-[90%]
            md:w-[80%]
            mx-auto
            h-full
            bg-white
            shadow-md
            rounded-lg
            p-5
          "
        >
          <h3 class="display-4">Login</h3>
          <br />
          <form @submit.prevent="loginUser">
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
            <div class="custom-control custom-checkbox mb-3">
              <input
                id="customCheck1"
                type="checkbox"
                checked
                class="custom-control-input"
              />
              <label for="customCheck1" class="custom-control-label"
                >Remember password</label
              >
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
              Login
            </button>
            <div class="text-center d-flex justify-content-between mt-4">
              <p>
                <router-link to="/signup">Don't have an account?</router-link>
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
      email: "",
      password: "",
    };
  },
  methods: {
    async loginUser() {
      const user = {
        email: this.email,
        password: this.password,
      };
      const result = await axios.post("http://localhost:80/user/login", user);
      if (result.data.success) {
        localStorage.setItem("token", result.data.accessToken);
        localStorage.setItem("isAdmin", result.data.isAdmin);
        alert("Login Successful");
        // if(result.data.isAdmin){
        //     this.$router.push("/admin/admindashboard")
        // }
        this.$router.push("/");
        // window.location.reload()
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
  background-image: url("https://nextlevelgamingstore.com/wp-content/uploads/2020/11/Teclado-mec-nico-para-jugar-87-teclas-interruptor-rojo-con-cable-retroiluminaci-n-RGB-antighosting-para-3.jpg");
  background-size: cover;
  background-position: center center;
}
</style>