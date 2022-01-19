<template>
        <form>
            <div>
                <div 
                v-for="(work,count) in works"
                v-bind:key="count"><br>
                    <h4>Language</h4>
                    <label >{{count+1}}:</label><br>
                    <input type="text" placeholder="Language" name="language" v-model="work.language" required> 
                    <input type="text" placeholder="Fluency" name="fluency" v-model="work.fluency" required><br>

                </div>
            </div>
                    <button @click="addLanguage">+LANGUAGES</button>
              
        </form>
</template>
<script>

export default {
        name:'Language',
            props: {
                work: Array
            },
        data(){
            return{
                works:[
                    {
                        language: '',
                        fluency: '',
                    }
                ]
            }
        },
        methods : {
            addLanguage(){
                this.works.push({
                    language: '',
                    fluency: '',
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