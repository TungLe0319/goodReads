<template>
  <span class="navbar-text">
    <button class="btn selectable text-dark text-uppercase my-2 my-lg-0" @click="login" v-if="!user.isAuthenticated">
      Login
    </button>
    <div v-else>
      <div class="dropdown my-2 my-lg-0">
        <div type="button" class="border-0 no-select" data-bs-toggle="dropdown" aria-expanded="false">
          <div v-if="account.picture || user.picture" class="d-flex align-items-center">
            <img :src="account.picture || user.picture" alt="account photo" height="40"
              class="rounded-circle forcedImg elevation-5" />
            <p class="mb-0 ms-2 text-dark">
              {{ account.name?.split("@")[0] }}
            </p>
            <i class="mdi mdi-arrow-down"></i>
          </div>
        </div>
        <div class="dropdown-menu mt-3 p-0 border-0 elevation-4" aria-labelledby="authDropdown">
          <div class="list-group">
            <router-link :to="{ name: 'List' }">
              <div class="list-group-item dropdown-item list-group-item-action">
                Bookshelves
              </div>
            </router-link>
            <router-link :to="{ name: 'Account' }">
              <div class="list-group-item dropdown-item list-group-item-action">
                Manage Account
              </div>
            </router-link>

            <div class="list-group-item dropdown-item list-group-item-action text-danger selectable" @click="logout">
              <i class="mdi mdi-logout"></i>
              logout
            </div>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import { AuthService } from "../services/AuthService";
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup();
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin });
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.forcedImg {
  height: 60px;
  width: 60px;
  object-fit: cover;

}
</style>
