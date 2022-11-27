<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-md-12" v-for="f in following" :key="f.id">
        <FollowCard :follow="f" />
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
      following: computed(() => AppState.following),
    };
  },
  components: { FollowCard },
};
</script>

<style lang="scss" scoped></style>
