<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
   <footer class="bg-dark text-light">
    Made with 💖 by CodeWorks
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


main{
  background-image: url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80);

  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
