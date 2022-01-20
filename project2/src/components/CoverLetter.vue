<template>
    <form>
        <div class="mainSection"> 
            <div class="section">
                <textarea placeholder="Cover Letter" name="CoverLetter" v-model="work.CoverLetter" class="box"></textarea> 
            </div>
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
    .box{
        background: transparent;
        border: none;
        border-bottom: 1px solid #000000;
        outline-style: none;
        padding: 21px 24px;
        width: 100%;
        resize: none;
    }
    .mainSection{
        margin: auto;
        justify-content: center;
        width: 40%;
        margin-top: 10mm;
    }
    .section{
        margin: auto;
        display: flex;
        overflow: hidden;
        
    }
</style>
