<template>
  <div class="card  bg-transparent border-0 bg-secondary easySteps elevation-2"  v-if="user.isAuthenticated">
    <b class="ms-3 mt-2"> Recent Activity</b>

    <div class="card-body  p-0 ">
      <div class="  "  v-for="r in review" >

        <ReviewedBookCard  :review="r" class=" " />
      </div>
<!-- <FollowCard v-for="f in following"   :follow="f"/> -->
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import { logger } from "../../utils/Logger.js";
import Pop from "../../utils/Pop.js";
import ReviewCard from "../BookPage/ReviewCard.vue";
import FollowCard from "../FollowCard.vue";
import ReviewedBookCard from "../ReviewedBookCard.vue";

export default {
    props: {},
    setup(props) {
        const editable = ref({});
        onMounted(() => { });
        watchEffect(() => { });
        return {
            editable,
            user: computed(() => AppState.user),
           review: computed(() => {
  // First, filter the reviews to exclude reviews with the same createdAt as the first review
  const filteredReviews = AppState.accountReviews.filter(a => a.createdAt !== AppState.accountReviews[0].createdAt);

  // Then, sort the filteredReviews array based on createdAt in descending order to have the most recent reviews at the beginning.
  const sortedReviews = filteredReviews.sort((a, b) => b.createdAt - a.createdAt);

  // Finally, slice the first two elements to get the two most recent reviews.
  return sortedReviews.slice(0, 2);
}),
            recommended: computed(() => AppState.accountReviews.find(a => a.recommend == true)),
            following: computed(() => AppState.following.filter(a=> a.createdAt != AppState.following[0].createdAt)),
        };
    },
    components: { ReviewCard, FollowCard, ReviewedBookCard }
};
</script>

<style lang="scss" scoped>
.review{
  transform: scale(0.75);
}


</style>
