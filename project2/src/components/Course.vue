<template>
    <div>
        <div 
        v-for="(work,count) in works"
        v-bind:key="count" ><br>
            <label >{{count+1}}:</label><br>
            <input type="text" placeholder="Courses" name="course" v-model="work.course"><br> 
        </div><br>
            <input type="button" @click="addKeywords" value="+COURSES">
    </div>
</template>
<script>
    export default{
        name: 'Course',
            props:{
            Course:Array
        },
        data(){
            return{
                works:[
                    {
                        course:''
                    }
                ]
            }
        },
        methods : {
            addKeywords(){
                this.works.push( {
                    course: ''
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
</style>
