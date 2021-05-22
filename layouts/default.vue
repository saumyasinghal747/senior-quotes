<template>
  <div class="min-h-screen">
  <h1 class="text-4xl pt-20 mx-10 md:mx-20 font-bold text-white">Class of 2021 Send-Off</h1>
    <Nuxt />
    <div class=" px-10 md:px-20 py-5 bg-white bg-opacity-20 text-white  fixed w-full bottom-0 h-16 backdrop-filter backdrop-blur-xl">
      <nuxt-content v-if="footer" :document="footer"/>
    </div>
  </div>
</template>

<style>
body {
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.0), rgba(255,255,255, 0.0)), 
    url("https://wallpaperaccess.com/full/2897934.jpg");
    background: back; /** for showing sean */
    min-height:100vh;

    background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
<script>
// https://i.pinimg.com/originals/75/a3/e8/75a3e8d47a81009cceef996c0410f6b1.jpg
//https://wallpaperaccess.com/full/2897934.jpg
//https://wallpaperaccess.com/full/1442113.jpg

// https://wallpaperaccess.com/full/1320116.jpg
export default {

  data:()=>({footer:null}),
  async fetch(){
    
      const footer = await this.$content('footer').fetch();
      this.footer = footer;
  }
}
</script>
