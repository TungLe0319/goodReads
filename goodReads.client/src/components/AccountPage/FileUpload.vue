<template>
      <input ref="file" v-on:change="handleFileUpload()"  type="file">
</template>
<script>

import { ref} from "vue"

export default{
    name:'Add',

    setup() {
        const file = ref(null)

        const handleFileUpload = async() => {
           // debugger;
            console.log("selected file",file.value.files)
            //Upload to server
        }

        return {
          handleFileUpload,
          file
       }
    }
}

</script>