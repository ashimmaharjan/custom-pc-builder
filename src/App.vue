<template>
<the-header v-if="!isAdmin"/>
<admin-header v-else/>
<router-view/>
<the-footer/>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import AdminHeader from './components/AdminHeader.vue'
import TheFooter from './components/TheFooter.vue'
export default {
name: 'App',
components: {
TheHeader,AdminHeader,TheFooter
},
data(){
    return{
        isAdmin : true
    }
},
created(){
    const isAdmin = localStorage.getItem("isAdmin")
    if(isAdmin == "true"){
        this.isAdmin = true
    }
    else{
        this.isAdmin = false
    }
    console.log(isAdmin)
}

}

</script>
