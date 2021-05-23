<template>
  
<div 
      class="px-10 pb-12 my-3 transform translate-x-0 py-6 col-span-1 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg transition-shadow duration-200 mx-0 hover:shadow-2xl rounded-xl shadow-md">
      <p  class="text-white whitespace-pre-wrap pb-10">{{note.response}}</p>
      <div class="text-right fixed bottom-6  right-10 font-semibold text-xs  ">
        <span class="text-gray-100 opacity-70">{{note.name || 'Anonymous'}} •  {{note.grade}}</span>

        <span class="text-red-700">• {{ niceDate(note.timestamp) }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:['note'],
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