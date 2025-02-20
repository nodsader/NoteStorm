<script setup lang="js">
const email = ref('')
const password = ref('')

async function submit () {

 const response = await $fetch('/api/user', {
    method: 'POST',
    body: {
      email: email.value,
      password: password.value,
    },
  })

  console.log(response)
}
</script>

<template>
 <div class="flex bg-black h-screen">
   <!--sidebar-->
   <div class="bg-zinc-900 w-md p-12 flex flex-col justify-center">
     <Logo/>
      <h1 class="text-white text-lg font-bold mt-4">Sign up for a free account</h1>
      <p class="text-txt-primary text-sm mt-0.5">Already registered ? <span class="font-bold text-yellow underline">Log in</span> to your account</p>

     <form @submit.prevent="submit">
       <div class="mt-8">
         <label for="" class="text-white text-sm mb-0.5">Email</label>
         <input v-model="email" type="email" placeholder="you@example.com" class="bg-input block border border-border rounded text-white px-4 py-1.5 w-full placeholder:text-zinc-500 text-sm"/>
       </div>

       <div class="mt-6">
         <label for="" class="text-white text-sm mb-0.5">Password</label>
         <input  v-model="password" type="password" placeholder="*******" class="bg-input block border border-border rounded text-white px-4 py-1.5 w-full placeholder:text-zinc-500 text-sm"/>
       </div>

  <!--     sign up button -->
       <div>
         <button class="z-10 w-full mt-4 bg-yellow rounded-full py-2 text-sm font-bold flex justify-center items-center space-x-2">
           <span>Sign Up</span>
           <arrow/>
         </button>
       </div>
  <!--     /signup-->
     </form>
   </div>

   <!-- /sidebar -->
   <!-- Note introduction  -->
   <div></div>
   <!-- /note intro   -->
 </div>
</template>

<style scoped>

</style>