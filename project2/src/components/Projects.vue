<template>
        <form>
            <div class="mainSection"
                v-for="(work,count) in works"
                v-bind:key="count">
                <div class="section">
                    <label v-if="!count==0">{{count}}:</label>
                    <span v-if="!count==0" @click="deleteTab(count)" class="deleteTab">x</span>
                </div>
                <h4>Projects</h4>
                <div class="section">
                    <input type="text" placeholder="name" name="name" v-model="work.name" required>
                </div>
                <div class="section">
                    <textarea placeholder="description" name="description" v-model="work.description" class="box"></textarea>
                </div>
                <div class="section">
                    <input type="text" placeholder="Start Date" name="StartDate" v-model="work.StartDate"> 
                    <input type="text" placeholder="End Date" name="EndDate" v-model="work.EndDate" required>
                </div> 
                <div class="section">
                    <input type="text" placeholder="URL" name="Url" v-model="work.Url" required>
                </div>
                <div class="section">
                    <input type="text" placeholder="Entity" name="Entity" v-model="work.Entity" required> 
                    <input type="text" placeholder="Type" name="Type" v-model="work.Type" required> 
                </div>
            </div>
                <div class="mainSubSection">
                    <div class="subSection">
                        <input type="button" @click="addProjects" value="+Projects">
                    </div>
                </div>
                <Highlights/>
                <KeyWords/>
                <Roles/>
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
            },
            deleteTab(count){
                this.works.splice(count,1)
            }
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
        margin: 0 4px;
    }
    .box{
        background: transparent;
        border: none;
        border-bottom: 1px solid #000000;
        outline-style: none;
        padding: 21px 24px;
        width: 100%;
        resize: none;
    }
    .section{
        margin: auto;
        display: flex;
        overflow: hidden;
        
    }
    .section label{
        width: 100%;
        margin-top: 15px;
    }

    .mainSection{
        margin: auto;
        justify-content: center;
        width: 40%;
        margin-top: 10mm;
    }
    .mainSubSection{
        margin: auto;
        justify-content: center;
        width: 40%;
        margin-top: 10px;
    }
    .subSection{
        margin: auto;
        display: flex;
        overflow: hidden;
    }
    .deleteTab{
        cursor: pointer;
    }
</style>