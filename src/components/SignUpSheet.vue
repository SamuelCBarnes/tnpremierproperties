<template>
    <div>
        <form class="signup-layout mx-auto px-32">
            <div class="grid md:grid-flow-col md:grid-cols-1 md:grid-rows-1 gap-4">
                <div class="w-1/2 overflow-hidden">
                    <h3 class="text-gray-800 md:text-2xl font-bold text-center mt-8">
                        Interested? Let's Talk!
                    </h3>
                    <div class="px-4 py-4">
                        <div class="mb-4 px-2 w-full">
                            <label class="block mb-1 text-sm" for="input1">Full name</label>
                            <input id="input1"
                                class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                                type="text" autofocus placeholder="Full name..." v-model="name"/>
                        </div>
                        <div class="mb-4 px-2 w-full">
                            <label class="block mb-1 text-sm" for="input1">Email Address</label>

                            <input id="input1"
                                class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                                type="text" autofocus placeholder="Email Address..." v-model="email"/>
                        </div>
                        <div class="mb-4 px-2 w-full">
                            <label class="block mb-1 text-sm" for="input1">Phone</label>

                            <input id="input1"
                                class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                                type="text" autofocus placeholder="Phone..." v-model="phone"/>
                        </div>
                        <div class="mb-4 px-2 w-full">
                            <label class="block mb-2 text-sm" for="pretext-input">Website</label>

                            <div class="flex w-full">
                                <div
                                    class="bg-gray-100 flex items-center px-4 py-2 border border-r-0 rounded-l text-sm font-medium text-gray-800 select-none">
                                    https://
                                </div>
                                <div class="flex-1">
                                    <input id="pretext-input"
                                        class="w-full border px-4 py-2 rounded-r focus:border-blue-500 focus:shadow-outline outline-none"
                                        type="text" placeholder="website address..." v-model="website"/>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4 px-2 w-full">
                            <label class="block mb-1 text-sm" for="textarea1">Message</label>

                            <textarea id="textarea1"
                                class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                                rows="5" placeholder="Message..." v-model="message"></textarea>
                        </div>
                        <div class="text-gray-700">
                            We're excited to connect. Please complete this form to request a call or email from me.
                        </div> 

                        <div class="mb-4">
                            <button
                                class="mx-2 my-2 px-8 py-4 text rounded text-white bg-orange-500 focus:outline-none hover:bg-orange-400">Contact</button>
                        </div>
                    </div>
                </div>


            </div>

        </form>
        <!-- <p>OUTPUT</p>
        <p>Name: {{ name }}</p>
        <p>Email: {{ email }}</p>
        <p>Phone: {{ phone }}</p>
        <p>Website: {{ website }}</p>
        <p>Message: {{ message }}</p> -->
    </div>
</template>

<script>
export default {
    name: "SignUpSheet",
    data(){
        return{
            name:'',
            email:'',
            phone: '',
            website: '',
            message: ''
        }
    }
}
</script>

<style>

</style>