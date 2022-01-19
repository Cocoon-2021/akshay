<template>
        <form>
            <div>
                <div 
                v-for="(work,count) in works"
                v-bind:key="count"><br>
                    <h4>Projects</h4>
                    <label >{{count+1}}:</label><br>
                    <input type="text" placeholder="name" name="name" v-model="work.name" required> <br>
                    <textarea placeholder="description" name="description" v-model="work.description" class="box"></textarea>
                    <Highlights/>
                    <KeyWords/>
                    <Roles/>
                    <input type="text" placeholder="Entity" name="Entity" v-model="work.Entity" required> <br>
                    <input type="text" placeholder="Type" name="Type" v-model="work.Type" required> <br>
                </div>
            </div>
            
                    <input type="button" @click="addProjects" value="+Projects">
              
        </form>
</template>
<script>
import Highlights from './Highlights.vue'
import KeyWords from './KeyWords.vue'
import Roles from './Roles.vue'
export default {
        name:'Projects',
        components:{
            Highlights,
            KeyWords,
            Roles
        },
            props: {
                work: Array
            },
        data(){
            return{
                works:[
                    {
                    name: '',
                    description: '',
                    Entity: '',
                    Type: ''
                    }
                ]
            }
        },
        methods : {
            addProjects(){
                this.works.push({
                    name: '',
                    description: '',
                    Entity: '',
                    Type: ' '
                })
            }
        }
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
    .second-btn{
        margin-left: 395px;
    }
    .box{
        background: transparent;
        border: none;
        border-bottom: 1px solid #000000;
        outline-style: none;
        padding: 10px 25px;
        margin: 0 4px;
    }
</style>