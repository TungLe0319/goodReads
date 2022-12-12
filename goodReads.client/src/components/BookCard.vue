<template>
  <div
    @click="setActive(book)"
    v-if="book"
    class="text-dark"

  >
    <div class="card elevation-5 border-0 my-1 text-shadow">
      <img :src="book.img" class="card-img" :alt="book.title" v-if="book.img" />
    </div>

  </div>
  <div class="bg-transparent border-0 bookTitle" v-if="book">
    <p class="text-truncate mb-0 fw-bold text-dark">{{ book.title }}</p>
    <router-link :to="{ name: 'Search', params: {} }" class="text-dark">
      <p
        @click="searchByAuthor(a)"
        class="text-truncate mb-0 link fs-5"
        v-if="isArray"
        v-for="a in book.authors.split(',')"
      >
        {{ a }}
      </p>

      <p
        @click="searchByAuthor(a)"
        class="text-truncate mb-0 link fs-5"
        v-else
        v-for="a in book.authors"
      >
        {{ a }}
      </p>
    </router-link>
    <router-link :to="{ name: 'Search' }" class="text-dark" >
      <p
        @click="searchByCategory(b)"
        v-for="b in book.categories"
        class="link mb-0"
      >
        {{ b }}
      </p>
    </router-link>
    <!-- <router-link :to="{ name: 'Search' }" class="text-dark" v-else>
      <p
        @click="searchByCategory(b)"

        class="link mb-0"
      >
        {{ book.categories }}
      </p>
    </router-link> -->
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { AppState } from "../AppState.js";
import { Book } from "../models/Book.js";
import { SQLBook } from "../models/SQLBook.js";
import { router } from "../router.js";
import { bookService } from "../services/BookService.js";
import { bookShelvesService } from "../services/BookShelvesService";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    book: { type: Object, required: true },
  },
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});
    const route = useRoute();
    const router = useRouter();
    let uphere = false;
    return {
      uphere,
      editable,
      route,
      router,
      isArray: computed(() => props.book.authors == [props.book.authors]),
      async setActive(book) {
        try {
          document.documentElement.scrollTop = 0;
          //IF NOT IN DATABASE PUSH
          AppState.activeBook = book;
          if (bookShelvesService.findBook()) {
            
            await bookService.addBookToDb(book);
          }
          
          router.push({ name: "Book", params: { id: book.id } });
          // console.log(AppState.activeBook);
        } catch (error) {
          Pop.error(error);
        }
      },
      async searchByCategory(b) {
        try {
          // console.log(b);
          await bookService.searchByCategory(b);
        } catch (error) {
          Pop.error(error, "[searchByCategory]");
        }
      },
      async searchByAuthor(a) {
        try {
          let author = a;
       //   console.log(author);
          await bookService.searchByAuthor(author);
        } catch (error) {
          Pop.error(error, "[searchByCategory]");
        }
      },
      async removeFromBookShelf() {
        try {
          await bookShelvesService.removeFromBookShelf();
        } catch (error) {
          Pop.error(error, "[removeFromBookShelf]");
        }
      },
      hoverTest() {
        AppState.hovering = !AppState.hovering;

        console.log(AppState.hovering);
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  z-index: -2 !important;

  .wrapper-item {
    position: absolute;
    opacity: 0;
  }
}

.wrapper:hover {
  transition-delay: 500ms !important;
  transform: scale(1.5);
  transition: transform 0.5s ease;
  z-index: 9 !important;
  .card {
    z-index: 9999 !important;
  }

  img {
    z-index: 9999 !important;
  }
  .wrapper-item {
    transition-delay: 500ms !important;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 99999 !important;
  }
}
.hide {
  display: none;
}
.link:hover {
  transform: scale(1.05);
  transition: all 0.75s ease;
  text-decoration: underline;
}

.bookTitle {
  text-overflow: clip;
}
.card {
  transition: all 0.25s ease;
  .card-title {
    opacity: 0;
    transition: all 0.5s ease;
  }
  .card-img {
    height: 275px;
    object-fit: cover;
    object-position: center;
  }
}
.card:hover {
  img {
    transform: scale(1.03);
    transition: all 0.25s ease;
    filter: saturate(120%);
    filter: brightness(70%);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    cursor: pointer;
  }
  .card-title {
    opacity: 1;
    transition: all 1s ease;
  }
}
</style>
