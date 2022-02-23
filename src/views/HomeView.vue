<template>

<div class="container p-4 m-10" >

            <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-6">

                 <item-card v-for="item in items" :key="item._id" :name="item.name"  :description="item.description" :category="item.category" :price="item.price" :image="item.image"/>

            </div>
         </div>
</template>

<script>
import axios from "axios"
import ItemCard from "../components/ItemCard.vue"
export default {
   data(
   ){
     return {
        items : []   
     } 
   },
   components: {ItemCard},
  async created(){
     const result = await axios.get("http://localhost:80/product")
   this.items = result.data.data

      // axios get -> data books
      // book in books loop
      // props
   }
}
</script>



