<template>
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" :src="profile"><span class="font-weight-bold">{{firstname}}</span><span class="text-black-50">{{email}}</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">My Profile</h4>
                </div>
                <div class="row">
                  <div class="col-sm-3">
                      <h6 class="mb-0">Fullname: </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{{firstname}}{{lastname}}
                    </div>
                    <hr>
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email: </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {{email}}
                    </div>
                     <hr>
                    <div class="col-sm-3">
                      <h6 class="mb-0">Contact: </h6>
                    </div>                    
                    <div class="col-sm-9 text-secondary">
                    {{contact}}
                    </div>
                    <hr>
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address: </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {{address}}
                    </div>
                </div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Edit Profile</button></div>
            </div>
        </div>
       
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            firstname:"",
            lastname:"",
            address:"",
            contact:"",
            email: "",
            profile:""
        }
    },
   
        async created(){
            const token = localStorage.getItem("token")
            const auth = {
                headers:{
                    'Authorization': "Bearer" +token
                }
            }
            const result = await axios.get("http://localhost:80/user",auth)
            if(result.data.success){
                const user = result.data.data
                this.firstname = user.firstname
                this.lastname = user.lastname
                this.email = user.email
                this.contact = user.contact
                this.address = user.address
                this.profile = user.profile
            }
        
    }
}
</script>

<style scoped>
body {
    background: rgb(99, 39, 120)
}

.form-control:focus {
    box-shadow: none;
    border-color: #BA68C8
}

.profile-button {
    background: rgb(175, 6, 6);
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #030303
}

.profile-button:focus {
    background: #682773;
    box-shadow: none
}

.profile-button:active {
    background: #682773;
    box-shadow: none
}

.back:hover {
    color: #682773;
    cursor: pointer
}

.labels {
    font-size: 11px
}

.add-experience:hover {
    background: #BA68C8;
    color: #fff;
    cursor: pointer;
    border: solid 1px #BA68C8
}
</style>