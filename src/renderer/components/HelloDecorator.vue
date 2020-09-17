<template>
  <el-card class="box-card greeting">
    <div slot="header" class="clearfix">
      <span>Hello {{ name }}{{ exclamationMarks }}</span>
    </div>
    <div>
      <el-button @click="decrement">-</el-button>
      <el-button @click="increment">Inc +</el-button>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class HelloDecorator extends Vue {
    @Prop() name!: string;
    @Prop() initialEnthusiasm!: number;
    enthusiasm = this.initialEnthusiasm;
    increment() {
        this.enthusiasm++;
    }
    decrement() {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }
    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }
}
</script>

<style lang="scss">
$greet-font-size: 50px; 

.greeting {
    font-size: $greet-font-size;
}
</style>