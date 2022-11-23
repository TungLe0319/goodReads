<template>
  <nav
    class="navbar navbar-expand-lg bg-transparent pe-5 ps-2 border-bottom border-secondary"
  >
  <di class="ms-2"><h4 class="text-create"> 🆂🅲🆁🅾🅻🅻🅵🆁🅸🅴🅽🅳🆂</h4></di>
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img
          alt="logo"
          class="logo p-1"
          src="https://cdn0.iconfinder.com/data/icons/fantasy/512/Fantasy_Spell_Book.png"
          height="60"
        />
      </div>
    </router-link>
    
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link
            :to="{ name: 'List' }"
            class="btn text-dark selectable text-uppercase"
          >
            Lists
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Search' }"
            class="btn text-dark selectable text-uppercase"
          >
            Search
          </router-link>
        </li>
        <li>
          <button
            class="btn selectable text-uppercase"
            data-bs-target="#bookShelfForm"
            data-bs-toggle="modal"
          >
            CreateBookShelf
          </button>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <div>
        <img
          src="../assets/img/light-bulb.png"
          alt=""
          width="50"
          class="selectable"
          @click="toggleTheme()"
          v-if="theme"
        />
        <img
          src="../assets/img/DarkLight-bulb.png"
          alt=""
          width="50"
          class="selectable"
          @click="toggleTheme()"
          v-else
        />
      </div>
      <Login />
    </div>
  </nav>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import Login from "./Login.vue";
export default {
  setup() {
    return {
      theme: computed(() => AppState.theme),
      toggleTheme() {
        AppState.theme = !AppState.theme;
        document.body.setAttribute(
          "data-theme",
          AppState.theme ? "dark" : "light"
        );
      },
    };
  },
  components: { Login },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.navbar {
  /* background-image: url(https://images.unsplash.com/photo-1506968430777-bf7784a87f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80); */
  /* background-color: whitesmoke; */
  height: 5em;
}

.logo {
  background-color: rgba(189, 184, 176, 0.805);
  border-radius: 50%;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
