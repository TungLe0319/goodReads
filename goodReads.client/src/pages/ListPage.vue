<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-12">
        <div class="card elevation-5 border-0 p-4">
          <h1>You Haven't Added any Books to your Wishlist Yet</h1>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-md-12 mb-3">
        <div class="d-flex justify-content-between">
          <h1 class="text-dark booklist">My Book Lists</h1>
          <button class="btn btn-danger h-50">
            <i class="mdi mdi-plus fs-5"> Add Book</i>
          </button>
        </div>
      </div>
      <div class="col-md-12">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-wishlist-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-wishlist"
              type="button"
              role="tab"
              aria-controls="nav-wishlist"
              aria-selected="true"
              @click="setActiveShelf('wishlist')"
            >
              Wishlist
            </button>
            <button
              class="nav-link"
              id="nav-owned-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-owned"
              type="button"
              role="tab"
              aria-controls="nav-owned"
              aria-selected="false"
              @click="setActiveShelf('favorite')"
            >
              Favorites
            </button>
            <button
              class="nav-link"
              id="nav-reading-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-reading"
              type="button"
              role="tab"
              aria-controls="nav-reading"
              aria-selected="false"
              @click="setActiveShelf('reading')"
            >
              Reading
            </button>
            <button
              class="nav-link"
              id="nav-finished-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-finished"
              type="button"
              role="tab"
              aria-controls="nav-finished"
              aria-selected="false"
              @click="setActiveShelf('finished')"
            >
              Finished
            </button>
          </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-wishlist"
            role="tabpanel"
            aria-labelledby="nav-wishlist-tab"
            tabindex="0"
          >
            <div class="row mt-3">
              <div class="col-md-2" v-for="f in filtered" :key="f.id">
                <BookCard :book="f" />
                <div>
                  <button
                    @click="removeFromBookShelf(f.shelvedId)"
                    class="fs-6 link text-danger btn p-0"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="nav-owned"
            role="tabpanel"
            aria-labelledby="nav-owned-tab"
            tabindex="0"
          >
            <div class="row mt-3">
              <div class="col-md-2" v-for="f in filtered" :key="f.id">
                <BookCard :book="f" />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-reading"
            role="tabpanel"
            aria-labelledby="nav-reading-tab"
            tabindex="0"
          >
            <div class="row mt-3">
              <div class="col-md-2" v-for="f in filtered" :key="f.id">
                <BookCard :book="f" />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-finished"
            role="tabpanel"
            aria-labelledby="nav-finished-tab"
            tabindex="0"
          >
            <div class="row mt-3">
              <div class="col-md-2" v-for="f in filtered" :key="f.id">
                <BookCard :book="f" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import BookCard from "../components/BookCard.vue";
import { accountService } from "../services/AccountService.js";
import { bookShelvesService } from "../services/BookShelvesService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({});
    onMounted(() => {
      setWishListDefault();
    });
    async function setWishListDefault() {
      if (AppState.accountBookshelves) {
        let found = AppState.accountBookshelves.find(
          (a) => a.type == "wishlist"
        );
        AppState.activeBookShelf = found;
      }
    }
    return {
      editable,
      account: computed(() => AppState.account),
      filtered: computed(() =>
        AppState.accountShelvedBooks?.filter(
          (x) => x.bookShelfId == AppState.activeBookShelf?.id
        )
      ),
      bookShelves: computed(() => AppState.accountShelvedBooks),
      setActiveShelf(x) {
        let found = AppState.accountBookshelves.find((a) => a.type == x);
        AppState.activeBookShelf = found;
        console.log(AppState.activeBookShelf);
      },
      async removeFromBookShelf(id) {
        try {
          if (await Pop.confirm()) {
            await bookShelvesService.removeFromBookShelf(id);
          }
        } catch (error) {
          Pop.error(error, "[removeFromBookShelf]");
        }
      },
    };
  },
  components: { BookCard },
};
</script>

<style lang="scss" scoped>
.booklist {
  font-family: "Abril Fatface", cursive;
}
</style>
