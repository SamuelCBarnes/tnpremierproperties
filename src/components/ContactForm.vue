<template>
    <div>
        <h2>Contact Form</h2>
        <form class="contact-form">
            <label>Email</label>
            <input type="email" required v-model="email" />
            <label>Phone</label>
            <input type="text" required v-model="phone" />
            <label>Role</label>
            <select v-model="role">
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>

            </select>
        </form>
        <p>Email: {{ email }}</p>
        <p>Phone: {{ phone }}</p>
        <p>Role: {{ role }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            phone:'',
            role:''
        }
    }
}
</script>

<style>
.contact-form {
    max-width: 420px;
    border-radius: 10px;
    text-align:left;
    margin: 25px 0px 15px;
    font-size: 0.6em;
    text-transform: uppercase;
}

input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;

}
</style>