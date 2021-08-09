import BaseComponent from "bootstrap/js/dist/base-component";
import Vue from "vue";

const app = new Vue({
    el: "#app",
    render: h => h(BaseComponent)
});
