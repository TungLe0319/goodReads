<template>
  <div class="card p-2 bg-transparent border-0 bg-secondary easySteps elevation-2">
    <b class="ms-3 mt-2"> WANT THE MOST?</b>
    <p class="text-muted ms-3 my-2 mb-0">Follow these easy steps.</p>
    <p class="text-muted ms-3 my-2">Help us create better Recommendations for you</p>
    <div class="card-body">
      <ul class="list-group bg-transparent border-0">
        <li :class="user.isAuthenticated ? 'opacity-50' : ''"
          class="list-group-item bg-transparent border-0 d-flex align-items-center">
          <p class="bg-create rounded-circle p-2 mb-0 px-3">1</p>
          <p :class="
            user.isAuthenticated
              ? 'text-decoration-line-through fw-lighter'
              : ''
          " class="mb-0 ms-2 text-decoration-underline">
            Sign Up and make an account
          </p>
        </li>
        <li class="list-group-item bg-transparent border-0 d-flex align-items-center">
          <p class="bg-create rounded-circle p-2 mb-0 px-3">2</p>
          <p class="mb-0 ms-2 text-decoration-underline">
            Wishlist at least 2 books
          </p>
        </li>
        <li class="list-group-item bg-transparent border-0 d-flex align-items-center">
          <p class="bg-create rounded-circle p-2 mb-0 px-3">3</p>
          <p class="mb-0 ms-2 text-decoration-underline">
            Follow at least 5 authors
          </p>
        </li>
        <li :class="reviews.length >= 1 ? 'opacity-50' : ''"
          class="list-group-item bg-transparent border-0 d-flex align-items-center">
          <p :class="
            reviews.length >= 1
              ? 'text-decoration-line-through fw-lighter'
              : ''
          " class="bg-create rounded-circle p-2 mb-0 px-3">
            4
          </p>
          <p class="mb-0 ms-2 text-decoration-underline">
            Write your first review
          </p>
        </li>

        <li :class="recommended ? 'opacity-50' : ''"
          class="list-group-item bg-transparent border-0 d-flex align-items-center">
          <p class="bg-create rounded-circle p-2 mb-0 px-3">5</p>
          <p class="mb-0 ms-2 text-decoration-underline">Recommend a book or two</p>
        </li>



        <!-- <div class="p-3">
          <h2>TODO LIST FOR APP</h2>

        <li>Notifications? user able to send feed back, maybe send back notification response in account page that we
          received it</li>

        <li>Add Picture/GitHub/LinkedIn for everyone</li>

        <li>Fix Pagienation buttons on search page, need it to keep the still active checkbox category into account when
          paginating</li>
        <li>Add More To List Page </li>
        <li>Refresh on book page sends you back to home? do we want them to stay on book page?</li>


        </div> -->

      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import { logger } from "../../utils/Logger.js";
import Pop from "../../utils/Pop.js";

export default {
  props: {},
  setup(props) {
    const editable = ref({});

    onMounted(() => { });
    watchEffect(() => { });

    return {
      editable,
      user: computed(() => AppState.user),
      reviews: computed(() => AppState.accountReviews),
      recommended: computed(() => AppState.accountReviews.find(a => a.recommend == true)),
      following: computed(() => AppState.following),
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
