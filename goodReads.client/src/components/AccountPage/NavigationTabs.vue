<template>
   <nav>
          <div
            class="nav nav-tabs d-flex justify-content-center"
            id="nav-tab"
            role="tablist"
          >
            <button
              class="nav-link active fs-5 text-dark"
              id="nav-About-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-About"
              type="button"
              role="tab"
              aria-controls="nav-About"
              aria-selected="true"
            >
              About
            </button>
            <button
              class="nav-link fs-5 text-dark"
              id="nav-Reviews-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Reviews"
              type="button"
              role="tab"
              aria-controls="nav-Reviews"
              aria-selected="false"
            >
              Reviews
            </button>
            <button
              class="nav-link fs-5 text-dark"
              id="nav-Following-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Following"
              type="button"
              role="tab"
              aria-controls="nav-Following"
              aria-selected="false"
            >
              Following
            </button>
            <button
              class="nav-link fs-5 text-dark"
              id="nav-Followers-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Followers"
              type="button"
              role="tab"
              aria-controls="nav-Followers"
              aria-selected="false"
            >
              Followers
            </button>
          </div>
        </nav>

        
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-About"
            role="tabpanel"
            aria-labelledby="nav-About-tab"
            tabindex="0"
          >
            About
          </div>

          <div
            class="tab-pane fade"
            id="nav-Reviews"
            role="tabpanel"
            aria-labelledby="nav-Reviews-tab"
            tabindex="0"
          >
            <div class="container-fluid">
              <div class="row mt-5">
                <div class="col-md-4" v-for="r in reviews" :key="r.id">
                  <ReviewedBookCard :review="r" />
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-Following"
            role="tabpanel"
            aria-labelledby="nav-Following-tab"
            tabindex="0"
          >
            <div class="container-fluid">
              <div class="row mt-5">
                <div class="col-md-12" v-for="f in following" :key="f.id">
                  <FollowerCard :follow="f" />
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-Followers"
            role="tabpanel"
            aria-labelledby="nav-Followers-tab"
            tabindex="0"
          >
            Followers
          </div>
        </div>
        
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import Pop from "../../utils/Pop.js";
import FollowerCard from "./FollowerCard.vue";
import ReviewedBookCard from "./ReviewedBookCard.vue";



export default {
    props: {},
    setup(props) {
        const editable = ref({});
        onMounted(() => {
        });
        watchEffect(() => { });
        return {
            editable,
            account: computed(() => AppState.account),
            following: computed(() => AppState.following),
            followers: computed(() => AppState.followers),
            reviews: computed(() => AppState.accountReviews),
        };
    },
    components: { FollowerCard, ReviewedBookCard }
}
</script>

<style lang="scss" scoped>
</style>
