<template>
<div class="col-md-12">
  <div class="card">
    <img src="https://ebookfriendly.com/wp-content/uploads/2012/11/Book-iPad-wallpaper-Books.jpg" alt="" width="" height="200" class="bannerImg">
    <div class="card-img-overlay">
     <div class="row">
      <div class="col-md-6">
        
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
.bannerImg{
  object-fit: cover;
}
</style>
