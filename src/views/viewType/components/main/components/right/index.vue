<template>
  <div class="right">
    <Item :title="`隐私计算次数`">
      <template #chart>
        <CalculationTimes></CalculationTimes>
      </template>
    </Item>
    <Item :title="`任务活跃度`">
      <template #chart>
        <EncryptionTimes></EncryptionTimes>
      </template>
    </Item>
    <Item :title="`隐私计算数据量`">
      <template #chart>
        <DataScatter></DataScatter>
      </template>
    </Item>
  </div>
</template>


<script setup>
import Item from "../item.vue";
import CalculationTimes from "./components/calculation-times/index.vue";
import EncryptionTimes from './components/encryption-times/index.vue'
import DataScatter from './components/data-scatter/index.vue'
</script>

<style lang="scss" scoped>
.right {
  float: right;

  .item {
    &:nth-child(1) {
      height: 155px;
      ::v-deep(.title_border) {
        width: 72px;
      }
    }
    &:nth-child(2) {
      height: 142.5px;
      ::v-deep(.title_border) {
        width: 65px;
      }
    }
    &:nth-child(3) {
      height: 155.5px;
      ::v-deep(.title_border) {
        width: 85px;
      }
    }
  }
}
</style>