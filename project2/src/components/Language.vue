<template>
        <form>
            <div class="mainSection"
                v-for="(work,count) in works"
                v-bind:key="count">
                <div class="section">
                    <label v-if="!count==0">{{count}}:</label>
                    <span v-if="!count==0" @click="deleteTab(count)" class="deleteTab">x</span>
                </div>
                <h4 v-if="count==0">Language</h4>
                <div class="section">
                    <input type="text" placeholder="Language" name="language" v-model="work.language" required> 
                    <select v-model="work.fluency"> 
                        <option value="">Select</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Fluent">Fluent</option>
                    </select>
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="addLanguage" value="+LANGUAGES">
                </div>
            </div>
        </form>
</template>
<script>

export default {
        name:'Language',
            props: {
                Work: Array
            },
        data(){
            return{
                works:[
                    {
                        language: '',
                        fluency: '',
                    }
                ]
            }
        },
        methods : {
            addLanguage(){
                this.works.push({
                    language: '',
                    fluency: '',
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
    select {
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
        margin-top: 3px;
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