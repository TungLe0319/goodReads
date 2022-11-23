<template>
<div class="card">
<img :src="follow.creator.picture" :alt="follow.creator.name" :title="follow.creator.name" class="forcedImg">
</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { Follow } from "../models/Follow.js";
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js";

export default {
props:{
follow:{type:Follow,required:true}
       },
  setup(props) {
    const editable = ref({});
    
    onMounted(() => {

    });
    watchEffect(() => {});

    return {
      editable,
      profile:computed(() => AppState.profiles),
      account: computed(() => AppState.account),
      follows:computed(() => AppState.follows),
      }
    }
  }
</script>

<style lang="scss" scoped>
.forcedImg{
  height: 300px;
  width: 300px;
  object-fit: cover;
}
</style>
