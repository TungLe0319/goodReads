<template>
  <div class="card p-2 bg-transparent border-0 bg-secondary easySteps elevation-2">
    <b class="ms-3 mt-2"> Recent Activity</b>
    <p class="text-muted ms-3 my-2 mb-0">Follow these easy steps.</p>
    <p class="text-muted ms-3 my-2">Help us create better Recommendations for you</p>
    <div class="card-body">
   <ReviewedBookCard  :review="r" v-for="r in review" />
<FollowCard v-for="f in following"   :follow="f"/>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import ReviewCard from "./BookPage/ReviewCard.vue";
import FollowCard from "./FollowCard.vue";

export default {
    props: {},
    setup(props) {
        const editable = ref({});
        onMounted(() => { });
        watchEffect(() => { });
        return {
            editable,
            user: computed(() => AppState.user),
            review: computed(() => AppState.accountReviews.filter(a=> a.createdAt != AppState.accountReviews[0].createdAt)),
            recommended: computed(() => AppState.accountReviews.find(a => a.recommend == true)),
            following: computed(() => AppState.following.filter(a=> a.createdAt != AppState.following[0].createdAt)),
        };
    },
    components: { ReviewCard, FollowCard }
};
</script>

<style lang="scss" scoped>

</style>
