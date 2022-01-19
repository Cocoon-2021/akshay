<template>

        <div>
            <div 
            v-for="(work,count) in works"
            v-bind:key="count" ><br>
                <label >{{count+1}}:</label><br>
                <input type="text" placeholder="Keywords" name="key" v-model="work.key"><br> 
            </div><br>
                <input type="button" @click="addKeywords" value="+KEYWORDS"><br>
        </div>

</template>
<script>
    export default{
        name:'KeyWords',
            props:{
            work:Array
        },
        data(){
            return{
                works:[
                    {
                        key:''
                    }
                ]
            }
        },
        methods : {
            addKeywords(){
                this.works.push( {
                    key:''
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
