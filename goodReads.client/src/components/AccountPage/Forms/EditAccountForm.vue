<template>
  <div class="modal-body">
    <div class="row justify-content-center">
      <div class="col-md-6 text-black">
        <form class="account-form acc-bio rounded" @submit.prevent="handleSubmit()">
          <div class="acc-pic text-start">
            <div class="mb-3">
              <label for="name">Name:</label>
              <input type="text" class="form-control" v-model="editable.name" />
            </div>
            <div class="mb-3">
              <label for="picture">Picture:</label>
              <input type="url" class="form-control" v-model="editable.picture" name="picture" placeholder="picture" />
            </div>

            <div class="mb-3">
              <label for="" class="form-label">Bio:</label>
              <textarea class="form-control" v-model="editable.bio" name="" id="" rows="3"></textarea>
            </div>
          </div>
          <div class="col-md-4">
            <button data-bs-dismiss="modal" type="submit" class="btn btn-outline-dark w-100 mt-2"> Save Changes</button>
          </div>
        </form>
      </div>

      <div class="col-md-6 elevation-5  d-flex justify-content-center align-items-center text-shadow rounded-end"
        :style="{ backgroundImage: `url(${editable.coverImg})` }">
        <div>
          <img :src="editable.picture" alt="" class="rounded-circle border border-white border-4" height="150"
            width="150">
          <h4 class="text-center my-3">{{ editable.name }}</h4>
          <p class="text-shadow">{{editable.bio}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { Modal } from "bootstrap";
import { ref, watchEffect } from "vue";
import { AppState } from "../../../AppState.js";
import { accountService } from "../../../services/AccountService.js";
import Pop from "../../../utils/Pop.js";
// import { AppState } from "../AppState.js";
// import { accountService } from "../services/AccountService.js";
// import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({});

    watchEffect(() => {
      editable.value = { ...AppState.account };
    });

    return {
      editable,
      file: computed(() => AppState?.filePicker),

      async handleSubmit() {
        try {
          await accountService.editAccount(editable.value);
        } catch (error) {
          console.error("[]", error);
          Pop.error(error);
        }
      },
      onFileSelected(event) {
     //   console.log(event.target.files[0]);
        let test = event.target.files[0];
        AppState.filePicker = test;
    //    console.log(AppState.filePicker);
    //    console.log(";hi");
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
