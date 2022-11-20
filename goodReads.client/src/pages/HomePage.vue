<template>
 <div class="container">
    <!-- SearchBar -->
    <form @submit.prevent="searchByQuery()">
    <div
          class="input-group   my-3 rounded-5 elevation-5 sticky-top searchContainer "
        >
          <button class="btn d-flex justify-content-center " type="submit">
            <i class="mdi mdi-magnify fs-2"></i>
          </button>
          <input
            v-model="editable.term"
            type="text"
            class="form-control rounded-5 "
            aria-label="Username"
            placeholder="Search Books By Title.."
            aria-describedby="basic-addon1"
          />
        </div>
    </form>
 
        <!-- !SearchBar -->
   <div class="row">
     <div class="col-md-2" v-for="b in books">
     <BookCard :book="b" />
     </div>
   </div>
 </div>
</template>

<script>
import { computed,ref } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import BookCard from "../components/BookCard.vue";
import { bookService } from "../services/BookService.js";
import Pop from "../utils/Pop.js";

export default {
    setup() {
        onMounted(() => {
            getBooks();
        });
        async function getBooks() {
            try {
                await bookService.getBooks();
            }
            catch (error) {
                Pop.error(error, "[getBooks]");
            }
        }
        let editable= ref({})
        return {
            editable,
            books: computed(() => AppState.books),
            async searchByQuery(){
                try {
                    await bookService.searchByQuery(editable.value.term)
                  } catch (error) {
                    Pop.error(error,'[searchByQuery]')
                  }
            }
        };
    },
    components: { BookCard }
}
</script>

<style scoped lang="scss">

</style>
