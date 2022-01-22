<template>
    <form>
        <div class="mainSection"
            v-for="(educated,count) in educate"
            v-bind:key="count">
            <div class="section">
                <label v-if="!count==0">{{count}}:</label>
                <span v-if="!count==0" @click="deleteTab(count)" class="deleteTab">x</span>
            </div>
            <h4>Education</h4>
            <div class="section">
                <input type="text" placeholder="institution" name="institution" v-model="educated.institution" required> 
                <input type="text" placeholder="URL" name="url" v-model="educated.url" required>
            </div>
            <div class="section">
                <input type="text" placeholder="Area" name="area" v-model="educated.area">
                <input type="text" placeholder="Study Type" name="studyType" v-model="educated.studyType" required>
            </div>    
            <div class="section">     
                <input type="text" placeholder="Start Date" name="startDate" onfocus="(this.type='date')" v-model="educated.startDate" required>
                <input type="text" placeholder="End Date" name="endDate" onfocus="(this.type='date')" v-model="educated.endDate" required>
            </div>
            <div class="section">
                <input type="text" placeholder="Score" v-model="educated.Score" required>
            </div>
        </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="addEducation" value="+EDUCATION">
                </div>
            </div> 
            <Course/>
    </form>
</template>
<script>
    import Course from './Course.vue'

    export default {
        name:'Education',
            props: {
                Education: Array
            },
        components: {
            Course,
        },
        data(){
            return{
                educate:[
                    {
                        institution: '',
                        url: '',
                        area: '',
                        studyType: '',
                        stratDate: '',
                        endDate: '',
                        score: '',
                        course: ''
                    }
                ]
            }
        },
        methods : {
            addEducation(){
                this.educate.push({
                        institution: '',
                        url: '',
                        area: '',
                        studyType: '',
                        stratDate: '',
                        endDate: '',
                        score: '',
                        course: ''
                })
            },
            deleteTab(count){
                 this.educate.splice(count,1)
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