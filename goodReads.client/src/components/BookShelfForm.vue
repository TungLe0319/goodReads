<template>
  <div class="modal-body">
    <form @submit.prevent="createBookShelf()">
      <div class="form-floating mb-3">
        <input
          v-model="editable.title"
          type="text"
          class="form-control"
          name="title"
          id="title"
          placeholder=""
        />
        <label for="title">title</label>
      </div>
      <div class="form-floating mb-3">
        <input
          v-model="editable.img"
          type="url"
          class="form-control"
          name="image"
          id="image"
          placeholder=""
        />
        <label for="image">image</label>
      </div>

      <div class="mb-3">
        <label for="" class="form-label">Type</label>
        <select
          v-model="editable.type"
          class="form-select form-select-lg"
          name=""
          id=""
        >
          <option value="wishList">Wish List</option>
          <option value="favorite">Favorite</option>
          <option value="reading">Reading</option>
          <option value="finished">Finished</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { onMounted, ref, watchEffect } from "vue";
import { bookShelvesService } from "../services/BookShelvesService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {},
  setup(props) {
    const editable = ref({ type: "wishList" });

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      async createBookShelf() {
        try {
          await bookShelvesService.createBookShelf(editable.value);
        } catch (error) {
          Pop.error(error, "[createBookShelf]");
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
