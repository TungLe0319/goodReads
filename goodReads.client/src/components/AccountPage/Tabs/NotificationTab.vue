<template>
  <div class="container bg-dark">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="card p-2 d-flex justify-content-between">
          <div class=""></div>

          <div class="d-flex">
            <button>View</button>
            <button>Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
    };
  },
};
</script>

<style lang="scss" scoped></style>
