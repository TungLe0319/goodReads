<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <AccountDetails :account="account"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import AccountDetails from '../components/AccountPage/AccountDetails.vue';
export default {
    setup() {
        return {
            account: computed(() => AppState.account)
        };
    },
    components: { AccountDetails }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
