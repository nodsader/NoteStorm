<script setup lang="ts">

</script>

<template>
 <div class="flex bg-black h-screen">
   <!--sidebar-->
   <div class="bg-zinc-900 w-md p-8">
     <Logo/>
      <h1 class="text-white text-lg font-bold mt-8">Sign up for a free account</h1>
      <p class="text-txt-primary text-sm mt-0.5">Already registered ? <span class="font-bold text-yellow underline">Log in</span> to your account</p>
     <div class="mt-8">
       <label for="" class="text-white text-sm mb-0.5">Email</label>
       <input type="email" placeholder="you@example.com" class="bg-input block border border-border rounded text-white px-4 py-1.5 w-full placeholder:text-zinc-500 text-sm"/>
     </div>

     <div class="mt-6">
       <label for="" class="text-white text-sm mb-0.5">Password</label>
       <input type="password" placeholder="*******" class="bg-input block border border-border rounded text-white px-4 py-1.5 w-full placeholder:text-zinc-500 text-sm"/>
     </div>

<!--     sign up button -->
     <div>
       <button class="w-full mt-4 bg-yellow rounded-full py-2 text-sm font-bold flex justify-center items-center space-x-2"><span>Sign Up</span>
       <arrow/>
       </button>
     </div>
<!--     /signup-->
   </div>

   <!-- /sidebar -->
   <!-- Note introduction  -->
   <div></div>
   <!-- /note intro   -->
 </div>
</template>

<style scoped>

</style>