<template>
        <form>
            <div class="mainSection"
                v-for="(work,count) in works"
                v-bind:key="count">
                <div class="section">
                    <label v-if="!count==0">{{count}}:</label>
                    <span v-if="!count==0" @click="deleteTab(count)" class="deleteTab">x</span>
                </div>
                <h4 v-if="count==0">Skills</h4>
                <div class="section">
                    <input type="text" placeholder="Name" v-model="work.name" required> 
                    <input type="text" placeholder="Level" v-model="work.levels" required>
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="addSkills" value="+SKILLS">
                </div>
            </div>
                <KeyWords/>
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
        },
        deleteTab(count){
            this.works.splice(count,1)
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
    .section{
        margin: auto;
        display: flex;
        overflow: hidden;
        
    }
    .section label{
        width: 100%;
        margin-top: 4px;
    }

    .mainSection{
        margin: auto;
        justify-content: center;
        width: 40%;
        margin-top: 4mm;
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