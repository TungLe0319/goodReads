<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div
        class="col-md-12"
        v-if="AccountPage"
        v-for="f in following"
        :key="f.id"
      >
        <FollowCard :follow="f" />
      </div>
      <div class="col-md-12" v-else v-for="p in profileFollowing" :key="p.id">
        <FollowCard :follow="f" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../../../AppState.js";
import Pop from "../../../utils/Pop.js";
import FollowCard from "../FollowCard.vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});
    onMounted(() => {});
    watchEffect(() => {});
    const route = useRoute();
    return {
      route,
      editable,
       AccountPage: computed(() => route.name.includes('Account')),
      following: computed(() => AppState.following),
      profileFollowing: computed(() => AppState.activeProfileFollowing),
    };
  },
  components: { FollowCard },
};
</script>

<style lang="scss" scoped></style>
