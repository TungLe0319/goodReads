<template>
   <div class="card p-2 elevation-4 border-0">
          <p>2.99</p>
          <p>Available for a limited time</p>
    
          <div class="card-body d-flex flex-column justify-content-center">
            <button class="btn btn-outline-dark" @click="addToBookShelf()">
              Save To BookShelf
            </button>
            <div class="mb-3">
              <label for="" class="form-label">Add to BookShelf</label>
              <select
                v-model="editable.bookShelfId"
                class="form-select form-select-lg"
                name=""
                id=""
              >
                <option value="" v-for="b in bookShelves">{{ b.title }}</option>
              </select>
            </div>
            <button
              class="btn btn-outline-dark mt-2"
              data-bs-toggle="modal"
              data-bs-target="#createReview"
               data-bs-backdrop="false"
            >
              Review
            </button>
            <div class="mt-3">
              <small>Share with your network :</small>
              <div class="d-flex gap-2 justify-content-center mt-2">
                <a
                  target="_blank"
                  OnClick="window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); return false;"
                  href="https://www.twitter.com"
                >
                  <img
                    src="../assets/img/ShareIcons/twitter.png"
                    alt=""
                    width="30"
                  />
                </a>

                <a href="mailto:">
                  <img
                    src="../assets/img/ShareIcons/email.png"
                    alt=""
                    width="30"
                  />
                </a>
                <img
                  src="../assets/img/ShareIcons/link.png"
                  alt=""
                  width="30"
                  @click="copyToClipBoard()"
                />

                <a
                  target="_blank"
                  OnClick="window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); return false;"
                  href="https://www.facebook.com"
                >
                  <img
                    src="../assets/img/ShareIcons/facebook.png"
                    alt=""
                    width="30"
                  />
                </a>

                <a
                  target="_blank"
                  OnClick="window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); return false;"
                  href="http://pinterest.com"
                >
                  <img
                    src="../assets/img/ShareIcons/pinterest.png"
                    alt=""
                    width="30"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Pop from "../../utils/Pop.js";




export default {
props:{

       },
  setup(props) {
    const editable = ref({});
    
    onMounted(() => {

    });
    watchEffect(() => {});
const route = useRoute()
    return {
      editable,
           copyToClipBoard() {
        navigator.clipboard.writeText(route.fullPath);
        Pop.toast(`Copied To ClipBoard`);
      },
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
