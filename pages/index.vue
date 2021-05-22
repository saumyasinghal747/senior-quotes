<template>
  <div class="grid gap-10 lg:grid-cols-3 md:grid-cols-2 my-20 mx-20">
    <div
      class="px-10 py-6 col-span-1 bg-white transition-shadow duration-200 mx-10 md:mx-0 hover:shadow-2xl rounded-xl shadow-lg"
     :key="note.timestamp" v-for="note in spsht.body">
      <p>{{note.response}}</p>
      <div class="text-right text-sm pt-4 ">
        <span class="text-gray-500">{{note.name || 'Anonymous'}} - {{note.grade}}</span>

        <span class="text-green-500">• {{ niceDate(note.timestamp) }}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$content}){
    const spsht = await $content('testsheet1').fetch();
    return {spsht}
  },
methods:{
  niceDate(text){
      const d = new Date(text);
      return `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`
  }
}

}
</script>

<style>

</style>
