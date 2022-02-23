<template>
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5" style="width: 200px;" >
                <label for="profile_pic" class="cursor-pointer rounded-circle overflow-hidden">
                    <img class="fit-image rounded-circle" :src="profile" alt="">
                    <input type="file" id="profile_pic" name="profile_pic" @change="onFileChange" hidden>
                </label>
                <span class="font-weight-bold">{{firstname}}</span><span class="text-black-50">{{email}}</span> <span> </span>
            </div>
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
                    <div class="col-sm-9 text-secondary">{{firstname}} {{lastname}}
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
                    'authorization': "Bearer " +token
                }
            }
            const result = await axios.get("http://localhost:80/user",auth)
                const user = result.data.data
                this.firstname = user.firstname
                this.lastname = user.lastname
                this.email = user.email
                this.contact = user.contact
                this.address = user.address
                this.profile = user.profile
            
        },
        methods:{
            async onFileChange(e) {
                const files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                return;
                const file = files[0]
                const auth = {
                    headers:{
                    'authorization': "Bearer " + localStorage.getItem("token"),
                    "Content-Type": 'multiple/form-data'
                    }
                }
                const formData = new FormData();
                formData.append("image", file);
                const url = "http://localhost:80/user/update-profile"
                const result = await axios.put(url,formData, auth)
                if(result.data.success){
                    this.$swal('Profile Picture Updated');
                    window.location.reload()
                }else{
                    alert('Error','Image Must be PNG','error');
                }
            },    
        }
}
</script>

<style scoped>
body {
    background: rgb(175, 6, 6);
}

.form-control:focus {
    box-shadow: none;
    border-color: #aa1212
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
    background:rgb(175, 6, 6);
    box-shadow: none
}

.profile-button:active {
    background: rgb(175, 6, 6);
    box-shadow: none
}

.back:hover {
    color: rgb(175, 6, 6);
    cursor: pointer
}

.labels {
    font-size: 11px
}

.add-experience:hover {
    background: rgb(175, 6, 6);
    color: #fff;
    cursor: pointer;
    border: solid 1px rgb(175, 6, 6);
}
.fit-image{
    height: 250px;
    width: 250px;
}
</style>