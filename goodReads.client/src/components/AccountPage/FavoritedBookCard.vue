<template>
  <div class="card">

    <img :src="book?.volumeInfo?.imageLinks?.extraLarge" alt="" width="200" height="300"  class="elevation-5 rounded-1 " @click="removeFavoriteBook()">
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import { Book } from "../../models/Book.js";
import Pop from "../../utils/Pop.js";


export default {
props:{
book: {type:Object}
       },
  setup(props) {
    const editable = ref({});
    
    onMounted(() => {

    });
    watchEffect(() => {});

    return {
      editable,
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
