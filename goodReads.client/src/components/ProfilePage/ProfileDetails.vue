<template>
  <div class="profileDetails container mt-5" v-if="profile">
    <div class="row">
      <div class="col-4 d-flex justify-content-center">
        <img
          :src="profile.picture"
          :alt="profile.name"
          :title="profile.name"
          class="rounded-circle profileImg elevation-5"
        />
      </div>
      <div class="col-8 d-flex flex-column justify-content-between">
        <div class="d-flex">
          <div class="">
            <p class="mb-0 name text-dark">{{ profile.name }}</p>
            <!-- <p class="fs-5 text-muted">{{ profile.email }}</p> -->
          </div>
          <div class="mt-3 ms-3">
            <!-- <button class="btn btn-outline-dark p-3 fw-bold rounded-1" data-bs-target="#editprofiletForm"
              data-bs-toggle="modal">
              <i class="mdi mdi-pencil fs-5 "></i> Edit Profile
            </button> -->

            <!-- NOTE THIS BUTTON ADD TO PROFILE PAGE  -->

            <!-- <button class="btn btn-outline-dark p-3 fw-bold rounded-1" @click="follow()">
           <i class="mdi mdi-pencil fs-5 "></i>Follow
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { accountService } from "../../services/AccountService";
import { followsService } from "../../services/FollowsService.js";

import Pop from "../../utils/Pop";

export default {
  props: {
    profile: { type: Object, required: true },
  },
  setup(props) {
    return {
      async follow() {
        try {
          await followsService.followByUserId();
        } catch (error) {
          console.error("[]", error);
          Pop.error(error);
        }
      },
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.accountImg {
  width: 200px;
  height: 200px;
}

.name {
  font-size: 3em;
  font-family: "Abril Fatface", cursive;
}
</style>
