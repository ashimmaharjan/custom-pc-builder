<template>
    <div class="container-fluid">
    <div class="row no-gutter">
        <div class="col-md-6 d-none d-md-flex bg-image"></div>
        <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-xl-6 mx-auto">
                            <h3 class="display-4">Login</h3> <br>
                            <form @submit.prevent="loginAdmin">
                                <div class="form-group mb-3"> <input id="inputEmail" type="email" v-model="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"> </div>
                                <div class="form-group mb-3"> <input id="inputPassword" type="password" v-model="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-danger"><br> </div>
                                <div class="custom-control custom-checkbox mb-3"> <input id="customCheck1" type="checkbox" checked class="custom-control-input"> <label for="customCheck1" class="custom-control-label">Remember password</label> </div> <button type="submit" class="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm">Login</button>
                                <div class="text-center d-flex justify-content-between mt-4">
                                    <p><router-link to="/signup">Don't have an account?</router-link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            email: "",
            password: ""
        }
    },
    methods:{
        async loginAdmin(){
            const admin = {
                email: this.email,
                password: this.password
            }
            const result = await axios.post("http://localhost:80/admin/login",admin)
            if(result.data.success){
                localStorage.setItem("token",result.data.accessToken)
                localStorage.setItem("isAdmin",result.data.isAdmin)
                alert("Login Successful")
                this.$router.push("/")   
            }
            else{
                alert("Invalid Credential")
            }   
        }
    }
}
</script>



<style scoped>
.login,
.image {
    min-height: 100vh
}

.bg-image {
    background-image: url('https://nextlevelgamingstore.com/wp-content/uploads/2020/11/Teclado-mec-nico-para-jugar-87-teclas-interruptor-rojo-con-cable-retroiluminaci-n-RGB-antighosting-para-3.jpg');
    background-size: cover;
    background-position: center center
}
</style>