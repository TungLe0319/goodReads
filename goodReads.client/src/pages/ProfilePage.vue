<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <ProfileDetails :profile="profile" />
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
     <!-- <MainTab/> -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import MainTabProfile from "../components/ProfilePage/MainTabProfile.vue";

import ProfileDetails from "../components/ProfilePage/ProfileDetails.vue";
import { profilesService } from "../services/profilesService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const route = useRoute();
    async function getProfile() {
      try {
        await profilesService.getProfile(route.params.id);
      } catch (error) {
        console.error("[getProfile]", error);
        Pop.error(error);
      }
    }
    async function getProfileBookshelves() {
      try {
        await profilesService.getProfileBookshelves(route.params.id);
      } catch (error) {
        console.error("[getProfileBookshelves]", error);
        Pop.error(error);
      }
    }
    async function getProfileFollows() {
      try {
        await profilesService.getProfileFollows(route.params.id);
      } catch (error) {
        console.error("[getProfileFollows]", error);
        Pop.error(error);
      }
    }
    async function getProfileFollowers() {
      try {
        await profilesService.getProfileFollowers(route.params.id);
      } catch (error) {
        console.error("[getProfileFollowers]", error);
        Pop.error(error);
      }
    }
    onMounted(() => {
      getProfile();
      getProfileBookshelves();
      getProfileFollows();
      getProfileFollowers();
    });
    return {
profile : computed(() => AppState.activeProfile),

    };
  },
  components: { ProfileDetails, MainTabProfile },
};
</script>

<style lang="scss" scoped></style>
