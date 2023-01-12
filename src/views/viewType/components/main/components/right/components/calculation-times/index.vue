<template>
  <div class="calculation_times">
    <div class="calculation_times_chart"></div>
    <div class="calculation_times_chart_x flex_center">
      <div
        class="en_font color-fff font-6 calculation_times_chart_x_item"
        v-for="item in state.xData"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
    <div class="calculation_times_chart_y">
      <div
        class="en_font color-fff font-6 calculation_times_chart_y_item"
        v-for="item in state.yData"
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

let option;
let myChart;
const date = new Date().getMonth()+1
const state = reactive({
  xData: ["2", "3", "4", "5", "6", "7", "8", "9月"],
  yData: [ "万次","500", "400", "300", "200", "100", "0"],
});
 for (let i = 7; i >= 0; i--) {
   let value
   if(i==7) {
     value = date+'月'
   }else {
     value = date-(7-i)
     if(value<=0) {
       value+=12
     }
   }
   state.xData[i] = value
}
console.log(state.xData);

const setPie = () => {
  setTimeout(() => {
    myChart.setOption(option);
  }, 100);
};
onMounted(() => {
  let myDom = document.querySelector(`.calculation_times_chart`);
  console.log(myDom);
  myChart = echarts.init(myDom);
  let dataAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
  let data = [220, 182, 191, 234, 290, 330, 310, 123];
  option = {
    grid: {
      left: "1%",
      right: "1%",
      bottom: "0%",
      top: "5%",
      show: false,
    },
    xAxis: {
      show: false,
      data: dataAxis,
    },
    yAxis: {
      show: false,
      axisLine: {
        show: false,
      },
    },
    series: [
      {
        type: "bar",
        showBackground: true,
        data: data,
        itemStyle: {
          color: "#FF7B00",
        },
        animationDuration:5000,
        backgroundStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
            {
              offset: 0,
              color: "rgba(58,255,250,0)",
            },
            {
              offset: 0.8,
              color: "rgba(52,255,249,0.1)",
            },
            {
              offset: 1,
              color: "rgba(27,255,243,0.1)",
            },
          ]),
          borderColor: "rgba(27,255,243,0.2)",
          borderWidth: 1,
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
.calculation_times {
  position: relative;
  .calculation_times_chart {
    position: absolute;
    top: 8px;
    left: 25px;
    height: 80px;
    width: 173px;
  }
  .calculation_times_chart_x {
    justify-content: space-between;
    position: absolute;
    top: 90px;
    left: 28px;
    width: 173px !important;
    .calculation_times_chart_x_item {
      width: 30px;
      white-space: nowrap;
    }
  }
  .calculation_times_chart_y {
    position: absolute;
    text-align: right;
    line-height: 14px;
    top: 0px;
    left: -5px;
    height: 80px;
    .calculation_times_chart_y_item {
      &:nth-child(1) {
        line-height: 8px;
      }
    }
  }
}
</style>