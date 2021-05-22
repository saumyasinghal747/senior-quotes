<template>
  <div class="container">
    {{spsht}}
  </div>
</template>

<script>
export default {
  async asyncData({$content}){
    const spsht = await $content('testsheet1').fetch();
    return {spsht}
  }

}
</script>

<style>

</style>
