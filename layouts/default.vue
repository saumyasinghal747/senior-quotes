<template>
  <div class=" ">
  <h1 class="text-4xl pt-20 mx-10 md:mx-20 font-bold text-green-500">Class of 2021 Send-Off</h1>
    <Nuxt />
    <div class=" px-10 md:px-20 py-5 fixed w-full bottom-0 h-16 bg-gray-200">
      <nuxt-content v-if="footer" :document="footer"/>
    </div>
  </div>
</template>

<style>

</style>
<script>
export default {

  data:()=>({footer:null}),
  async fetch(){
    
      const footer = await this.$content('footer').fetch();
      this.footer = footer;
  }
}
</script>
