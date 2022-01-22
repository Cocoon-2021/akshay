<template>
    <form>
        <div>
            <div class="mainSection"
                v-for="(volunter,count) in volunteers"
                v-bind:key="count">
                <div class="section">
                    <label v-if="!count==0">{{count}}:</label>
                    <span v-if="!count==0" @click="deleteTab(count)" class="deleteTab">x</span>
                </div>
                <h4>Volunteer</h4>
                <div class="section">
                    <input type="text" placeholder="Organization" name="organisation" v-model="volunter.organisation"> 
                    <input type="text" placeholder="Position" name="position" v-model="volunter.position" required>
                </div>
                <div class="section">
                    <input type="text" placeholder="URL" name="url" v-model="volunter.url" required>
                    <input type="text" placeholder="Start Date" name="startDate" onfocus="(this.type='date')" v-model="volunter.startDate">
                </div>
                <input type="text" placeholder="End Date" name="endDate" onfocus="(this.type='date')" v-model="volunter.endDate">
                <div class="section">
                    <textarea placeholder="summary" name="summary" v-model="volunter.summary" class="box"></textarea>
                </div>
            </div>
                <div class="mainSubSection">
                    <div class="subSection">
                        <input type="button" @click="addVolunteer" value="+VOLUNTEER">
                    </div>
                </div>
        </div>
            <Highlights/>
    </form>
</template>

<script>
    import Highlights from './Highlights.vue'

    export default{
        name:'Volunteer',
            props:{
                Volunteer:Array
            },
            components:{
                Highlights
            },
            data(){
                return{
                    volunteers:[
                        {
                            organisation: '',
                            position: '',
                            url: '',
                            stratDate: '',
                            endDate: '',
                            summary: ''
                        }
                    ]
                }
            },
            methods : {
                addVolunteer(){
                    this.volunteers.push({
                            organisation: '',
                            position: '',
                            url: '',
                            stratDate: '',
                            endDate: '',
                            summary: ''
                    })
                },
                deleteTab(count){
                    this.volunteers.splice(count,1)
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
    input[type=date] {
        background: transparent;
        border: none;
        border-bottom: 1px solid #000000;
        outline-style: none;
        padding: 10px 0px;
        margin:0 4px;
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