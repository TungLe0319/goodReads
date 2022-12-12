// import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
// import { baseURL, useSocket } from "../env.js";
// import { logger } from "./Logger.js";

// const SOCKET_EVENTS = {
//   connection: "connection",
//   connected: "connected",
//   disconnect: "disconnect",
//   authenticate: "authenticate",
//   authenticated: "authenticated",
//   userConnected: "userConnected",
//   userDisconnected: "userDisconnected",
//   error: "error",
// };

// class SignalHub {
//   /**
//    * @param {String} url
//    */
//   constructor(requiresAuth = false) {
//     if (!useSocket) {
//       return;
//     }
//     // let signalR = signalR
//     this.socket = new HubConnectionBuilder()
//       .withUrl(baseURL + "/chathub")
//       // .configureLogging(LogLevel.Debug)
//       .build();
//     this.user = null;
//     this.connectionId = null;
//     this.requiresAuth = requiresAuth;
//     this.queue = [];
//     this.authenticated = false;
//     this.socket.onreconnecting(function(error){
//       logger.log("[SOCKET_CONNECTION]",error)
//     });
//     // this.socket.(function (error) {
//     //   this.onError(error);
//     // });
//     this.socket.onreconnected(function(connectionId) {
//       this.onReconnected(connectionId);
//     });
//   }

//   start() {
//     this.socket?.start();
//   }
//   off(event, fn) {
//     this.socket?.off(event, fn.bind(this));
//     return this;
//   }

//   invoke(methodName) {
//     this.socket?.invoke(methodName);
//   }

//   on(event, fn) {
//     this.socket.on(event, fn.bind(this));
//     // logger.log(this.connection)
//     return this;
//   }

//   onReconnected(id) {
//     logger.log("[SOCKET_ID]", id);
//   }

//   onConnected(connection) {
//     logger.log("[SOCKET_CONNECTION]", connection);
//     this.connected = true;
//     this.playback();
//   }

//   onAuthenticated(auth) {
//     logger.log("[SOCKET_AUTHENTICATED]", auth);
//     this.authenticated = true;
//     this.playback();
//   }

//   authenticate(bearerToken) {
//     this.socket?.invoke(SOCKET_EVENTS.authenticate, bearerToken);
//   }

//   onError(error) {
//     logger.error("[SOCKET_ERROR]", error);
//   }

//   enqueue(action, payload) {
//     logger.log("[ENQUEING_ACTION]", { action, payload });
//     this.queue.push({ action, payload });
//   }

//   playback() {
//     logger.log("[SOCKET_PLAYBACK]");
//     const playback = [...this.queue];
//     this.queue = [];
//     playback.forEach((e) => {
//       this.emit(e.action, e.payload);
//     });
//   }

//   emit(action, payload = undefined) {
//     if (this.requiresAuth && !this.authenticated) {
//       return this.enqueue(action, payload);
//     }
//     if (!this.connected) {
//       return this.enqueue(action, payload);
//     }
//     this.socket?.invoke(action, payload);
//   }
// }

// export default new SignalHub();
