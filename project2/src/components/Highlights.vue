<template>
    <form>
        <div>
            <div class="mainSection"
                v-for="(work,count) in works"
                v-bind:key="count" >
                <div class="section">
                    <label v-if="!count==0">{{count}}:</label>
                    <span v-if="!count==0" @click="deleteTab(count)" class="deleteTab">x</span>
                </div>
                <div class="section">
                    <input type="text" placeholder="Highlights" v-model="work.high">
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="addHighlights" value="+HIGHLIGHTS">
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    export default{
        name:'Highlights',
            props:{
                Highlights: Array
            },
        data() {
            return{
                works:[
                    {
                        high: ''
                    }
                ]
            }
        },
        methods : {
            addHighlights() {
                this.works.push( {
                    high:''
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
    .deleteTab{
        cursor: pointer;
    }
</style>
