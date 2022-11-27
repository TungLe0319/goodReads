<template>
  <nav>
    <div class="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
      <button class="nav-link active fs-5 text-dark" id="nav-About-tab" data-bs-toggle="tab" data-bs-target="#nav-About"
        type="button" role="tab" aria-controls="nav-About" aria-selected="true">
        About
      </button>
      <button class="nav-link fs-5 text-dark" id="nav-Reviews-tab" data-bs-toggle="tab" data-bs-target="#nav-Reviews"
        type="button" role="tab" aria-controls="nav-Reviews" aria-selected="false">
        Reviews
      </button>
      <button class="nav-link fs-5 text-dark" id="nav-Following-tab" data-bs-toggle="tab"
        data-bs-target="#nav-Following" type="button" role="tab" aria-controls="nav-Following" aria-selected="false">
        Following
      </button>
      <button class="nav-link fs-5 text-dark" id="nav-Followers-tab" data-bs-toggle="tab"
        data-bs-target="#nav-Followers" type="button" role="tab" aria-controls="nav-Followers" aria-selected="false">
        Followers
      </button>
    </div>
  </nav>

  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-About" role="tabpanel" aria-labelledby="nav-About-tab" tabindex="0">
      <div class="my-4 d-flex gap-1" v-if="!account.bio">
        <b> add a Bio</b>
        <p>to share who you are.</p>
      </div>
      <div v-else>
        <p>{{ account.bio }}</p>
      </div>
    
      <div class="">
        <div class="d-flex my-3">
          <h2>Favorite Books</h2>
          <button class="btn btn-outline-dark" data-bs-target="#favoriteBookForm" data-bs-toggle="modal">
            Add Favorite Book
          </button>
        </div>
        <div class="row">
          <!-- <div class="col-md-2" v-for="i in 5">
            <div class="card p-5 h-100 elevation-3 bg-dark d-flex justify-content-center">
           <div class=" d-flex justify-content-center flex-column align-items-center">
             <p class="text-center">  Add a Favorite Book</p>
             <button class="btn border-0 " data-bs-target="#favoriteBookForm" data-bs-toggle="modal">

               <i class="mdi mdi-plus fs-1 p-2 rounded h-50 favoriteIcon"></i>
             </button>
           </div>
            </div>
          </div> -->

          <div class="col-md-2 mx-3" v-for="f in favoriteBooks" :key="f.id">
            <div class="card position-relative">
              <router-link :to="{ name: 'Book', params: { id: f.bookId } }">

                <img :src="f.book?.volumeInfo?.imageLinks?.thumbnail" alt="" width="200" height="300"
                  class="elevation-5 selectable rounded-1" @click="setActive(f.book)" />
              </router-link>

              <i @click="removeFavoriteBook(f.id)"
                class="mdi mdi-delete fs-2 text-danger position-absolute selectable rounded top-0 end-0"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tab-pane fade" id="nav-Reviews" role="tabpanel" aria-labelledby="nav-Reviews-tab" tabindex="0">
      <div class="container-fluid">
        <div class="row mt-5">
          <div class="col-md-4" v-for="r in reviews" :key="r.id">
            <ReviewedBookCard :review="r" />
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="nav-Following" role="tabpanel" aria-labelledby="nav-Following-tab" tabindex="0">
      <FollowingTab />
    </div>
    <div class="tab-pane fade" id="nav-Followers" role="tabpanel" aria-labelledby="nav-Followers-tab" tabindex="0">
<FollowerTab/>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../../AppState.js";
import Pop from "../../../utils/Pop.js";
import FavoritedBookCard from "../FavoritedBookCard.vue";
import FollowCard from "../FollowCard.vue";
import FollowerTab from "./FollowerTab.vue";
import FollowingTab from "./FollowingTab.vue";
import ReviewedBookCard from "../ReviewedBookCard.vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});
    onMounted(() => { });
    watchEffect(() => { });
    return {
      editable,
      account: computed(() => AppState.account),

      followers: computed(() => AppState.followers),
      reviews: computed(() => AppState.accountReviews),
      favoriteBooks: computed(() => AppState.favoriteBooks),
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
        console.log(book);
        // AppState.activeBook = book;
      }
    };
  },
  components: { FollowCard, ReviewedBookCard, FavoritedBookCard, FollowingTab, FollowerTab },
};
</script>

<style lang="scss" scoped>
.favoriteIcon {
  background: rgba(235, 10, 10, 0.675);
}

nav .active {
  border: 0;
  border-bottom: 5px solid #6351ce !important;
}
</style>
