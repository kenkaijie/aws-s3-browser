<template>
  <div>
    <div class="greeting">
      Hello {{ name }}{{ exclamationMarks }}
    </div>
    <button @click="decrement">
      -
    </button>
    <button @click="increment">
      Inc +
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";

@Component({})
export default class HelloComponent extends Vue {
  @Prop({required: true}) name!: string;
  @Prop({default: 0}) initialEnthusiasm!: number;

  enthusiasm: number = this.initialEnthusiasm;
  
  public get exclamationMarks() : string {
    return Array(this.enthusiasm + 1).join('!');
  }
  
  public increment(): void {
    this.enthusiasm++;
  }

  public decrement(): void {
    if (this.enthusiasm > 1) {
      this.enthusiasm--;
    }
  }
}
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>