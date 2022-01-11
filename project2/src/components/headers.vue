<template>
    <h2>{{msg}}</h2>
</template>
<script>
    export default{
        name:'headers',
            props:{
                msg:String,
            }
}
</script>

<style scoped>
h2{
    text-align: center;
}
</style>
