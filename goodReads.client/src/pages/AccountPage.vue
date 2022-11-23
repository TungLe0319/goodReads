<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <AccountDetails :account="account"/>
        <EditAccountForm/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import AccountDetails from '../components/AccountPage/AccountDetails.vue';
import EditAccountForm from "../components/AccountPage/EditAccountForm.vue";
export default {
    setup() {
        return {
            account: computed(() => AppState.account)
        };
    },
    components: { AccountDetails, EditAccountForm }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
