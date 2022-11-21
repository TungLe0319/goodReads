<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-md-12">
        <div class="d-flex justify-content-between">
          <h1>My Book Lists</h1>
          <button class="btn btn-danger h-50">
            <i class="mdi mdi-plus fs-5"> Add Book</i>
          </button>
        </div>
      </div>
      <div class="col-md-12">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-wishlist-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-wishlist"
              type="button"
              role="tab"
              aria-controls="nav-wishlist"
              aria-selected="true"
            >
              Wishlist
            </button>
            <button
              class="nav-link"
              id="nav-owned-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-owned"
              type="button"
              role="tab"
              aria-controls="nav-owned"
              aria-selected="false"
            >
              Owned
            </button>
            <button
              class="nav-link"
              id="nav-reading-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-reading"
              type="button"
              role="tab"
              aria-controls="nav-reading"
              aria-selected="false"
            >
              Reading
            </button>
            <button
              class="nav-link"
              id="nav-finished-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-finished"
              type="button"
              role="tab"
              aria-controls="nav-finished"
              aria-selected="false"
            >
              Finished
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-wishlist"
            role="tabpanel"
            aria-labelledby="nav-wishlist-tab"
            tabindex="0"
          >
          Wishlist
          </div>
      
          <div
            class="tab-pane fade"
            id="nav-owned"
            role="tabpanel"
            aria-labelledby="nav-owned-tab"
            tabindex="0"
          >
           owned
          </div>
          <div
            class="tab-pane fade"
            id="nav-reading"
            role="tabpanel"
            aria-labelledby="nav-reading-tab"
            tabindex="0"
          >
            reading
          </div>
          <div
            class="tab-pane fade"
            id="nav-finished"
            role="tabpanel"
            aria-labelledby="nav-finished-tab"
            tabindex="0"
          >
            finished
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {},
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      account: computed(() => AppState.account),
    };
  },
};
</script>

<style lang="scss" scoped></style>
