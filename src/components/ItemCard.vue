<template>
    <div class="col py-3">
                <div class="card h-100 shadow-sm"> <img :src="image" class="img-a img-item" alt="...">
                <div class="card-body">
                        <h5 class="card-title">{{name}}</h5>
                        <p class="card-text">{{description}}</p>
                        <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-primary">{{category}}</span> <span class="float-end price-hp">NRS. {{price}}</span> </div>
                    </div>
                </div>
            </div>
</template>
<script>
export default {
    props:["name","description","price","category","image"]
}
</script>
<style scoped>
.img-item{
    height: 250px;
    object-fit: contain;
}
</style>