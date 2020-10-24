<template>
    <div>
        Name: <input v-model="name" type="text">
        <h1>Hello Component</h1>
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from "vue-property-decorator";

/* Components */
import HelloComponent from "@/components/HelloComponent.vue";

@Component({
    components: {
        HelloComponent
    }
})
export default class AppComponent extends Vue {
    name: string = "Heyo";
}
</script>