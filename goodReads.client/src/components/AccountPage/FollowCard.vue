<template>
  <div class="card square my-3 p-3 ">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <router-link
       
          :to="{ name: 'Profile', params: { id: follow.profile?.id } }"
        >
          <img
            :src="follow.profile.picture"
            :alt="follow.profile.name"
            :title="follow.profile.name"
            class="forcedImg elevation-5"
          />
        </router-link>

        <div class="ms-4">
          <p class="fs-4">@{{ follow.profile.name }}</p>
          <p class="text-muted">Began Following on {{ follow.createdAt }}</p>
        </div>
      </div>
      <div class="">
    
        <button
          v-if="!followers"
          @click="unFollowByUserId()"
          class="unFollow btn fs-5 me-3 btn-outline-danger border-0"
        >
          <i class="mdi mdi-close"> UnFollow</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import { Follow } from "../../models/Follow.js";
import { followsService } from "../../services/FollowsService.js";
import { logger } from "../../utils/Logger.js";
import Pop from "../../utils/Pop.js";

export default {
  props: {
    follow: { type: Follow, required: true },
  },
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      profile: computed(() => AppState.profiles),
      account: computed(() => AppState.account),

      followers: computed(() =>
        AppState.followers.find(
          (f) => f.followingUserId == props.follow.followingUserId
        )
      ),
      user: computed(() => AppState.user),
      following: computed(() =>
        AppState.following.find(
          (f) => f.followingUserId == props.follow.followingUserId
        )
      ),
          async unFollowByUserId() {
        try {
          let id = this.following.id
          console.log(id);
          await followsService.unFollowByUserId(id);
          Pop.success();
        } catch (error) {
          Pop.error(error, "[followingUserId]");
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>

.unFollow {
}
.forcedImg {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  object-fit: cover;
}
.card {
  border: 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.527);
}
</style>
