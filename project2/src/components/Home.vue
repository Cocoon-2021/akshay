<template>
    <div class="flag">
        <headers msg="Resume Builder Application"/>
            <form>
        
                <h4>Basics</h4>
                <input type="text" placeholder="Name" required> 
                <input type="text" placeholder="Label"><br>
                <input type="text" placeholder="Image URL"> 
                <input type="email" placeholder="E-mail" required><br>
                <input type="text" placeholder="phone" required>
                <input type="text" placeholder="URL" required><br>
                <input type="text" placeholder="summary">

                <h4>Location</h4>
                <input type="text" placeholder="Address" required> 
                <input type="text" placeholder="Postal code" required><br>
                <input type="text" placeholder="City" required> 
                <input type="text" placeholder="Country code" required><br>
                <input type="text" placeholder="Region" required><br>

                <h4>Profile</h4>
                <profile :profiles="profiles"/><br>
                
                <button @click="addProfiles">+profile</button><br>
                <buttons/>
            </form>
    </div>
</template>

<script>
    import headers from './headers.vue'
    import profile from './profile.vue'
    import buttons from './buttons.vue'

export default{
            name: 'blp',
                components:{
                    headers,
                    profile,
                    buttons
                },
    props: {
        msg:String,
    },
    data() { 
        return {
            profiles: [
                {
                    network: '',
                    username: '',
                    url: ''
                }
            ]
        }
    },
    methods: {
        addProfiles() {
            this.profiles.push( {
                network:'',
                username:'',
                url:''
            } )
        }
    }   
}   
</script>

<style scoped>
.flag {
    background-color: #f2f2f2;
}

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

input[type=email] {
    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    outline-style: none;
    padding: 10px 25px;
    margin: 0 4px;
}

</style>