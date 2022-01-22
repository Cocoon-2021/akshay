<template>
        <form> 
            <div class="mainSection"
                v-for="(work,count) in works"
                v-bind:key="count">
                <div class="section">
                    <label v-if="!count==0">{{count}}:</label>
                    <span v-if="!count==0" @click="deleteTab(count)" class="deleteTab">x</span>
                </div>
                <h4 v-if="count==0">Interests</h4>
                <div class="section">
                    <input type="text" placeholder="Name" name="name" v-model="work.name" required>
                </div>
            </div>
                <div class="mainSubSection">
                    <div class="subSection">
                        <input type="button" @click="addInterests" value="+INTERESTS">
                    </div>
                </div>
                <KeyWords/>
                
        </form>
</template>
<script>
import KeyWords from './KeyWords.vue'

export default {
        name:'Interests',
            props: {
                Work: Array
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