<template>
        <form>
            <div>
                <div 
                v-for="(educated,count) in educate"
                v-bind:key="count"><br>
                    <h4>Education</h4>
                    <label >{{count+1}}:</label><br>
                    <input type="text" placeholder="institution" v-model="educated.institution" required> 
                    <input type="text" placeholder="URL" v-model="educated.url" required><br>
                    <input type="text" placeholder="Area" v-model="educated.area">
                    <input type="text" placeholder="Study Type" v-model="educated.studyType" required><br>
                    <input type="text" placeholder="Start Date" v-model="educated.startDate" required>
                    <input type="text" placeholder="End Date" v-model="educated.endDate" required><br>
                    <input type="text" placeholder="Score" v-model="educated.Score" required><br>
                    <input type="text" placeholder="Course" v-model="educated.course" required><br>
                    
                </div>
            </div>
                    <Course/><br>
                    <button @click="addEducation">+EDUCATION</button><br>
              
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
            }
        }
    }

</script>
<style scoped>
    form{
        margin-left: 360px;
    }
    input[type=text] {
        background: transparent;
        border: none;
        border-bottom: 1px solid #000000;
        outline-style: none;
        padding: 10px 25px;
        margin: 0 4px;
    }
    .second-btn{
        margin-left: 395px;
    }
</style>