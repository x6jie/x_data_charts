<template>
  <div class="data_scatter">
    <div class="data_scatter_echart"></div>
    <div class="data_scatter_echart_bg"></div>

    <div class="data_scatter_echart_x flex_center">
      <div
        class="en_font color-fff font-6 data_scatter_echart_x_item"
        v-for="item in state.xData"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
    <div class="data_scatter_echart_y">
      <div
        class="en_font color-fff font-6 data_scatter_echart_y_item"
        v-for="item in state.yData"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, inject, nextTick, reactive } from "vue";
import { resetChart } from "@/utils/index";
import dayjs from "dayjs";
const colors = ["#FF7B00", "#00FCFC"];
let fontSize;
let option;
let myChart;
let myDom;
let echarts = inject("ec");
const date = new Date();
const date1 = new Date();
const date2 = new Date();

let startDate = dayjs(date1.setMonth(date1.getMonth() - 2))
  .format("YYYY-MM-DD")
  .slice(0, 7);
date2.setMonth(date2.getMonth() + 1);
let endDate = dayjs(date2.setDate(date2.getDate() - date2.getDate())).format(
  "YYYY-MM-DD"
);
// console.log(startDate,endDate);
function getVirtulData(year) {
  year = year || "2017";
  var date = +echarts.number.parseDate(+year - 1 + "-01-01");
  var end = +echarts.number.parseDate(+year + 1 + "-01-01");
  var dayTime = 3600 * 24 * 1000;
  var data = [];
  var type = true;
  for (var time = date; time < end; time += dayTime) {
    // console.log(echarts.format.formatTime("yyyy-MM-dd", time), echarts.format.formatTime("yyyy-MM-dd", new Date()));
    if (
      echarts.format.formatTime("yyyy-MM-dd", time) ===
      echarts.format.formatTime("yyyy-MM-dd", new Date())
    ) {
      type = false;
    }
    if (type) {
      data.push([
        echarts.format.formatTime("yyyy-MM-dd", time),
        Math.floor(Math.random() * 8000 + 2000),
      ]);
    } else {
      data.push([echarts.format.formatTime("yyyy-MM-dd", time), 0]);
    }
  }
  return data;
}
const data = getVirtulData(date.getFullYear());
console.log(data, "data");
const setSca = () => {
  setTimeout(() => {
    fontSize =
      document.documentElement.style.cssText.split(":")[1]?.slice(0, -3) / 2 ||
      5;

    option = {
      title: {
        show: false,
        top: 30,
        left: "center",
        text: "Daily Step Count",
      },
      tooltip: {
        show: false,
      },
      visualMap: {
        show: false,
        min: 0,
        max: 10000,
        type: "piecewise",
        orient: "horizontal",
        left: "center",
        top: 65,
        inRange: {
          color: [
            "#09365B",
            "#ff7b00",
            "#E88818",
            "#FF9D25",
            "#FFB157",
            "#FFD390",
          ],
        },
      },
      calendar: {
        top: 0,
        left: 0,
        right: 0,
        cellSize: ["auto"],
        range: date.getFullYear(),
        itemStyle: {
          borderWidth: 2.5,
          borderColor: "#001e3e",
        },
        range: [startDate, endDate],
        yearLabel: { show: false },
      },
      series: {
        type: "heatmap",
        coordinateSystem: "calendar",
        data: data,
      },
    };

    myChart = echarts.init(myDom);
    myChart.setOption(option);
  }, 100);
};
const resetSca = () => {
  setSca();
  nextTick(() => {
    myChart.resize();
  });
};

console.log(startDate, endDate);
const state = reactive({
  xData: ["1月", "2月", "3月"],
  yData: ["日", "一", "二", "三", "四", "五", "六"],
});
for (let i = 2; i >= 0; i--) {
  let value = date.getMonth() + 1 - (2 - i);
  if (value <= 0) {
    value += 12;
  }
  state.xData[i] = value + "月";
}
onMounted(() => {
  myDom = document.querySelector(`.data_scatter_echart`);
  myChart = echarts.init(myDom);
  console.log(myChart);
  resetSca();
  // resetChart(myChart, option);
});
window.addEventListener("resize", function () {
  resetSca();
});
</script>

<style lang="scss" scoped>
.data_scatter {
  position: relative;
  .data_scatter_echart {
    position: absolute;
    // border-radius: 5px;
    // background-color: rgba(27, 255, 243, 0.01);
    top: 15px;
    left: 25px;
    padding: 0 2.5px;
    height: 86.5px;
    width: 182px;
    // background: url(../../../../../../../../assets/images/aaa.png) repeat 0 0 /
    //   contain;
    background-size: 5% 10%;
  }
  .data_scatter_echart_x {
    justify-content: space-around;
    letter-spacing: 5px;
    position: absolute;
    top: 0px;
    left: 28px;
    width: 182px !important;
  }
  .data_scatter_echart_y {
    position: absolute;
    text-align: right;
    line-height: 13px;
    top: 12px;
    left: 8px;
    height: 90px;
  }
}
</style>
