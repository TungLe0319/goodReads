<template>

        <div id="feedBack" class="card p-2  border-0 bg-secondary easySteps elevation-2">
          <b class="ms-3 mt-2">Have feedback? We're more than happy to listen</b>

          <div class="card-body">
            <form @submit.prevent="sendFeedBack()">

              <div class="mb-3">

                <textarea v-model="editable.body" class="form-control" name="feedBack" id="feedBack" rows="5"></textarea>
              </div>

              <button type="submit" class="btn bg-create ">leave Feed Back</button>
            </form>
          </div>
          <div class="card-footer">
          <button class="btn border-0 remindMeLater" @click="hide()"> Remind Me Later</button>
          </div>
        </div>
</template>

<script>

import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import { accountService } from "../../services/AccountService.js";
import { feedBackService } from "../../services/FeedBackService.js";
import { logger } from "../../utils/Logger.js"
import Pop from "../../utils/Pop.js";

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
      user:computed(() => AppState.user),
      async sendFeedBack(){
        try {
            await feedBackService.sendFeedBack(editable.value)
            Pop.toast('Thank you for sending us FeedBack to improve your experience!','success')
          } catch (error) {
            Pop.error(error,'[sendFeedBack]')
          }
      },
      hide(){
document.getElementById('feedBack').className = 'animate__animated animate__fadeOutRight'
      }
      }
    }
  }
</script>

<style lang="scss" scoped>

.remindMeLater:hover{
text-decoration: underline;
}
</style>
