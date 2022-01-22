<template>
        <div>
            <div class="mainSection"
            v-for="(coursed,count) in courses"
            v-bind:key="count" >
                <div class="section">
                    <label v-if="!count==0">{{count}}:</label>
                    <span v-if="!count==0" @click="deleteTab(count)" class="deleteTab">x</span>
                </div>
                <div class="section">
                    <input type="text" placeholder="Course" name="course" v-model="coursed.course">
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="addCourses" value="+COURSES">
                </div>
            </div>
        </div>

</template>
<script>
    export default{
        name:'Course',
            props:{
            Course:Array
        },
        data(){
            return{
                courses:[
                    {
                        course:''
                    }
                ]
            }
        },
        methods : {
            addCourses(){
                this.courses.push( {
                    course:''
                } )
            },
            deleteTab(count){
                this.courses.splice(count,1)
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
        margin-top: 15px;
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
