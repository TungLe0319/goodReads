<template>
  <div class="card p-2 elevation-4 border-0">
    <h3
      v-if="book.saleAbility == 'Unavailable'"
      class="ms-3 text-danger text-decoration-underline"
    >
      {{ book.saleAbility }}
    </h3>
    <h3 v-else>{{ book.saleAbility }}</h3>
    <p class="ms-3">Available for a limited time</p>

    <div class="card-body d-flex flex-column justify-content-center">
      <form @submit.prevent="addToBookShelf()">
        <div class="mb-3">
          <label for="" class="form-label">Add to BookShelf</label>
          <select
            v-model="editable.id"
            class="form-select form-select-lg"
            name=""
            id=""
          >
            <option :value="b.id" v-for="b in bookShelves">
              <div :class="b.hasActiveBook ? 'text-warning' : ''">
                {{ b.type }}
              </div>
            </option>
          </select>
        </div>
        <button class="btn btn-outline-dark" type="submit">
          Save To BookShelf
        </button>
      </form>

      <button
        class="btn btn-outline-dark mt-2"
        data-bs-toggle="modal"
        data-bs-target="#createReview"
      >
        Review
      </button>
      <div class="mt-3">
        <small>Share with your network :</small>
        <div class="d-flex gap-2 justify-content-center mt-2">
          <a
            target="_blank"
            OnClick="window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); return false;"
            href="https://www.twitter.com"
          >
            <img
              src="src\assets\img\ShareIcons\twitter.png"
              alt=""
              width="30"
            />
          </a>

          <a href="mailto:">
            <img src="src\assets\img\ShareIcons\email.png" alt="" width="30" />
          </a>
          <img
            class="link"
            src="src\assets\img\ShareIcons\link.png"
            alt=""
            width="30"
            @click="copyToClipBoard()"
          />

          <a
            target="_blank"
            OnClick="window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); return false;"
            href="https://www.facebook.com"
          >
            <img
              src="src\assets\img\ShareIcons\facebook.png"
              alt=""
              width="30"
            />
          </a>

          <a
            target="_blank"
            OnClick="window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); return false;"
            href="http://pinterest.com"
          >
            <img
              src="src\assets\img\ShareIcons\pinterest.png"
              alt=""
              width="30"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../../AppState.js";
import { bookShelvesService } from "../../services/BookShelvesService.js";
import Pop from "../../utils/Pop.js";

export default {
  props: {},
  setup(props) {
    const editable = ref({type:'favorite'});
    onMounted(() => {});
    watchEffect(() => {});
    const route = useRoute();
    return {
      editable,
      book: computed(() => AppState.activeBook),
      bookShelves: computed(() => AppState.accountBookshelves),
      inBookShelf: computed(() => {

        // for (const shelf of AppState.accountBookshelves) {
        //   let shelved = AppState.accountShelvedBooks.filter(s => s.bookShelfId != shelf.id)
        //   for (const books of shelved) {
        //     if (books.id == AppState.activeBook) {
        //       shelf.hasActiveBook = true
        //     }
        //   }
        // }
      }),
      copyToClipBoard() {
        navigator.clipboard.writeText(route.fullPath);
        Pop.toast(`Copied To ClipBoard`);
      },
      async addToBookShelf() {
        try {
          console.log(AppState.accountBookshelves);

          let data = {
            bookId: AppState.activeBook.id,
            bookShelfId: editable.value.id,
          };
          console.log(data);
          await bookShelvesService.addToBookShelf(data);
        } catch (error) {
          Pop.error(error, "[addToBookShelf]");
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  transition: all 0.25s ease;
}
.link {
  cursor: pointer;
}
a:hover,
.link:hover {
  transform: scale(1.1);
  transition: all 0.25s ease;
}
</style>
