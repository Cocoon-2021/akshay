<template>
        <form>
            <div class="mainSection"
                v-for="(work,count) in works"
                v-bind:key="count">
                <div class="section">
                    <label v-if="!count==0">{{count}}:</label>
                    <span v-if="!count==0">x</span>
                </div>
                <h4>Work</h4>
                <div class="section">
                    <input type="text" placeholder="Name" name="name" v-model="work.name"> 
                    <input type="text" placeholder="Location" name="location" v-model="work.location" required>
                </div>
                <div class="section">
                    <textarea placeholder="Description" name="description" v-model="work.summary" class="box"></textarea>
                </div> 
                <div class="section">
                    <input type="text" placeholder="Position" name="position" v-model="work.position">
                    <input type="text" placeholder="URL" name="url" v-model="work.url" required>
                </div>
                <div class="section">
                    <input type="text" placeholder="Start Date" name="StartDate" v-model="work.StartDate">
                    <input type="text" placeholder="End Date" name="EndDate" v-model="work.EndDate" required>
                </div>
                <div class="section">
                    <textarea placeholder="summary" name="summary" v-model="work.summary" class="box"></textarea>
                </div>
            </div>
            <Highlights/>
            <KeyWords/>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" value="+WORK" @click="addWorks">
                </div>
            </div>
        </form>
        <!-- work:{{works}} -->
</template>
<script>
    import Highlights from './Highlights.vue'
    import KeyWords from './KeyWords.vue'
    export default{
    components: { 
        Highlights,
        KeyWords 
        },
        name:'  Work',
        props:{
            Work: Array
        },
        data()  {
            return  {
                works:[  {
                    name: '',
                    location: '',
                    description: '',
                    position: '',
                    url: '',
                    startDate: '',
                    endDate: '',
                    summary: ''
                }]
            }
        },
        methods : {
            addWorks() {
                this.works.push( {
                    name: '',
                    location: '',
                    description: '',
                    position: '',
                    url: '',
                    startDate: '',
                    endDate: '',
                    summary: ''
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
        padding: 10px 25px;
        margin: 0 4px;
    }
    .box{
        background: transparent;
        border: none;
        border-bottom: 1px solid #000000;
        outline-style: none;
        padding: 21px 24px;
        width: 100%;
        resize: none;
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
</style>
