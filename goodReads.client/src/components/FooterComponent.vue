<template>
  <!-- Remove the container if you want to extend the Footer to full width. -->

  <!-- Footer -->
  <footer
    class="text-center text-lg-start text-white mt-5"
    style="background-color: #1c2331"
  >
    <!-- Section: Social media -->
    <section
      class="d-flex justify-content-between p-3"
      style="background-color: #6351ce"
    >
      <!-- Left -->
      <div class="me-5 d-flex align-items-center">
        <span>Get connected with us on social networks:</span>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div class="">
        <a href="" class="text-white me-4 ">
          <i class="mdi mdi-facebook fs-1"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="mdi mdi-twitter fs-1"></i>
        </a>
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
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-2 mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold">BetterAfterBooks</h6>
            <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px; background-color: #7c4dff; height: 2px"
            />
            <p>
              Thank you for using our Application, Hope you enjoyed your
              experience, if not please leave us feedback on how we can improve!
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mb-4">
          <!-- Links -->
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr
              class="mb-4 mt-0 d-inline-block mx-2"
              style="width: 60px; background-color: #7c4dff; height: 2px"
            />
            <p>
              <a href="#/account" class="text-white">Your Account</a>
            </p>
            <p>
              <a href="#!" class="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a href="#/account/lists" class="text-white">Your Lists</a>
            </p>
            <p>
              <a href="#" class="text-white">Help</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-2 mb-4">
            <!-- Links -->
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
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-2 mb-md-0 mb-4">
      
            <div>
              <img
                src="src/assets/img/Portraits/tungle.jpg"
                alt=""
                class="forcedImg"
              />
            </div>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
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
