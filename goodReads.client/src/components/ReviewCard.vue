<template>
<div class="card bg-transparent my-3  square">
<div class="d-flex align-items-center justify-content-between px-5 pt-3 pb-2">
  <div class="d-flex align-items-center">

    <div role="accountImg">
    
      <img :src="review.creator.picture" alt="" class="img-fluid rounded-circle" width="60">
    </div>
    <div role="name">
    <p class="ms-3 fs-6 text-decoration-underline">{{review.creator.name.split('@')[0]}} </p>
    
    </div>
  </div>

<div role="createdAt " class="d-flex align-items-center">
  <button class=" btn p-0  me-3 "> <i class="mdi mdi-plus-box fs-1 "></i></button>
  <p class="text-dark lighten-60">{{new Date(review.createdAt).toLocaleString()}}</p>
</div>

</div>

<div class="px-4">

  <div  >
    <p class="fs-5"> <b> Recommend </b>  this book</p>
  </div>
  
  <div >
    <p class="fs-5">{{review.body}}</p>
  </div>
</div>

<div class="bg-light darken-10 ">

 <div class="form-floating m-4 ">
   <input
     type="text"
     class="form-control border-0 " name="reviewComment" id="reviewComment" placeholder="">
   <label for="reviewComment">comment</label>
 </div>
</div>
</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { Review } from "../models/Review.js";
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js";

export default {
props:{
review:{type: Review, required:true }
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
