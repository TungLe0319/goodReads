<template>
  <footer class="text-center text-lg-start text-white mt-5 " style="background-color: #1c2331">
    

    <section class="d-flex justify-content-between p-3 bg-create position-relative mt-5 ">
      <div class="custom-shape-divider-bottom-1670813904 mt-5">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
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
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px" />
            <p>
              Thank you for taking the time and viewing this application, If you
              would like to see more of our work please check out our Github
              Profiles and Get in touch with us through LinkedIn
            </p>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mb-4">
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr class="mb-4 mt-0 d-inline-block mx-2" style="width: 60px; background-color: #7c4dff; height: 2px" />
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
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px" />
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>

          <div class="col-md-4  mx-2 mb-md-0 mb-4">
            <!-- NOTE tung -->
            <div class="d-flex">
              <img src="../../src/assets/img/Portraits/tungle.jpg" alt="" class="forcedImg elevation-5 hover" />
              <div class="ms-3 d-flex align-items-center">
                <a href="https://www.linkedin.com/in/tung-le0319
" target="_blank" title="LinkedIn" class="text-white me-4">
                  <i class="mdi mdi-linkedin fs-1"></i>
                </a>
                <a href="https://github.com/TungLe0319 " target="_blank" title="Github" class="text-white me-4">
                  <i class="mdi mdi-github fs-1"></i>
                </a>
                <!-- <a href="" class="text-white me-4">
                  <i class="mdi mdi-email fs-1"></i>
                </a> -->
              </div>
            </div>
            <!-- NOTE tri -->
            <div class="d-flex">
              <img src="../../src/assets/img/Portraits/trile.jpg" alt="" class="forcedImg elevation-5 hover" />
              <div class="ms-3 d-flex align-items-center">
                <a href="https://www.linkedin.com/in/tri-le1122
" target="_blank" title="LinkedIn" class="text-white me-4">
                  <i class="mdi mdi-linkedin fs-1"></i>
                </a>
                <a href="https://github.com/TriLe1122" target="_blank" title="Github" class="text-white me-4">
                  <i class="mdi mdi-github fs-1"></i>
                </a>
                <!-- <a href="" class="text-white me-4">
                  <i class="mdi mdi-email fs-1"></i>
                </a> -->
              </div>
            </div>
            <!-- NOTE dan -->
            <div class="d-flex">
              <img src="../../src/assets/img/Portraits/daniel-le.jpg" alt="" class="forcedImg elevation-5 hover" />
              <div class="ms-3 d-flex align-items-center">
                <a href="https://www.linkedin.com/in/daniel-le97/
" target="_blank" title="LinkedIn" class="text-white me-4">
                  <i class="mdi mdi-linkedin fs-1"></i>
                </a>
                <a href="https://github.com/daniel-le97" target="_blank" title="Github" class="text-white me-4">
                  <i class="mdi mdi-github fs-1"></i>
                </a>
                <!-- <a href="" class="text-white me-4">
                  <i class="mdi mdi-email fs-1"></i>
                </a> -->
              </div>
            </div>
          </div>






        </div>
      </div>
    </section>

    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)"></div>
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

    onMounted(() => { });
    watchEffect(() => { });

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

.custom-shape-divider-bottom-1670813904 {
    position: absolute;
    bottom: 93px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1670813904 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 73px;
}

.custom-shape-divider-bottom-1670813904 .shape-fill {
    fill: #F5A53C;
}

</style>
