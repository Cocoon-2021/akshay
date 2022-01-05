<template>
<div class="flag">
    <form>
        <h2>Resume Builder Application</h2>
        <h4>Basics</h4>
            <input type="text" placeholder="Name" required> <input type="text" placeholder="Label"><br>
            <input type="text" placeholder="Image URL"> <input type="email" placeholder="E-mail"><br>
            <input type="text" placeholder="phone"> <input type="text" placeholder="URL"><br>
            <input type="text" placeholder="summary">
        <h4>Location</h4>
            <input type="text" placeholder="Address"> <input type="text" placeholder="Postal code"><br>
            <input type="text" placeholder="City"> <input type="text" placeholder="Country code"><br>
            <input type="text" placeholder="Region"><br>
            <h4>Profile</h4>
        <div 
        v-for="(profile,count) in profiles"
        v-bind:key="profile"><br>
                <label >{{count+1}}:</label><br>
                <input type="text" placeholder="Network" v-model="profile.network"> <input type="text" placeholder="Username" v-model="profile.username"><br>
                <input type="text" placeholder="URL" v-model="profile.url"> <br>
                
        </div>
        <button @click="addProfiles">+profile</button><br>
        <button class="btn-primary">Next</button>
    </form>
</div>
</template>

<script>
export default{
    name:'blp',
    props: {
        msg:String
    },
    data(){
    return {
       profiles:[
       {
      network:'',
      username:'',
      url:''
       }
     ]
    }
  },
  methods : {
    addProfiles(){
      this.profiles.push({
        network:'',
        username:'',
        url:''
      })
    }
  }   
}
</script>

<style scoped>
.flag{
    background-color: #f2f2f2;
}
h2{
    text-align: center;
}
input[type=text] {
    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
}
input[type=email] {
    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
}
.btn-primary{
    float: right;
    
}
</style>