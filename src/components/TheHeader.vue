<template>
  <header class="p-3 bg-dark text-white">
<div class="container">
<div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">




<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
<li><router-link to="/" class="nav-link px-2 text-white">Custom PC Builder</router-link></li>
<li><router-link to="/about" class="nav-link px-2 text-white">About Us</router-link></li>
<li><router-link to="/contact" class="nav-link px-2 text-white">Contact Us</router-link></li>
<li><router-link to="/userprofile" class="nav-link px-2 text-white" v-if="isLoggedIn">Profile</router-link></li>
<li><router-link to="/admin/register" class="nav-link px-2 text-white"></router-link></li>
</ul>
<div class="text-end">

<router-link to="/login" class="btn btn-outline-light me-2" v-if="!isLoggedIn">Login</router-link>
<router-link to="/signup" class="btn btn-danger btn-block mb-2 rounded-pill shadow-sm" v-if="!isLoggedIn">Sign-up</router-link>
<router-link to="/signup" class="btn btn-danger btn-block mb-2 rounded-pill shadow-sm" v-if="isLoggedIn" @click="logoutUser">Logout</router-link>
</div>
</div>
</div>
</header>
</template>

<script>
export default {
    data(){
        return{
            isLoggedIn: false
        }  
    },
    created(){
        const token = localStorage.getItem("token")
        if (token){
            this.isLoggedIn = true
        }
        else{
            this.isLoggedIn = false
        }
    },
    methods:{
        logoutUser(){
            localStorage.clear()
            window.location.reload()
            this.$router.push("/")
        }
    }
}
</script>