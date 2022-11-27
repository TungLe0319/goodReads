<template>
  <footer
    class="text-center text-lg-start text-white mt-5 "
    style="background-color: #1c2331"
  >
    <section
      class="d-flex justify-content-between p-3 bg-create"
     
    >
      <div class="me-5 d-flex align-items-center">
        <h5 class="abril">Get connected with us on social networks:</h5>
      </div>

      <div class="">
        <a href="" class="text-white me-4">
          <i class="mdi mdi-google fs-1"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="mdi mdi-instagram fs-1"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="mdi mdi-linkedin fs-1"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="mdi mdi-github fs-1"></i>
        </a>
      </div>
    </section>

    <section class="">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-2 mb-4">
            <h6 class="text-uppercase fw-bold">BetterAfterBooks</h6>
            <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px; background-color: #7c4dff; height: 2px"
            />
            <p>
              Thank you for taking the time and viewing this application, If you
              would like to see more of our work please check out our Github
              Profiles and Get in touch with us through LinkedIn
            </p>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mb-4">
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr
              class="mb-4 mt-0 d-inline-block mx-2"
              style="width: 60px; background-color: #7c4dff; height: 2px"
            />
            <p>
              <a href="#/account" class="text-white">Your Account</a>
            </p>

            <p>
              <a href="#/account/lists" class="text-white">Your Lists</a>
            </p>
            <p>
              <a href="#/search" class="text-white">SearchPage</a>
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-2 mb-4">
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px; background-color: #7c4dff; height: 2px"
            />
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>

          <div class="col-md-4  mx-2 mb-md-0 mb-4">
            <div class="d-flex">
              <img
                src="src/assets/img/Portraits/tungle.jpg"
                alt=""
                class="forcedImg elevation-5"
              />
              <div class="ms-3 d-flex align-items-center">
                <a href="" class="text-white me-4">
                  <i class="mdi mdi-linkedin fs-1"></i>
                </a>
                <a href="" class="text-white me-4">
                  <i class="mdi mdi-github fs-1"></i>
                </a>
                <a href="" class="text-white me-4">
                  <i class="mdi mdi-email fs-1"></i>
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="text-center p-3"
      style="background-color: rgba(0, 0, 0, 0.2)"
    ></div>
  </footer>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

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

<style lang="scss" scoped>
.forcedImg {
  height: 80px;
  width: 80px;
  object-fit: cover;
  border-radius: 50%;
  object-position: top;
}
</style>
