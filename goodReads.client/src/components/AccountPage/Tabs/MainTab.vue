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
        Reviews <b>({{ reviews.length }}) </b>
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
        Following <b>({{ following.length }}) </b>
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
        Followers <b>({{ followers.length }}) </b>
      </button>
      <button
        class="nav-link fs-5 text-dark"
        id="nav-Notification-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-Notification"
        type="button"
        role="tab"
        aria-controls="nav-Notification"
        aria-selected="false"
      >
        Notifications
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
      <div class="my-4 d-flex gap-1" v-if="!account.bio">
        <b> add a Bio</b>
        <p>to share who you are.</p>
      </div>
      <div v-else>
        <p class="text-dark">{{ account.bio }}</p>
      </div>

      <div class="">
        <div class="d-flex flex-column my-3">
          <h2>Favorite Books</h2>

          <!-- <button class="btn btn-outline-dark" data-bs-target="#favoriteBookForm" data-bs-toggle="modal">
            Add Favorite Book
          </button> -->
        </div>
        <div class="row">
          <div class="col-md-2" v-for="f in filtered" :key="f.id">
            <BookCard :book="f" />
          </div>
        </div>
      </div>
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
      <FollowingTab />
    </div>
    <div
      class="tab-pane fade"
      id="nav-Followers"
      role="tabpanel"
      aria-labelledby="nav-Followers-tab"
      tabindex="0"
    >
      <FollowerTab />
    </div>
    <div
      class="tab-pane fade"
      id="nav-Notification"
      role="tabpanel"
      aria-labelledby="nav-Notification-tab"
      tabindex="0"
    >
      <NotificationTab />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../../AppState.js";
import Pop from "../../../utils/Pop.js";
import FavoritedBookCard from "../FavoritedBookCard.vue";
import FollowCard from "../../FollowCard.vue";
import FollowerTab from "../../FollowerTab.vue";
import FollowingTab from "../../FollowingTab.vue";
import ReviewedBookCard from "../../ReviewedBookCard.vue";

import NotificationTab from "./NotificationTab.vue";
import BookCard from "../../BookCard.vue";
export default {
  props: {},
  setup(props) {
    const editable = ref({});
    onMounted(() => {
      let found = AppState.accountBookshelves.find((a) => a.type == "favorite");
      AppState.activeBookShelf = found;
    });
    return {
      editable,
      account: computed(() => AppState.account),
      following: computed(() => AppState.following),
      followers: computed(() => AppState.followers),
      reviews: computed(() => AppState.accountReviews),
      filtered: computed(() =>
        AppState.accountShelvedBooks?.filter(
          (x) => x.bookShelfId == AppState.activeBookShelf?.id
        )
      ),
      async removeFavoriteBook(id) {
        try {
          if (await Pop.confirm()) {
            await favoriteBooksService.removeFavoriteBook(id);
          }
        } catch (error) {
          Pop.error(error, "[removeFavoriteBook]");
        }
      },
      setActive(book) {
        document.documentElement.scrollTop = 0;
        //IF NOT IN DATABASE PUSH
        //   console.log(book);
        // AppState.activeBook = book;
      },
    };
  },
  components: {
    FollowCard,
    ReviewedBookCard,
    FavoritedBookCard,
    FollowingTab,
    FollowerTab,
    NotificationTab,
    BookCard,
  },
};
</script>

<style lang="scss" scoped>
.favoriteIcon {
  background: rgba(235, 10, 10, 0.675);
}

nav .active {
  border: 0;
  border-bottom: 5px solid #f5a53c !important;
  background-color: rgb(245, 216, 162) !important;
  font-weight: bold;
}
nav .nav-link {
  margin: 0 20px;
  font-size: 1.5rem;
}
</style>
