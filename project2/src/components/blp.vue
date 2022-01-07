<template>
<div class="flag">
    <h2>{{msg}}</h2>
    <form>
        
        <h4>{{head1}}</h4>
            <input type="text" placeholder="Name" required> <input type="text" placeholder="Label"><br>
            <input type="text" placeholder="Image URL"> <input type="email" placeholder="E-mail"><br>
            <input type="text" placeholder="phone"> <input type="text" placeholder="URL"><br>
            <input type="text" placeholder="summary">
        <h4>{{head2}}</h4>
            <input type="text" placeholder="Address"> <input type="text" placeholder="Postal code"><br>
            <input type="text" placeholder="City"> <input type="text" placeholder="Country code"><br>
            <input type="text" placeholder="Region"><br>
            <h4>{{head3}}</h4>
        <div 
        v-for="(profile,count) in profiles"
        v-bind:key="profile"><br>
                <label >{{count+1}}:</label><br>
                <input type="text" placeholder="Network" v-model="profile.network"> <input type="text" placeholder="Username" v-model="profile.username"><br>
                <input type="text" placeholder="URL" v-model="profile.url"> <br>
                
        </div><br>
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
    margin-left: 415px;
    
}
</style>