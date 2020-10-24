import Vue from "vue";
import AppComponent from "./AppComponent.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
    el: "#app",
    components: {
        AppComponent
    },
    template: `
    <app-component/>
    `
});