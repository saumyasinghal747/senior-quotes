<template>

  <div  
  class="mx-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
    <card :note="note"
     :key="note.timestamp" v-for="note in spsht.body">
    
    </card>
  </div>

</template>

<script>
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
export default {
  async asyncData({$content}){
    const spsht = await $content('responses').fetch();
    spsht.body = shuffle(spsht.body.map(e=>{
      e.response = e['Describe a positive memory involving one or more members of the class of 2021'][' What impact did this have on you?']
      e.timestamp = e['Timestamp']
      e.grade = e['What grade are you in?']
      e.name = e['Name (optional)']
      return e
    }))

    return {spsht}
  },


}
</script>

<style>

</style>
