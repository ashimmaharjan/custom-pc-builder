<template>
    <div class="container-fluid">
    <div class="row no-gutter">
        <div class="col-md-6 d-none d-md-flex bg-image"></div>
        <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-xl-6 mx-auto">
                            <h3 class="display-4">Admin Signup</h3> <br>
                            <form @submit.prevent="registerAdmin"> 
                                <div class="form-group mb-3"> <input id="inpuFirstname" type="text" v-model="firstname" placeholder="First name" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"> </div>
                                <div class="form-group mb-3"> <input id="InputLastname" type="text" v-model="lastname" placeholder="Last name" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"> </div>
                                <div class="form-group mb-3"> <input id="inputEmail" type="email" v-model="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"> </div>
                                <div class="form-group mb-3"> <input id="inputNumber" type="text" v-model="contact" placeholder="Contact Number" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"> </div>
                                <div class="form-group mb-3"> <input id="inputAddress" type="text" v-model="address" placeholder="Address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"> </div>
                                <div class="form-group mb-3"> <input id="inputPassword" type="password" v-model="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-danger"><br> </div>
                                <button type="submit" class="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm">Signup</button>
                                <div class="text-center d-flex justify-content-between mt-4">
                                    <p><router-link to="/login">Already have an account?</router-link></p>
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
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            contact:"",
            address:""
        }
    },
    methods:{
        async registerAdmin(){
            const admin = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                contact: this.contact,
                address: this.address,
                password: this.password
            }
           const result = await axios.post("http://localhost:80/admin/register",admin)
            if(result.data.success){
                window.location.reload()
                alert("Admin Created Successfully")
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
    background-image: url('https://th.bing.com/th/id/R.134fbf92b87ece5e53935684df86647e?rik=Bxki1fu2GrMy9Q&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f24333-video_games-typography-technology-circuits-simple_background.jpg&ehk=IpZNmsh%2bqGm3Dzgwz%2f07Z6QlGOu1pAD7ObQIRmQ6KNE%3d&risl=&pid=ImgRaw&r=0');
    background-size: cover;
    background-position: center center
}
</style>