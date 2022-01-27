<template>
        <form>
            <div class="mainSection"
                v-for="(work,count) in works"
                v-bind:key="count">
                <div class="section">
                    <label v-if="!count==0">{{count}}:</label>
                    <span v-if="!count==0" @click="deleteTab(count)" class="deleteTab">x</span>
                </div>
                    <h4 v-if="count==0">Certificate</h4>
                <div class="section">
                    <input type="text" placeholder="Name" name="name" v-model="work.name" required> 
                    <input type="text" placeholder="Date" name="date" v-model="work.date" onfocus="(this.type='date')" required>
                </div>
                <div class="section">
                    <input type="text" placeholder="URL" name="url" v-model="work.url">
                    <input type="text" placeholder="Issuer" name="issuer" v-model="work.issuer" required> 
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="addCertificate" value="+certificate">
                </div>
            </div>
        </form>
</template>
<script>

export default {
        name:'Certificate',
            props: {
                work: Array
            },
        data(){
            return{
                works:[
                    {
                        name: '',
                        date: '',
                        url: '',
                        issuer: '',
                    }
                ]
            }
        },
        methods : {
            addCertificate(){
                this.works.push({
                    name: '',
                    date: '',
                    url: '',
                    issuer: '',
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
    input[type=date] {
        background: transparent;
        border: none;
        border-bottom: 1px solid #000000;
        outline-style: none;
        padding: 10px 25px;
        margin-left: 7px;
        width: 50%;
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