<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <AccountDetails :account="account" />
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
     <NavigationTabs/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import AccountDetails from "../components/AccountPage/AccountDetails.vue";
import NavigationTabs from "../components/AccountPage/NavigationTabs.vue";
export default {
  setup() {
    return {
      account: computed(() => AppState.account),

    };
  },
  components: {
    AccountDetails,
    NavigationTabs
},
};
</script>

<style scoped>
img {
  max-width: 100px;
}



</style>
