<template>
<div>
    <div 
        v-for="(profile,count) in profiles"
        v-bind:key="count"><br>
        <span v-if="!count==0">x</span>
        <label >{{count+1}}:</label><br>
        <input type="text" placeholder="Network" v-model="profile.network"> <input type="text" placeholder="Username" v-model="profile.username"><br>
        <input type="text" placeholder="URL" v-model="profile.url" required> <br>
    </div>
</div>
</template>
<script>
 export default{
     name:'profile',
     props:{
         msg1:String,
         profiles: Array
     }
 }
</script>

<style scoped>
input[type=text] {
    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    outline-style: none;
    padding: 10px 25px;
}
</style>