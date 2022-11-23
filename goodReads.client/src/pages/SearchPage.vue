<template>
  <section class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <h2>
          Explore Some Lore
        </h2>
      </div>
      <div class="col-md-3">
        <div>
          <strong>Categories:</strong>
          <p>Showing All</p>
        </div>
        <strong>All Categories</strong>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
      </div>
      <div class="col-md-9">

      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js";

export default {
  props: {

  },
  setup(props) {
    const editable = ref({});

    onMounted(() => {

    });
    watchEffect(() => { });

    return {
      editable,
    }
  }
}
</script>

<style lang="scss" scoped>
input[type="checkbox"] {
  accent-color: #f92f60;
}
</style>
