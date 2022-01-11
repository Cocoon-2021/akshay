<template>
    <form>
        <h4>Volunteer</h4>
        <input type="text" placeholder="Organization"> 
        <input type="text" placeholder="Position" required><br>
        <input type="text" placeholder="URL" required>
        <input type="text" placeholder="Start Date"> <br>
        <input type="text" placeholder="End Date"><br>
        <input type="text" placeholder="Summary"><br>
        <highlights/><br>
        <button @click="addVolunteer">+VOLUNTEER</button><br>
        <br><router-link to="/work"><button class="second-btn">PREVIOUS</button></router-link>
        <router-link to="/education"><button class="">NEXT</button></router-link>
    </form>
</template>

<script>
    import highlights from './highlights.vue'

    export default{
        name:'volunteer',
            props:{
                volunteer:Array
            },
            components:{
                highlights
            },
        }

</script>

<style scoped>
    form{
        margin-left: 360px;
    }

    input[type=text] {
        background: transparent;
        border: none;
        border-bottom: 1px solid #000000;
        outline-style: none;
        padding: 10px 25px;
        margin: 0 4px;
    }

    .second-btn {
        margin-left: 395px;
    }
</style>