<template>
    <div>
        <div 
        v-for="(profile,count) in profiles"
        v-bind:key="count"  class="mainSection">
            <div class="section">
                <label style="margin-top:15px" v-if="!count==0">{{count}}:</label>
                <span v-if="!count==0">x</span>
            </div>
            <h4 v-if="count==0">Profile</h4>
                        <div class="section">
                            <input type="text" placeholder="Network" name="network" v-model="profile.network"> 
                            <input type="text" placeholder="URL" name="url" v-model="profile.url" required>
                        </div>
                        <div class="section" style="fwidth:100%">
                            <input style="float:left;" type="text" placeholder="Username" name="username" v-model="profile.username">
                        </div> 
        <!-- profile:{{profiles}} -->
    </div>
    <div class="mainSubSection">
      <div class="subSection"><input type="button" value="+profile" @click="addProfiles"></div></div>
    </div>
</template>
<script>
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
        methods : {
            addProfiles() {
                this.profiles.push( {
                    network: '',
                    url: '',
                    username: ''
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
