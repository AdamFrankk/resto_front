import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
// import { backDomain } from "../MainConstant";

const app = createApp(App);

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Headers"] =
  "Origin, X-Requested-With, Content-Type, Accept";

// app.use(axios, {
//   baseUrl: backDomain,
// });

app.mount("#app");
