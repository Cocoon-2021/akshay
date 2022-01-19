<template>
<form>
    <div>
        <div><br>
            <textarea placeholder="Cover Letter" name="CoverLetter" v-model="work.CoverLetter" class="box"></textarea> 
        </div><br>
    </div>
</form>
</template>
<script>
    export default{
        name:'coverletter',
        data(){
            return{
                work:[
                    {
                        CoverLetter: ''
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    form{
        margin-left: 400px;
    }
    .box {
        background: transparent;
        border: none;
        border-bottom: 1px solid #000000;
        outline-style: none;
        padding: 5px 25px;
        margin: 0 4px;
}
</style>
