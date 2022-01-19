<template>
    <div>
        <div 
        v-for="(work,count) in works"
        v-bind:key="count" >
            <label >{{count+1}}:</label>
            <h4>Roles</h4>
                        <div>
                            <input type="text" placeholder="Start Date" name="StartDate" v-model="work.StartDate"> 
                            <input type="text" placeholder="End Date" name="EndDate" v-model="work.EndDate" required>
                            <input type="text" placeholder="URL" name="Url" v-model="work.Url" required>
                        </div>
                        <div>
                            <input type="text" placeholder="Roles" name="Roles" v-model="work.Roles">
                        </div> 
    </div>
        <input type="button" value="+Roles" @click="addRoles">
    </div>
</template>
<script>
    export default{
        name:'Roles',
            props:{
                Roles: Array
            },
        data() {
            return{
                works:[
                    {
                        StartDate: '',
                        EndDate: '',
                        Url: '',
                        Role: ''
                    }]
                
            }
        },
        methods : {
            addRoles() {
                this.works.push( {
                        StartDate: '',
                        EndDate: '',
                        Url: '',
                        Role: ''
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
