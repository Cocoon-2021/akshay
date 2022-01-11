<template>
        <form>
            <div>
                <div 
                v-for="(work,count) in works"
                v-bind:key="count"><br>
                    <h4>work</h4>
                    <label >{{count+1}}:</label><br>
                    <input type="text" placeholder="Name" v-model="work.name" required> 
                    <input type="text" placeholder="Location" v-model="work.location" required><br>
                    <input type="text" placeholder="Description" v-model="work.description"><br>
                    <input type="text" placeholder="position" v-model="work.position" required> 
                    <input type="text" placeholder="URL" v-model="work.url" required><br>
                    <input type="text" placeholder="Start Date" v-model="work.stratDate" required> 
                    <input type="text" placeholder="End Date" v-model="work.endDate" required><br>
                    <input type="text" placeholder="Summary" v-model="work.summary" required><br>
                    
                </div>
            </div>
                    <highlights/><br>
                    <keywords/><br>
                    <button @click="addWorks">+WORKS</button><br>
                    <br><router-link to="/"><button class="second-btn">PREVIOUS</button></router-link>
                    <router-link to="/volunteer"><button class="">NEXT</button></router-link>
              
        </form>
</template>
<script>
    import highlights from './highlights.vue'
    import keywords from './keywords.vue'

export default {
        name:'work',
            props: {
                work: Array
            },
        components: {
            highlights,
            keywords
        },
        data(){
            return{
                works:[
                    {
                        name: '',
                        location: '',
                        description:'',
                        position:'',
                        url:'',
                        stratDate:'',
                        endDate:'',
                        summary:''
                    }
                ]
            }
        },
        methods : {
            addWorks(){
                this.works.push({
                    name: '',
                    location: '',
                    description: '',
                    position: '',
                    url: '',
                    stratDate: '',
                    endDate: '',
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