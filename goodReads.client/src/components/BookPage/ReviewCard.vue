<template>
  <div class="card bg-light text-dark my-3 square position-relative">
    <div class="recommended" v-if="review.recommend">
      <img src="../../../src/assets/img/bookMark.png" alt="" width="40" />
    </div>
    <div class="d-flex align-items-center justify-content-between px-5 pt-3 pb-2">
      <div class="d-flex align-items-center">

        <router-link :to="{ name: 'Profile', params: { id: review.creator?.id } }">
          <div role="accountImg" class="">
            <img :src="review.creator.picture" alt="" class="profileImg img-fluid rounded-circle elevation-5" />
          </div>
        </router-link>


        <div role="name ">
          <p class="ms-3 fs-5 text-decoration-underline text-dark">
            {{ review.creator.name.split("@")[0] }}
          </p>
        </div>
      </div>

      <div role="createdAt " class="d-flex align-items-center">
        <button @click="followByUserId()" v-if="
          user.isAuthenticated &&
          review.creator.id != account.id &&
          !following
        " class="btn p-0 me-3">
          <i class="mdi mdi-check"> Follow</i>
        </button>
        <button @click="unFollowByUserId()" v-else-if="review.creator.id == account.id"
          class="btn p-0 me-3 text-danger">

        </button>

        <button @click="unFollowByUserId()" v-else class="btn p-0 me-3 text-danger">
          <i class="mdi mdi-close"> UnFollow</i>
        </button>

        <p class="text-dark lighten-60">
          {{ new Date(review.createdAt).toLocaleString() }}
        </p>
        <button v-if="review.creator.id == account.id" @click="deleteReview()" class="btn ms-3" title="Delete Review">
          <img src="../../../src\assets\img\delete.png" alt="delete Icon" width="40" />
        </button>
      </div>
    </div>

    <div class="px-4 text-dark">
      <div v-if="review.recommend">
        <b class="fs-5"> Recommend </b>
      </div>

      <div>
        <p class="fs-5">{{ review.body }}</p>
      </div>
    </div>

    <!-- <div v-if="user.isAuthenticated" class="bg-light darken-10">
      <div class="form-floating m-4">
        <input type="text" class="form-control border-0" name="reviewComment" id="reviewComment" placeholder="" />
        <label for="reviewComment">comment</label>
      </div>
    </div>
    <div v-else class="bg-light darken-10">
      <button class="btn selectable text-dark text-uppercase my-2 my-lg-0" @click="login">
        Login
      </button>
    </div> -->
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import { Review } from "../../models/Review.js";
import { reviewsService } from "../../services/ReviewsService.js";
import { followsService } from "../../services/FollowsService.js";
import { logger } from "../../utils/Logger.js";
import Pop from "../../utils/Pop.js";

export default {
  props: {
    review: { type: Review, required: true },
  },
  setup(props) {
    const editable = ref({});

    onMounted(() => { });
    watchEffect(() => { });
    let loggedInUser = {

    }
    return {
      editable,
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      following: computed(() =>
        AppState.following.find((f) => f.followingUserId == props.review.creatorId)
      ),

      // followId: computed(()=> AppState.following.find(f=> f.followingUserId == props.review.creatorId)),

      async deleteReview() {
        try {
          if (await Pop.confirm()) {
            let reviewId = props.review.id;
            await reviewsService.deleteReview(reviewId);
          }
        } catch (error) {
          Pop.error(error, "[removeReview]");
        }
      },

      async followByUserId() {
        try {
          let id = {
            followingUserId: props.review.creator.id,
          };
          // let hi = this.followId.id
       //   console.log(id);
// console.log(id);
          await followsService.followByUserId(id);
          Pop.success(`Following ${props.review.creator.name}`);
        } catch (error) {
          Pop.error(error, "[followingUserId]");
        }
      },
      async unFollowByUserId() {
        try {
          let id = this.following.id
     //     console.log(id);
          await followsService.unFollowByUserId(id);
          Pop.success(`UnFollowed ${props.review.creator.name}`);
        } catch (error) {
          Pop.error(error, "[followingUserId]");
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.accountImg {
  overflow: hidden;
  border-radius: 50%;
}

.accountImg img {
  transition: transform 0.5s ease;
}

.accountImg:hover img {
  transform: scale(0.5);
  border-radius: 50%;
}

.profileImg {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.recommended {
  position: absolute;
  top: -10px;
  left: 10px;
}

.btn {
  transition: all 0.25s ease;
}

.btn:hover {
  transform: scale(1.1);
  transition: all 0.25s ease;
}
</style>
