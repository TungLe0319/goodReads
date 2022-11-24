<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <AccountDetails :account="account" />
   <FileUpload/>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
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
              class="nav-link"
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
              class="nav-link"
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
              class="nav-link"
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
         <div class="row">
           <div class="col-md-12" v-for="r in reviews" :key="r.id">
            <ReviewCard :review="r" />
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
         <div class="row">
           <div class="col-md-12" v-for="f in following" :key="f.id">
             <FollowerCard :follow="f"/>
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
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import AccountDetails from "../components/AccountPage/AccountDetails.vue";
import EditAccountForm from "../components/AccountPage/EditAccountForm.vue";
import FileUpload from "../components/AccountPage/FileUpload.vue";
import ReviewCard from "../components/BookPage/ReviewCard.vue";
import FollowerCard from "../components/FollowerCard.vue";
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      following: computed(() => AppState.following),
      followers: computed(() => AppState.followers),
      reviews:computed(() => AppState.accountReviews),

    };
  },
  components: { AccountDetails, EditAccountForm, FollowerCard, ReviewCard, FileUpload },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
