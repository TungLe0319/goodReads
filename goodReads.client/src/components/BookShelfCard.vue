<template>
<div class="card">
  <img :src="bookShelf.img" alt="">
  <div class="card-img-overlay d-flex align-items-end justify-content-end">
<h4 class="text-light ">    {{bookShelf.title}}</h4>
  </div>
</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { BookShelf } from "../models/BookShelf.js";
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js";

export default {
props:{
bookShelf: {type: BookShelf, required:true}
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
