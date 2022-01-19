<template>
    <form>
        <div>
            <div 
            v-for="(volunter,count) in volunteers"
            v-bind:key="count"><br>
                <h4>Volunteer</h4>
                <label >{{count+1}}:</label><br>
                <input type="text" placeholder="Organization" volunter.organisation> 
                <input type="text" placeholder="Position" volunter.position required><br>
                <input type="text" placeholder="URL" volunter.url required>
                <input type="text" placeholder="Start Date" volunter.startDate> <br>
                <input type="text" placeholder="End Date" volunter.endDate><br>
                <input type="text" placeholder="Summary" volunter.summary><br>
            </div>
        </div>
                <highlights/><br>
                <input type="button" @click="addVolunteer" value="+VOLUNTEER">
    </form>
</template>

<script>
    import Highlights from './Highlights.vue'

    export default{
        name:'Volunteer',
            props:{
                Volunteer:Array
            },
            components:{
                Highlights
            },
            data(){
                return{
                    volunteers:[
                        {
                            organisation: '',
                            position: '',
                            url: '',
                            stratDate: '',
                            endDate: '',
                            summary: ''
                        }
                    ]
                }
            },
            methods : {
                addVolunteer(){
                    this.volunteers.push({
                            organisation: '',
                            position: '',
                            url: '',
                            stratDate: '',
                            endDate: '',
                            summary: ''
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

    .second-btn {
        margin-left: 395px;
    }
</style>