<template>

  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add Items</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="name" />
          </div>
            <label for="exampleFormControlSelect1">Category</label>
        <select class="form-control"  v-model="category" id="exampleFormControlSelect1">
        <option>Motherboard</option>
        <option>CPU</option>
        <option>RAM</option>
        <option>SSD</option>
        <option>HDD</option>
        <option>Graphics</option>
        <option>PSU</option>
        <option>Desktop Case</option>
        <option>Keyboard</option>
        <option>Mouse</option>
        <option>Headphone</option>
        <option>Monitor</option>
        </select>
          <div class="form-group">
            <label>Description</label>
            <textarea type="text" class="form-control" v-model="description" />
          </div>
           <div class="form-group">
        </div>
          <div class="form-group">
            <label>Price</label>
            <input type="number" class="form-control" v-model="price" />
          </div>
          <div class="col-md-12">
    
    <input type="file" class="form-control"  id="image" name="image" @change="onFileChange"  required/>
</div>
            <div class="flex justify-content-center">
          <button type="button" class="btn btn-primary" @click="addItem">
            Submit
          </button>
        </div></form>
        
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template> 
<script>

import axios from "axios"
export default {
    data(){
        return {
            name: "",
            description: "",
            category: "",
            price: ""
        }
    },
    methods:{
        async addItem(){
            
            const auth = {
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem("token")
                }
            }
            const body = {
                name: this.name,    
                description: this.description,
                category: this.category,
                price: this.price
            }
            
            
            
            const result = await axios.post("http://localhost:80/product",body,auth)
           if(result.data.success){
           const id =result.data.data
           const formData = new FormData();
                const imagefile = this.file;
                formData.append("image", imagefile);
                const url = "http://localhost:80/product/image/" + id
                auth.headers["Content-Type"] = 'multipart/form-data'
                const result2 = await axios.put(url,formData, auth)
                if(result2.data.success){
                    alert('Done','New Item Added.','success');
                }else{
                    alert('Error','Failed To Add Item','error');
                }
            }else{
                alert(  'Error','Failed To Add Item','error');
            }
        },
        onFileChange(e) {
            const files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.file = files[0]
        },
    }
}

</script>


