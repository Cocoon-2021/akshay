<template>
    <div>
        <form>
            <div>
                <h4>work</h4>
                <input type="text" placeholder="Name" name="name" v-model="works.name">
                <input type="text" placeholder="Location" name="location" v-model="works.location">
                <input type="text" placeholder="Description" name="description" v-model="works.description">
                <input type="text" placeholder="Position" name="position" v-model="works.position">
                <input type="text" placeholder="URL" name="url" v-model="works.url">
                <input type="text" placeholder="Start Date" name="startDate" v-model="works.startDate">
                <input type="text" placeholder="End Date" name="endDate" v-model="works.endDate">
                <input type="text" placeholder="Summary" name="summary" v-model="works.summary">
            </div>
            <Highlights/>
        </form>
        work:{{works}}
    </div>
</template>
<script>
    import Highlights from './Highlights.vue'
    export default{
    components: { 
        Highlights 
        },
        name:'  Work',
        data()  {
            return  {
                works:  {
                    name: '',
                    location: '',
                    description: '',
                    position: '',
                    url: '',
                    startDate: '',
                    endDate: '',
                    summary: ''
                }
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
</style>
