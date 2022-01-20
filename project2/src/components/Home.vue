<template>
    <div>
        <div v-show = "count === 1">
            <FirstPage/>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="next()" value="Next">
                </div>
            </div>
        </div>
        <div v-show = "count === 2">
            <Work/>
            <div class="mainSection">
                <div class="section">
                    <input type="button" @click="prev()" value="Previous">
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="next()" value="Next">
                </div>
            </div>
        </div>
        <div v-show = "count === 3">
            <Volunteer/>
            <div class="mainSection">
                <div class="section">
                    <input type="button" @click="prev()" value="Previous">
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="next()" value="Next">
                </div>
            </div>
        </div>
        <div v-show = "count === 4">
            <Education/>
            <div class="mainSection">
                <div class="section">
                    <input type="button" @click="prev()" value="Previous">
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="next()" value="Next">
                </div>
            </div>
        </div>
        <div v-show = "count === 5">
            <Awards/>
            <div class="mainSection">
                <div class="section">
                    <input type="button" @click="prev()" value="Previous">
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="next()" value="Next">
                </div>
            </div>
        </div>
        <div v-show = "count === 6">
            <Certificate/>
            <div class="mainSection">
                <div class="section">
                    <input type="button" @click="prev()" value="Previous">
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="next()" value="Next">
                </div>
            </div>
        </div> 
        <div v-show = "count === 7">
            <Publications/>
            <div class="mainSection">
                <div class="section">
                    <input type="button" @click="prev()" value="Previous">
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="next()" value="Next">
                </div>
            </div>
        </div>
        <div v-show = "count === 8">
            <Skills/>
            <div class="mainSection">
                <div class="section">
                    <input type="button" @click="prev()" value="Previous">
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="next()" value="Next">
                </div>
            </div>
        </div>  
        <div v-show = "count === 9">
            <Language/>
            <div class="mainSection">
                <div class="section">
                    <input type="button" @click="prev()" value="Previous">
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="next()" value="Next">
                </div>
            </div>
        </div> 
        <div v-show = "count === 10">
            <Interests/>
            <div class="mainSection">
                <div class="section">
                    <input type="button" @click="prev()" value="Previous">
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="next()" value="Next">
                </div>
            </div>
        </div>
        <div v-show = "count === 11">
            <References/>
            <div class="mainSection">
                <div class="section">
                    <input type="button" @click="prev()" value="Previous">
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="next()" value="Next">
                </div>
            </div>
        </div>
        <div v-show = "count === 12">
            <Projects/>
            <div class="mainSection">
                <div class="section">
                    <input type="button" @click="prev()" value="Previous">
                </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="next()" value="Next">
                </div>
            </div>
        </div> 
        <div v-show = "count === 13">
            <CoverLetter/>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" @click="prev()" value="Previous">
                <input type="button"  value="DOWNLOAD JSON">
                <input type="button"  value="BUILD">
                </div>
            </div>
        </div>     
    </div>
</template>
<script>
    import FirstPage from '../components/FirstPage.vue'
    import Work from '../components/Work.vue'
    import Volunteer from '../components/Volunteer.vue'
    import Education from '../components/Education.vue'
    import Awards from '../components/Awards.vue'
    import Certificate from '../components/Certificate.vue'
    import Publications from '../components/Publications.vue'
    import Skills from '../components/Skills.vue'
    import Language from '../components/Language.vue'
    import Interests from '../components/Interests.vue'
    import References from '../components/References.vue'
    import Projects from '../components/Projects.vue'
    import CoverLetter from '../components/CoverLetter.vue'
    export default{
        name:'Home',
        components:{
            FirstPage,
            Work,
            Volunteer,
            Education,
            Awards,
            Certificate,
            Publications,
            Skills,
            Language,
            Interests,
            References,
            Projects,
            CoverLetter
        },
        data(){
            return{
                count:1,
            }
        },
        methods:{
            next:function(){
                this.count++
            },
            prev:function(){
                this.count--
            }
        }
    }
</script>
<style scoped>
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
        float: right;
    }
    .mainSection{
        margin: auto;
        justify-content: center;
        width: 40%;
        margin-top: 10px;
    }
    .section{
        margin: auto;
        display: flex;
        overflow: hidden;
        float: left;
    }
</style>
