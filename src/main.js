import { createApp } from "vue";
import App from "./App.vue";
// import { backDomain } from "../MainConstant";

const app = createApp(App);

// app.use(axios, {
//   baseUrl: backDomain,
// });

app.mount("#app");
