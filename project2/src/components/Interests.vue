<template>
        <form>
            <div>
                <div 
                v-for="(work,count) in works"
                v-bind:key="count"><br>
                    <h4>Interests</h4>
                    <label >{{count+1}}:</label><br>
                    <input type="text" placeholder="Name" name="name" v-model="work.name" required>
                    
                </div>
            </div>
                <KeyWords/>
                    <input type="button" @click="addInterests" value="+INTERESTS">
                
        </form>
</template>
<script>
import KeyWords from './KeyWords.vue'

export default {
        name:'Interests',
            props: {
                work: Array
            },
            components:{
                KeyWords
            },
        data(){
            return{
                works:[
                    {
                        name: '',
                    }
                ]
            }
        },
        methods : {
            addInterests(){
                this.works.push({
                    name: '',
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
</style>