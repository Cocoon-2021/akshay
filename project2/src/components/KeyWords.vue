<template>
        <div>
            <div class="mainSection"
            v-for="(work,count) in works"
            v-bind:key="count" >
                <div class="section">
                    <label v-if="!count==0">{{count}}:</label>
                    <span v-if="!count==0">x</span>
                </div>
                <div class="section">
                    <input type="text" placeholder="Keywords" name="key" v-model="work.key">
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="addKeywords" value="+KEYWORDS">
                </div>
            </div>
        </div>

</template>
<script>
    export default{
        name:'KeyWords',
            props:{
            work:Array
        },
        data(){
            return{
                works:[
                    {
                        key:''
                    }
                ]
            }
        },
        methods : {
            addKeywords(){
                this.works.push( {
                    key:''
                } )
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
        padding: 5px 25px;
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
</style>
