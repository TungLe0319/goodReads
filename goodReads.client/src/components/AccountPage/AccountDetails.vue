<template>
  <div class="accountDetails container mt-5" v-if="account">
<div class="row">
  <div class="col-4">
    <img :src="account.picture" :alt="account.name" :title="account.name"
     height='300' class="rounded-circle">
  </div>
  <div class="col-8 d-flex flex-column justify-content-between">
   <div class="d-flex justify-content-between">
    <span class="fs-1">{{account.name}}</span>
     <button class="btn btn-danger" @click="follow()" ><i class="mdi mdi-heart fs-1"></i></button>
     <!-- <button class="btn btn-primary">Following</button> -->
   </div>
   <div class="d-flex gap-2">
    <button class="btn btn-primary">About</button>
    <button class="btn btn-primary">Reviews</button>
    <button class="btn btn-primary">Following</button>
    <button class="btn btn-primary">Followers</button>
   </div>
  </div>
</div>
  </div>
</template>


<script>
import { accountService } from '../../services/AccountService'
import Pop from '../../utils/Pop'





export default {
  props:{
    account:{type: Object, required: true}
  },
  setup(props){
    return {
       async follow(){
        try {
            await accountService.follow(props.account.id)
          } catch (error) {
            console.error('[]',error)
            Pop.error(error)
          }
       
        }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>