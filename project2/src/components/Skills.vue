<template>
        <form>
            <div>
                <div 
                v-for="(work,count) in works"
                v-bind:key="count"><br>
                    <h4>Skills</h4>
                    <label >{{count+1}}:</label><br>
                    <input type="text" placeholder="Name" v-model="work.name" required> 
                    <input type="text" placeholder="Level" v-model="work.levels" required><br>

                </div>
            </div>
                    <KeyWords/>
                    <input type="button" @click="addSkills" value="+Skills">
              
        </form>
</template>
<script>
import KeyWords from './KeyWords.vue'

export default {
        name:'Skills',
            props: {
                work: Array
            },
            components: { 
                KeyWords 
            },
        data(){
            return{
                works:[
                    {
                        name: '',
                        levels: '',
                        keywords: '',
                    }
                ]
            }
        },
        methods : {
            addSkills(){
                this.works.push({
                    name: '',
                    levels: '',
                    keywords: '',
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