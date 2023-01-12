<template>
  <div class="left">
    <Item :title="`系统性能`">
      <template #chart>
          <SysPerformance></SysPerformance>
      </template>
    </Item>
    <Item :title="`任务完成度`">
      <template #chart>
        <TaskCompletion></TaskCompletion>
      </template>
    </Item>
    <Item :title="`数据交易量`">
      <template #chart>
        <DataTransaction></DataTransaction>
      </template>
    </Item>
  </div>
</template>


<script setup>
import Item from "../item.vue";
import SysPerformance from "./sys-performance/index.vue";
import TaskCompletion from './task-completion/index.vue'
import DataTransaction from './data-transaction/index.vue'
</script>

<style lang="scss" scoped>
.left {
  float: left;
  .item {
    &:nth-child(1) {
      height: 180px;

    }
    &:nth-child(2) {
      height: 147px;
      ::v-deep(.title_border){
        width: 60px;
      }
    }
    &:nth-child(3) {
      height: 126px;
      ::v-deep(.title_border){
        width: 60px;
      }
    }
  }
}
</style>