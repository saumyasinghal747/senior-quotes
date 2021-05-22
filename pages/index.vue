<template>
  <div class="grid gap-10 lg:grid-cols-3 md:grid-cols-2 my-20 mx-20">
    <div
      class="px-10 py-6 col-span-1 bg-white mx-10 md:mx-0 rounded-md shadow-lg"
     :key="note.timestamp" v-for="note in spsht.body">
      <p>{{note.response}}</p>
      <div class="text-right pt-4 text-gray-400">{{note.name || 'Anonymous'}} - {{note.grade}}</div>
    </div>
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
