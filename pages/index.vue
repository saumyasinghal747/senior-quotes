<template>
  <div class="grid gap-10 lg:grid-cols-3 md:grid-cols-2 my-20 mx-20">
    <div
      class="px-10 py-6 col-span-1 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg transition-shadow duration-200 mx-10 md:mx-0 hover:shadow-2xl rounded-xl shadow-md"
     :key="note.timestamp" v-for="note in spsht.body">
      <p  class="text-white">{{note.response}}</p>
      <div class="text-right font-semibold text-sm pt-4 ">
        <span class="text-gray-100 opacity-70">{{note.name || 'Anonymous'}} •  {{note.grade}}</span>

        <span class="text-red-700">• {{ niceDate(note.timestamp) }}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$content}){
    const spsht = await $content('responses').fetch();
    spsht.body = spsht.body.map(e=>{
      e.response = e['Describe a positive memory involving one or more members of the class of 2021'][' What impact did this have on you?']
      e.timestamp = e['Timestamp']
      e.grade = e['What grade are you in?']
      e.name = e['Name (optional)']
      return e
    })
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
