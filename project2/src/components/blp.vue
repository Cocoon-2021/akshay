<template>
<div class="flag">
    <h2>{{msg}}</h2>
    <form>
        
        <h4>{{head1}}</h4>
            <input type="text" placeholder="Name" required> <input type="text" placeholder="Label"><br>
            <input type="text" placeholder="Image URL"> <input type="email" placeholder="E-mail" required><br>
            <input type="text" placeholder="phone" required> <input type="text" placeholder="URL" required><br>
            <input type="text" placeholder="summary">
        <h4>{{head2}}</h4>
            <input type="text" placeholder="Address" required> <input type="text" placeholder="Postal code" required><br>
            <input type="text" placeholder="City" required> <input type="text" placeholder="Country code" required><br>
            <input type="text" placeholder="Region" required><br>
        <h4>{{head3}}</h4>
            <profile :profiles="profiles"/><br>
        <button @click="addProfiles">+profile</button><br>
        <button class="btn-primary">Next</button>
    </form>
</div>
</template>

<script>

import profile from './profile.vue'

export default{
    name:'blp',
    props: {
        msg:String,
    },
    components: {
        profile
    },
    data(){ 
    return {
        head1:"Basics",
        head2:"Location",
        head3:"Profile",
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
form{
    margin-left: 400px;
}
h2{
    text-align: center;
}
input[type=text] {
    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    outline-style: none;
    padding: 10px 25px;
}
input[type=email] {
    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    outline-style: none;
    padding: 10px 25px;
}
.btn-primary{
    margin-left: 465px;
    
}
</style>