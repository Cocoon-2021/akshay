<template>
    <div>
        <div 
        v-for="(work,count) in works"
        v-bind:key="count" ><br>
            <label >{{count+1}}:</label><br>
            <input type="text" placeholder="Highlights" v-model="work.high"><br> 
        </div><br>
            <input type="button" @click="addHighlights" value="+HIGHLIGHTS"><br>
        data:{{works}}
    </div>

</template>
<script>
    export default{
        name:'highlights',
            props:{
                highlights: Array
            },
        data() {
            return{
                works:[
                    {
                        high: ''
                    }
                ]
            }
        },
        methods : {
            addHighlights() {
                this.works.push( {
                    high:''
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
        padding: 5px 25px;
        margin: 0 4px;
}
</style>
