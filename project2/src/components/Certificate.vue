<template>
        <form>
            <div>
                <div 
                v-for="(work,count) in works"
                v-bind:key="count"><br>
                    <h4>Certificate</h4>
                    <label >{{count+1}}:</label><br>
                    <input type="text" placeholder="Name" v-model="work.name" required> 
                    <input type="text" placeholder="Date" v-model="work.date" required><br>
                    <input type="text" placeholder="URL" v-model="work.url"><br>
                    <input type="text" placeholder="Issuer" v-model="work.issuer" required> 
                    
                </div>
            </div>
                    <highlights/><br>
                    <keywords/><br>
                    <input type="button" @click="addcertificate" value="+certificate">
              
        </form>
</template>
<script>

export default {
        name:'Certificate',
            props: {
                work: Array
            },
        data(){
            return{
                works:[
                    {
                        name: '',
                        date: '',
                        url: '',
                        issuer: '',
                    }
                ]
            }
        },
        methods : {
            addWorks(){
                this.works.push({
                    name: '',
                    date: '',
                    url: '',
                    issuer: '',
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