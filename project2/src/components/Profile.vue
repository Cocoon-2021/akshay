<template>
    <form @click="funCall()">
        <div>
            <div class="mainSection"
                v-for="(profile,count) in profiles"
                v-bind:key="count"  >
                <div class="section">
                    <label v-if="!count==0">{{count}}:</label>
                    <span v-if="!count==0" @click="deleteTab(count)" class="deleteTab">x</span>
                </div>
                    <h4 v-if="count==0">Profile</h4>
                        <div class="section">
                            <input type="text" placeholder="Network" name="network" v-model="profile.network"> 
                            <input type="text" placeholder="URL" name="url" v-model="profile.url" required>
                        </div>
                        <div class="section">
                            <input style="float:left;" type="text" placeholder="Username" name="username" v-model="profile.username"
                            :class="{ 'is-invalid': submitted && $v.profiles.username.$error }">
                        </div> 
                        <div class="section">
                            <span v-if="submitted && !$v.profiles.username.required" class="invalid">*username field is required</span>
                        </div>
            </div>
            <div class="mainSubSection">
                <div class="subSection">
                    <input type="button" value="+profile" @click="addProfiles">
                </div>
            </div>
        </div>
    </form>
</template>
<script>
    import {required} from 'vuelidate/lib/validators'

    export default{
        name:'Profile',
            props:{
                Profile: Array
            },
        data() {
            return{
                profiles:[
                    {
                        network: '',
                        url: '',
                        username: ''
                    }]
                
            }
        },
        validations:{
        profiles:{
            username:{
                required
                }
            }
        },
        methods : {
            addProfiles() {
                this.profiles.push( {
                    network: '',
                    url: '',
                    username: ''
                })
            },
            deleteTab(count){
                 this.profiles.splice(count,1)
            },
            funCall(){
                this.submitted = true

                this.$v.$touch()
                if(this.$v.$invalid){
                    return true
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
        padding: 10px 23px;
        margin: 0 4px;
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
    .deleteTab{
        cursor: pointer;
    }
    span{
        font-size:12px;
        color: red;
    }
</style>
