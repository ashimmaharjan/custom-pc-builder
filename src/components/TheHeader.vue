<template>
  <header class="text-white bg-[#343A40] body-font">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-3
        flex-col
        md:flex-row
        items-center
        gap-3
      "
    >
      <router-link to="/">
        <a class="flex title-font font-medium items-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>

          <span class="ml-3 text-xl">Custom PC Builder</span>
        </a>
      </router-link>
      <nav
        class="
          md:ml-auto md:mr-auto
          flex flex-wrap
          items-center
          text-base
          justify-center
        "
      >
        <router-link to="/about" class="nav-link px-2 text-white">
          <a class="mr-5">About Us</a>
        </router-link>

        <router-link to="/contact" class="nav-link px-2 text-white">
          <a class="mr-5">Contact Us</a>
        </router-link>
      </nav>

      <router-link to="/login" v-if="!isLoggedIn">
        <button
          class="
            inline-flex
            items-center
            bg-blue-500
            border-0
            py-1
            px-3
            focus:outline-none
            rounded
            text-base
          "
        >
          Login
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </router-link>

      <router-link to="/signup" v-if="!isLoggedIn">
        <button
          class="
            inline-flex
            items-center
            bg-white
            border-0
            py-1
            px-3
            focus:outline-none
            text-blue-500
            rounded
            text-base
          "
        >
          Signup
        </button>
      </router-link>

      <router-link to="/signup" v-if="isLoggedIn" @click="logoutUser">
        <button
          class="
            inline-flex
            items-center
            bg-white
            border-0
            py-1
            px-3
            focus:outline-none
            text-red-500
            rounded
            text-base
          "
        >
          Logout
        </button>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    const token = localStorage.getItem("token");
    if (token) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  },
  methods: {
    logoutUser() {
      localStorage.clear();
      window.location.reload();
      this.$router.push("/");
    },
  },
};
</script>