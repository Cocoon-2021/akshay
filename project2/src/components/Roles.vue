<template>
    <div>
        <div class="mainSection"
            v-for="(work,count) in works"
            v-bind:key="count" >
            <div class="section">
                <label v-if="!count==0">{{count}}:</label>
                <span v-if="!count==0">x</span>
            </div>
            <h4>Roles</h4>
            <div class="section">
                <input type="text" placeholder="Start Date" name="StartDate" v-model="work.StartDate"> 
                <input type="text" placeholder="End Date" name="EndDate" v-model="work.EndDate" required>
            </div> 
            <div class="section">
                <input type="text" placeholder="URL" name="Url" v-model="work.Url" required>
            </div>
            <div class="section">
                <input type="text" placeholder="Roles" name="Roles" v-model="work.Roles">
            </div> 
        </div>
        <div class="mainSubSection">
            <div class="subSection">
                <input type="button" value="+Roles" @click="addRoles">
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'Roles',
            props:{
                Roles: Array
            },
        data() {
            return{
                works:[
                    {
                        StartDate: '',
                        EndDate: '',
                        Url: '',
                        Role: ''
                    }]
                
            }
        },
        methods : {
            addRoles() {
                this.works.push( {
                        StartDate: '',
                        EndDate: '',
                        Url: '',
                        Role: ''
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
