<template>
        <form>
            <div class="mainSection"
                v-for="(work,count) in works"
                v-bind:key="count">
                <div class="section">
                    <label v-if="!count==0">{{count}}:</label>
                    <span v-if="!count==0">x</span>
                </div>
                    <h4 v-if="count==0">References</h4>
                    <div class="section">
                        <input type="text" placeholder="name" name="name" v-model="work.name" required> 
                        <input type="text" placeholder="References" name="references" v-model="work.references" required><br>
                    </div>
            </div>
                <div class="mainSubSection">
                    <div class="subSection">
                        <input type="button" @click="addReferences" value="+REFERENCES">
                    </div>
                </div>
        </form>
</template>
<script>

export default {
        name:'References',
            props: {
                work: Array
            },
        data(){
            return{
                works:[
                    {
                        name: '',
                        references: '',
                    }
                ]
            }
        },
        methods : {
            addReferences(){
                this.works.push({
                    name: '',
                    references: '',
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