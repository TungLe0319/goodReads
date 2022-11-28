import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'
// import { VueSignalR } from "@dreamonkey/vue-signalr";
// import { HubConnectionBuilder } from "@microsoft/signalr";
// const connection = new HubConnectionBuilder()
//   .withUrl("http://localhost:7045/chathub")
//   .withAutomaticReconnect()
//   .build();
//   connection.start()

const root = createApp(App)
registerGlobalComponents(root)

root
  .use(router)
  .mount('#app')
  // .use(VueSignalR, {connection})
