<template>
<div v-show="showWork" >
        <h1>{{msg1}}</h1>
</div>
</template>
<script>
 export default{
     name:'work',
     props:{
         msg1:String
  }
 }
</script>

<style scoped>

</style>