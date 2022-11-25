<template>
  <div class="component">
this is profiles page

  </div>
</template>


<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { profilesService } from '../services/profilesService.js';
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const route = useRoute();

    async function getProfile()
    {
      try {
          await profilesService.getProfile(route.params.id)
        } catch (error) {
          console.error('[getProfile]',error)
          Pop.error(error)
        }
    }

    onMounted(() => {
      getProfile()
    })

    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>