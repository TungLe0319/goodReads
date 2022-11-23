<template>
<div class="card square my-3 p-3">
<div class="d-flex justify-content-between align-items-center">

  <div class="d-flex align-items-center">

    <img :src="follow.profile.picture" :alt="follow.profile.name" :title="follow.profile.name" class="forcedImg">
  <div>
    <p> {{follow.profile.name}} </p>
  </div>
  </div>
  <button class="me-5 btn h-25"> <img src="src\assets\img\follow.png" alt="" width="60" height="60"> </button>
</div>
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
      following:computed(() => AppState.following),
      followers:computed(() => AppState.followers),
      }
    }
  }
</script>

<style lang="scss" scoped>
.forcedImg{
  height: 60px;
  width: 60px;
  border-radius: 50%;
  object-fit: cover;
}
.card{
  border: 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.527);

}
</style>
