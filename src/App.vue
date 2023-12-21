<template>

<div :style="{'margin-left' : sidebarWidth}">
             </div>
             
    <div id="nav">
    
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Sign Up</router-link>
    </div>
        <router-view/>
        <SideBar />

</template>


<script>
 
import SideBar from '@/components/sidebar/SideBar.vue';
import { sidebarWidth } from './components/sidebar/state';
import {RouterView} from 'vue-router'





export default{
    name: "App",
    components : {
    SideBar,
    RouterView,

}, 


setup()
{
    return{ sidebarWidth}
}

}
</script>

<style>

.nav{

    margin-left: 10px;
    white-space: 5px;

}


</style>