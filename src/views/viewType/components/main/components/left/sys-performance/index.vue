<template>
  <div class="performance">
    <div class="table flex_center">
      <div v-for="item in state.tableState" :key="item.num" class="table_item">
        <div class="number">
          <div class="num en_font">
            {{ item.num }}
          </div>
          <div class="com zh_font_medium color-fff">
            {{ item.com }}
          </div>
        </div>

        <div class="title zh_font_medium">
          {{ item.title }}
        </div>
      </div>
    </div>
    <div class="pid flex_center">
      <div
        v-for="(item, index) in state.pidState"
        :key="item.per"
        class="pid_item"
      >
        <Pie :index="index" :item="item"></Pie>
      </div>
    </div>
  </div>
</template>

<script setup>
import Pie from "./components/pie.vue";
import { reactive } from "vue";
const state = reactive({
  tableState: [
    {
      title: "市场规模",
      num: 225,
      com: "亿",
    },
    {
      title: "数据规模",
      num: 104,
      com: "TB",
    },
    {
      title: "运行时间",
      num: 631,
      com: "小时",
    },
  ],
  pidState: [
    {
      title: "CPU",
      per: 65.9,
    },
    {
      title: "内存",
      per: 72.5,
    },
    {
      title: "硬盘",
      per: 53.3,
    },
  ],
});
</script>

<style lang="scss" scoped>
$color-blueone: #00fcfc;

.performance {
  .table {
    height: 38.5px;
    width: 207px;
    background: url(../../../../../../../assets/images/xtbg.png) no-repeat;
    background-size: 100% 100%;
    .table_item {
      flex: 1;
      text-align: center;
      height: 28.5px;
      align-items: center;
      border-right: 1px solid rgba(27, 255, 243, 0.1);
      .number {
        display: flex;
        margin-left: 15px;
        .num {
          color: $color-blueone;
          line-height: 13.5px;
          font-size: 13.5px;
          font-weight: 500;
        }
        .com {
          top: 0;
          right: 0;
          font-size: 12px;
          transform: scale(0.5);
        }
      }

      .title {
        line-height: 1;
        font-size: 12px;
        transform: scale(0.63);
        color: #ffffff;
        font-weight: 500;
        white-space: nowrap;
      }
    }
  }
  .pid {
    margin-top: 12px;
    .pid_item {
      height: 60px;
      width: 60px;
    }
  }
}
</style>