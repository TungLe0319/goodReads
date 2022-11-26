<template>
  <div class="modal-body">
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center">
        <h1>Search Books</h1>
      </div>
      <div class="col-md-12 d-flex justify-content-center">
        <form @submit.prevent="addFavoriteBook()" class="d-flex flex-column">
          <div class="my-5 position-relative">
            <input
              v-model="editable.title"
              type="search"
              name=""
              id=""
              class="p-2 form-control"
            />
           
            <div class="position-absolute">
              <ul class="list-group">
                <li class="list-group-item" v-for="t in title">
                  {{ t }}
                </li>
              </ul>
            </div>
          </div>

          <button type="submit" class="btn btn-primary mt-3">
            Submit Favorite
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import Pop from "../../utils/Pop.js";

export default {
  props: {},
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      title: computed(() => AppState?.books.map((b) => b.title).filter(x=> x.includes(editable.value.title))),
    };
  },
};
</script>

<style lang="scss" scoped></style>
