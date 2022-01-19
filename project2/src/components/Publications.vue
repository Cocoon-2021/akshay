<template>
        <form>
            <div>
                <div 
                v-for="(work,count) in works"
                v-bind:key="count"><br>
                    <h4>Publication</h4>
                    <label >{{count+1}}:</label><br>
                    <input type="text" placeholder="Name" name="name" v-model="work.name" required> 
                    <input type="text" placeholder="Publisher" name="publisher" v-model="work.publisher" required><br>
                    <input type="text" placeholder="Release date" name="releaseDate" v-model="work.releaseDate"><br>
                    <input type="text" placeholder="URL" v-model="work.url" required>
                    <input type="text" placeholder="Summary" v-model="work.summary" required> 
                    
                </div>
            </div>
                    <Highlights/><br>
                    <KeyWords/><br>
                    <input type="button" @click="addPublication" value="+Publication">
              
        </form>
</template>
<script>
import Highlights from './Highlights.vue'
import KeyWords from './KeyWords.vue'
export default {
        name:'Publication',
        components:{
            Highlights,
            KeyWords
        },
            props: {
                work: Array
            },
        data(){
            return{
                works:[
                    {
                        name: '',
                        publisher: '',
                        releaseDate: '',
                        url: '',
                        summary: ''
                    }
                ]
            }
        },
        methods : {
            addPublication(){
                this.works.push({
                    name: '',
                    publisher: '',
                    releaseDate: '',
                    url: '',
                    summary: ''
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