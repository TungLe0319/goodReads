<template>
<div class="container">
  <div class="row">
    <div class="col-md-12" v-if="account.bio">
      <p class="fs-5" > 
        {{account.bio}}
      </p>
    </div>
  </div>
</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../../AppState.js";

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
      account:computed(() => AppState.account),
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
