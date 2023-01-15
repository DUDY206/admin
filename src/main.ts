import { createApp } from "vue";
import { createPinia } from "pinia";
import { Vue3ProgressPlugin } from "@marcoschulte/vue3-progress";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import mitt from "mitt";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import "@marcoschulte/vue3-progress/dist/index.css";
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/regular.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
import "@fortawesome/fontawesome-free/scss/brands.scss";
import "@fortawesome/fontawesome-free/scss/v4-shims.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
import "./scss/styles.scss";

import App from "./App.vue";
import router from "./router";

import Card from "@/components/bootstrap/Card.vue";
import CardBody from "@/components/bootstrap/CardBody.vue";
import CardHeader from "@/components/bootstrap/CardHeader.vue";
import CardFooter from "@/components/bootstrap/CardFooter.vue";
import CardGroup from "@/components/bootstrap/CardGroup.vue";
import CardImgOverlay from "@/components/bootstrap/CardImgOverlay.vue";
import CardExpandToggler from "@/components/bootstrap/CardExpandToggler.vue";
import contenteditable from "vue-contenteditable";
import { store } from "@/stores/vuex/store";
import CKEditor from "@ckeditor/ckeditor5-vue";
import VueDragscroll from "vue-dragscroll";

const emitter = mitt();
const app = createApp(App);

// eslint-disable-next-line vue/multi-word-component-names
app.component("Card", Card);
app.component("CardBody", CardBody);
app.component("CardHeader", CardHeader);
app.component("CardFooter", CardFooter);
app.component("CardGroup", CardGroup);
app.component("CardImgOverlay", CardImgOverlay);
app.component("CardExpandToggler", CardExpandToggler);

app.use(createPinia());
app.use(router);
app.use(Vue3ProgressPlugin);
app.use(PerfectScrollbar);
app.use(store);
app.use(contenteditable);
app.use(CKEditor);
app.use(VueDragscroll);

app.config.globalProperties.emitter = emitter;
app.mount("#app");
