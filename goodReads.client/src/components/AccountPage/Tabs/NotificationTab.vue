<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="card square my-3 p-3 ">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
    <img src="//thiscatdoesnotexist.com" alt=""  class="forcedImg">

        <div class="ms-4">
          <p class="fs-4">@</p>
          <p class="text-muted">Began Following on </p>
        </div>
      </div>
      <div class="">
    
        <button
        
          @click="deleteNotification()"
          class="unFollow btn fs-5 me-3 btn-outline-danger border-0"
        >
          <i class="mdi mdi-close"> Dismiss</i>
        </button>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../../AppState.js";
import Pop from "../../../utils/Pop.js";
import FollowCard from "../FollowCard.vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});
    onMounted(() => {});
    watchEffect(() => {});
    return {
      editable,
      profile:computed(() => AppState.profiles),
      followers: computed(() => AppState.followers),
      async deleteNotification(){

      }
    };
  },
  components: { FollowCard },
};
</script>

<style lang="scss" scoped>

.forcedImg {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
