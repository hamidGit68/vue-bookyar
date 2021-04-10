import Vue from "vue";
import App from "./App.vue";
import router from "./router";
/* adding bootstrap elements after installing them with this command:
 * "npm install jquery bootstrap@3.4.1 popper.js --save"
 * you must use this command in command prompt and in the directory of project:
 * "F:\web-files\codes\websites\bookyar\vue-bookyar\bookyar-site" */
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css";

/* this is the way that we add our own "js files" */
// import "@/my-scripts/homeScript.js";
// import "@/my-scripts/database.js";
// import "@/my-scripts/sliderCode.js";
// import VueRouter from "vue-router/types/router";

// import "@/my-scripts/database/sequlizeDB.js";

// force: true will drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync with { force: true }");
// });
Vue.config.productionTip = false;
// Vue.use(jqu);
// Vue.use(bsJs);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
