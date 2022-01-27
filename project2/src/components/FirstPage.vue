<template>
<div class="colorings">
    <form @click="funCall()" method="POST">
        <div class="mainSection">
            <h4>Basics</h4>
            <div class="section">
                <input type="text" placeholder="name" name="name" v-model="home.name" 
                :class="{ 'is-invalid': submitted && $v.home.name.$error }">
                <input type="text" placeholder="Label" name="label" v-model="home.label">
            </div>
            <div class="section">
                <span v-if="submitted && !$v.home.name.required" >*Name field is required</span>
                <span v-if="submitted && !$v.home.name.minLength">*Name should be atlest 5 characters</span>
            </div>
            <div class="section">
                <input type="text" placeholder="Image URL" name="imageUrl" v-model="home.imageUrl"
                :class="{ 'is-invalid': submitted && $v.home.imageUrl.$error }">
                <input type="email" placeholder="Email" name="email" v-model="home.email">
            </div>
            <div class="section">
                <span v-if="submitted && !$v.home.imageUrl.required" >*image url field is required</span>
            </div>
            <div class="section">
                <input type="text" placeholder="Phone" name="phone" v-model="home.phone">
                <input type="text" placeholder="URL" name="url" v-model="home.url">
            </div>
            <div class="section">
                <textarea placeholder="summary" name="summary" v-model="home.summary" class="box"></textarea>
            </div>
        </div>
        <div class="mainSection">
            <h4>Location</h4>
            <div class="section">
                <input type="text" placeholder="Address" name="address" v-model="home.address"
                :class="{ 'is-invalid': submitted && $v.home.address.$error }">
                <input type="text" placeholder="Postal code" name="postalCode" v-model="home.postalCode">
            </div>
            <div class="section">
                <span v-if="submitted && !$v.home.address.required" class="invalid">*Addeess field is required</span>
            </div>
            <div class="section">
                <input type="text" placeholder="City" name="city" v-model="home.city">
                <select v-model="home.countryCode"> 
                        <option value="">Select</option>
                        <option value="IND">IND</option>
                        <option value="US">US</option>
                    </select>
            </div>
            <div class="section" style="float:left;">
                <input type="text" placeholder="Region" name="region" v-model="home.region">
            </div>
        </div>
        <Profile/>
    </form>
</div>
</template>
<script>
    import {required,minLength} from 'vuelidate/lib/validators'
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
    },
    validations:{
        home:{
            name:{
                required,
                minLength: minLength(5)
            },
            imageUrl:{
                required
            },
            address:{
                required
            }
        }
    },
    methods:{
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
    select {
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
        resize: none;
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
    span{
        font-size:12px;
        color: red;
    }
</style>
