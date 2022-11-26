<template>
  <header>
    <Navbar class="" />
  </header>
  <main class="">
    <router-view />
  </main>


  <footer>
    <FooterComponent/>
    <!-- <Navbar  class="d-flex d-md-none" /> -->
  </footer>
  <!-- <footer class="bg-dark p-5">
 <div>
  <div>
    <h4>Powered By GoogleEngine</h4>
  </div>
 </div>
  </footer> -->
<ModalComponent id="createReview" >
  <ReviewForm/>
</ModalComponent>
<ModalComponent id="bookShelfForm" >
  <BookShelfForm/>
</ModalComponent>
<ModalComponent id="editAccountForm" >
  <EditAccountForm/>
</ModalComponent>
<ModalComponent id="favoriteBookForm" >
  <FavoriteBookForm/>
</ModalComponent>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import BookShelfForm from "./components/BookShelfForm.vue"
import ModalComponent from "./components/ModalComponent.vue"
import Navbar from './components/Navbar.vue'
import ReviewForm from "./components/BookPage/ReviewForm.vue"
import FooterComponent from "./components/FooterComponent.vue"
import EditAccountForm from "./components/AccountPage/EditAccountForm.vue"
import FavoriteBookForm from "./components/AccountPage/FavoriteBookForm.vue"
import Pop from './utils/Pop'
import { bookService } from './services/BookService'

export default {
  setup() {
    onMounted(() => {
  
      getMySQLBooks();
 
    });
    async function getMySQLBooks() {
      try {
        await bookService.getMySQLBooks();
      } catch (error) {
        Pop.error(error, "[getBooks]");
      }
    }
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, ModalComponent, ReviewForm, BookShelfForm, FooterComponent, EditAccountForm, FavoriteBookForm }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh  - 64px);
}


// main{
//   background-image: url(https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80);

//   background-attachment: fixed;
//   background-size: cover;
//   // background-position: center;
// }

footer {



}
</style>
