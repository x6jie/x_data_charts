<template>
  <div class="data_transaction">
    <div class="data_transaction_chart"></div>
    <div class="data_transaction_chart_x flex_center">
      <div
        class="en_font color-fff font-6 data_transaction_chart_x_item"
        v-for="item in state.xData"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
    <div class="data_transaction_chart_y">
      <div
        class="en_font color-fff font-6 data_transaction_chart_y_item"
        v-for="item in state.yData"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
    <div class="data_transaction_chart_y2">
      <div
        class="en_font color-fff font-6 data_transaction_chart_y2_item"
        v-for="item in state.y2Data"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, nextTick, reactive } from "vue";
import { resetChart } from "@/utils/index";
let echarts = inject("ec");
let timer;
let option;
let myChart;
const data = new Date();
const state = reactive({
  xData: ["01-01", "04-01", "07-01", "01-01"],
  yData: ["笔", "400", "300", "200", "100", "0"],
  y2Data: ["%", "100", "75", "50", "25", "0"],

});

for (let i = 0; i < 4; i++) {
  let data = new Date();
  data.setDate(data.getDate() - 1 - (3 - i) * 5); //day和month会自动计算到上一个月的
  let monthV =
    +data.getMonth() + 1 < 10
      ? "0" + (+data.getMonth() + 1)
      : +data.getMonth() + 1;
  let dayV = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
  state.xData[i] = `${monthV}-${dayV}`;
}
const setPie = () => {
  setTimeout(() => {
    myChart.setOption(option);
  }, 100);
};
onMounted(() => {
  let myDom = document.querySelector(`.data_transaction_chart`);
  console.log(myDom);
  myChart = echarts.init(myDom);
  const colors = ["#FF7B00", "#00FCFC"];
  option = {
    color: colors,
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: "0%",
      show: false,
    },
    xAxis: [
      {
        show: false,
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        // prettier-ignore
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Evaporation",
        show: false,
        position: "right",
        alignTicks: false,
        axisLine: {
          show: false,
          lineStyle: {
            color: colors[0],
          },
        },
        axisLabel: {
          formatter: "{value} ml",
        },
      },
      {
        type: "value",
        name: "Precipitation",
        show: false,
        position: "right",
        alignTicks: true,
        offset: 80,
        axisLabel: {
          formatter: "{value} ml",
        },
      },
    ],
    series: [
      {
        name: "Evaporation",
        type: "bar",
        barWidth: "20%",
        showBackground: true,
        animationDuration: 2000,

        backgroundStyle: {
          color: "rgba(27,255,243,0.20)",
        },
        data: [
          40, 42, 50, 126, 41, 40, 40, 8, 15, 25, 42, 9, 85, 42, 32, 45, 40, 8,
          80, 84,
        ],
      },

      {
        name: "Temperature",
        type: "line",
        animationDuration: 5000,

        areaStyle: {
          shadowColor: "rgba(148, 95, 185, 0.5)",
          shadowBlur: 20, //阴影
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(58,255,250,0.2)",
            },
            {
              offset: 1,
              color: "rgba(27,255,243,0)",
            },
          ]), // 区域线条渐变色
        },
        yAxisIndex: 1,
        data: [
          85, 105, 90, 120, 88, 85, 120, 80, 84, 126, 90, 105, 55, 90, 85, 80,
          150, 142, 100, 80,
        ],
        symbolSize: 0.5, // 点大小，
        lineStyle: {
          width: 0.5,
        },
      },
    ],
  };
  setPie();
  nextTick(() => {
    myChart.resize();
  });

  resetChart(myChart, option);
});

window.addEventListener("resize", function () {
  myChart.resize();
});
</script>

<style lang="scss" scoped>
.data_transaction {
  position: relative;
  .data_transaction_chart {
    position: absolute;
    top: 5px;
    left: 16px;
    height: 60px;
    width: 180px;
  }
  .data_transaction_chart_x {
    justify-content: space-between;
    position: absolute;
    top: 65px;
    left: 12px;
    width: 185px !important;
  }
  .data_transaction_chart_y {
    position: absolute;
    text-align: right;
    line-height: 13.7px;
    top: -7px;
    left: -9px;
    height: 70px;
    .data_transaction_chart_y_item {
      &:nth-child(1) {
        line-height: 8px;
      }
    }
  }
  .data_transaction_chart_y2 {
    position: absolute;
    line-height: 13.7px;
    top: -12.5px;
    left: 191px;
    height: 68px;
    .data_transaction_chart_y_item {
      &:nth-child(1) {
        line-height: 8px;
      }
    }
  }
}
</style>