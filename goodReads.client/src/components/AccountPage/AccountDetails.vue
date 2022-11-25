<template>
  <div class="accountDetails container mt-5" v-if="account">
    <div class="row">
      <div class="col-4">
        <img
          :src="account.picture"
          :alt="account.name"
          :title="account.name"
          class="rounded-circle accountImg elevation-5"
        />
      </div>
      <div class="col-8 d-flex flex-column justify-content-between">
        <div class="d-flex ">
          <div class="">

            <p class="fs-1 mb-0">@{{ account.name }}</p>
            <p class="fs-5  text-muted"> {{ account.email}}</p>
          </div>
          <button class="btn btn-outline-dark " @click="follow()">
        Edit Profile
          </button>
        </div>
    
        <EditAccountForm/>
      </div>
    </div>
  </div>
</template>

<script>
import { accountService } from "../../services/AccountService";
import Pop from "../../utils/Pop";
import EditAccountForm from "./EditAccountForm.vue";

export default {
    props: {
        account: { type: Object, required: true },
    },
    setup(props) {
        return {
            async follow() {
                try {
                    await accountService.follow(props.account.id);
                }
                catch (error) {
                    console.error("[]", error);
                    Pop.error(error);
                }
            },
        };
    },
    components: { EditAccountForm }
};
</script>

<style lang="scss" scoped>
.accountImg {
  width: 200px;
  height: 200px;
}
</style>
