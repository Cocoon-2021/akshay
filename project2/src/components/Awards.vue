<template>
    <form>
        <div>
            <div 
            v-for="(work,count) in works"
            v-bind:key="count" ><br>
                <h4>Awards</h4>
                <label >{{count+1}}:</label><br>
                <input type="text" placeholder="Title" name="title" v-model="work.title">
                <input type="text" placeholder="Date" name="date" v-model="work.date"><br>
                <input type="text" placeholder="Awarder" name="awards" v-model="work.awarder"><br>
                <input type="text" placeholder="Summary" name="summary" v-model="work.summary">
            </div><br>
                <input type="button" @click="addAwards" value="+AWARDS">
        </div>
    </form>
</template>
<script>
    export default{
        name:'awards',
            props:{
            awards:Array
        },
        data(){
            return{
                works:[
                    {
                        title: '',
                        date: '',
                        awards: '',
                        summary: ''
                    }
                ]
            }
        },
        methods : {
            addAwards(){
                this.works.push( {
                        title: '',
                        date: '',
                        awards: '',
                        summary: ''
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
