<template>
     
        <div class="card p-2 bg-transparent border-0 bg-secondary easySteps">
          <b> WANT THE MOST?</b>
          <p class="text-muted">Follow these easy steps.</p>
          <div class="card-body">
            <ul class="list-group bg-transparent border-0">
              <li
                class="list-group-item bg-transparent border-0 d-flex align-items-center"
              >
                <p class="bg-danger rounded p-2 mb-0 px-3">1</p>
                <p class="mb-0 ms-2 text-decoration-underline">
                  Wishlist at least 2 books
                </p>
              </li>
              <li
                class="list-group-item bg-transparent border-0 d-flex align-items-center"
              >
                <span class="bg-danger rounded p-2">1</span>
                <p class="mb-0 ms-2 text-decoration-underline">
                  Follow at least 5 authors
                </p>
              </li>
              <li
                class="list-group-item bg-transparent border-0 d-flex align-items-center"
              >
                <span class="bg-danger rounded p-2">1</span>
                <p class="mb-0 ms-2 text-decoration-underline">
                  Write your first review
                </p>
              </li>

              <li
                class="list-group-item bg-transparent border-0 d-flex align-items-center"
              >
                <span class="bg-danger rounded p-2">1</span>
                <p class="mb-0 ms-2 text-decoration-underline">
                  Recommend a book
                </p>
              </li>
            </ul>
          </div>
        </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js";

export default {
props:{

       },
  setup(props) {
    const editable = ref({});
    
    onMounted(() => {

    });
    watchEffect(() => {});

    return {
      editable,
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
