<template>
<div>
    <form>
        <div class="mainSection">
            <h4>Basics</h4>
            <div class="section">
                <input type="text" placeholder="name" name="name" v-model="home.name">
                <input type="text" placeholder="Label" name="label" v-model="home.label">
            </div>
            <div class="section">
                <input type="text" placeholder="Image URL" name="imageUrl" v-model="home.imageUrl">
                <input type="email" placeholder="Email" name="email" v-model="home.email">
            </div>
            <div class="section">
                <input type="text" placeholder="Phone" name="phone" v-model="home.phone">
                <input type="text" placeholder="URL" name="url" v-model="home.url">
            </div>
            <div class="section"><textarea placeholder="summary" name="summary" v-model="home.summary" class="box"></textarea></div>
        </div>
        <div class="mainSection">
            <h4>Location</h4>
            <div class="section">
                <input type="text" placeholder="Address" name="address" v-model="home.address">
                <input type="text" placeholder="Postal code" name="postalCode" v-model="home.postalCode">
            </div>
            <div class="section">
                <input type="text" placeholder="City" name="city" v-model="home.city">
                <input type="text" placeholder="Country Code" name="countryCode" v-model="home.countryCode">
            </div>
            <div class="section" style="float:left;">
                <input type="text" placeholder="Region" name="region" v-model="home.region">
            </div>
        </div>
        <Profile/>
    </form>
     <!-- test:{{home}} -->
</div>
</template>
<script>
    import Profile from '../components/Profile.vue'
    export default{
        name:'FirstPage',
        components:{
            Profile
        },
        data(){
            return{
            home:{
                name: '',
                label: '',
                imageUrl: '',
                email: '',
                phone: '',
                summary: '',
                address: '',
                postalCode: '',
                city: '',
                countryCode: '',
                region: ''
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

    input[type=email] {
        background: transparent;
        border: none;
        border-bottom: 1px solid #000000;
        outline-style: none;
        padding: 10px 25px;
        margin: 0 4px;
    }

    .box{
        background: transparent;
        border: none;
        border-bottom: 1px solid #000000;
        outline-style: none;
        padding: 21px 24px;
        width: 100%;
    }

    .section{
        margin: auto;
        display: flex;
        overflow: hidden;
        
    }

    .mainSection{
        margin: auto;
        justify-content: center;
        width: 40%;
    }
</style>
