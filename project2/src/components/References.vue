<template>
        <form>
            <div>
                <div 
                v-for="(work,count) in works"
                v-bind:key="count"><br>
                    <h4>References</h4>
                    <label >{{count+1}}:</label><br>
                    <input type="text" placeholder="name" name="name" v-model="work.name" required> 
                    <input type="text" placeholder="References" name="references" v-model="work.references" required><br>

                </div>
            </div>
                    <input type="button" @click="addReferences" value="+REFERENCES">
              
        </form>
</template>
<script>

export default {
        name:'References',
            props: {
                work: Array
            },
        data(){
            return{
                works:[
                    {
                        name: '',
                        references: '',
                    }
                ]
            }
        },
        methods : {
            addReferences(){
                this.works.push({
                    name: '',
                    references: '',
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