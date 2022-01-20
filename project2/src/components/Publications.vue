<template>
        <form>
            <div class="mainSection"
                v-for="(work,count) in works"
                v-bind:key="count">
                <div class="section">
                    <label v-if="!count==0">{{count}}:</label>
                    <span v-if="!count==0">x</span>
                </div>
                <h4 v-if="count==0">Publication</h4>
                <div class="section">
                    <input type="text" placeholder="Name" name="name" v-model="work.name" required> 
                    <input type="text" placeholder="Publisher" name="publisher" v-model="work.publisher" required>
                </div>
                <div class="section">
                    <input type="text" placeholder="Release date" name="releaseDate" v-model="work.releaseDate">
                    <input type="text" placeholder="URL" v-model="work.url" required>
                </div>
                <div class="section">
                    <textarea placeholder="summary" name="summary" v-model="work.summary" class="box"></textarea>
                </div> 
            </div>
                <Highlights/><br>
                <KeyWords/><br>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="addPublication" value="+Publication">
                </div>
            </div>
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
</style>