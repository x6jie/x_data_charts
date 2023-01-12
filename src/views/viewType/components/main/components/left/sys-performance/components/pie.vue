<template>
  <div class="pie">
    <div class="pie_chart_item" :class="`pie_chart_${index}`"></div>
    <div class="pie_per en_font">{{ state.per }}%</div>
    <div class="pie_text zh_font_medium">{{ item.title }}</div>
  </div>
</template>

<script setup>
import { inject, nextTick, onMounted, onUnmounted, reactive } from "vue";
let myChart;
let echarts = inject("ec");
// console.log(echarts);
const props = defineProps({
  index: {
    type: Number,
  },
  item: {
    type: Object,
  },
});
const state = reactive({
  per: props.item.per,
  Memory: { num: 0, type: 1 },
});
const option = {
  series: [
    {
      hoverAnimation: false, // 开启hover放大效果
      type: "pie",
      radius: ["65%", "90%"],
      label: {
        show: false,
        position: "center",
      },

      data: [
        { itemStyle: { color: "#FF7B00" }, value: state.per },
        {
          itemStyle: { color: "rgba(27,255,243,0.20)" },
          value: 100 - state.per,
        },
      ],
      startAngle: 270,
    },
    {
      type: "pie",
      radius: ["97%", "100%"],
      label: {
        show: false,
        position: "center",
      },

      data: [{ itemStyle: { color: "rgba(27,255,243,0.20)" }, value: 1 }],
    },
    {
      type: "pie",
      radius: ["58%", "55%"],
      label: {
        show: false,
        position: "center",
      },

      data: [{ itemStyle: { color: "rgba(27,255,243,0.20)" }, value: 1 }],
    },
  ],
};
let timer;

const setPie = () => {
  setTimeout(() => {
    myChart.setOption(option);
  }, 100);
};
onMounted(() => {
  let myDom = document.querySelector(`.pie_chart_${props.index}`);
  // console.log(myDom);
  myChart = echarts.init(myDom);
  setPie();
  nextTick(() => {
    myChart.resize();
  });
  timer = setInterval(function () {
    let radNum;
    // console.log(props.index);
    // cpu
    if (props.index === 0) {
      radNum = ((Math.random() * 20) | 0) - 0;
      state.per = props.item.per + radNum;
    }
    // 内存
    else if (props.index === 1) {
      radNum = ((Math.random() * 30) / 10).toFixed(1) - 0;
      // state.Memory.num = radNum
      if (state.Memory.num < 5 && state.Memory.type === 0) {
        state.Memory.num += radNum;
      } else if (state.Memory.num > 0 && state.Memory.type === 1) {
        state.Memory.num -= radNum;
      } else if (state.Memory.num >= 5) {
        state.Memory.type = 1;
      } else if (state.Memory.num <= 0) {
        state.Memory.type = 0;
      }
      state.per = (props.item.per + state.Memory.num).toFixed(1);
    }
    // 硬盘
    else if (props.index === 2) {
      if (state.per > 50 && state.per< 90) {
        if(state.per>= 85) {
          radNum = (((Math.random() * 30) / 100).toFixed(1) - 0.2)
        }
        else radNum = ((Math.random() * 2) / 10).toFixed(1) - 0;
      } else if(state.per >= 89.8) {
        radNum = -(((Math.random() * 2) / 10).toFixed(1) - 0);
      }
      // console.log(radNum);
      state.Memory.num += radNum;
      state.per = (props.item.per + state.Memory.num).toFixed(1);
    }
    option.series[0].data[0].value = state.per;
    option.series[0].data[1].value = 100-state.per;

    myChart.setOption(option, true);
  }, 1500);
});
onUnmounted(() => {
  clearInterval(timer);
});
window.addEventListener("resize", function () {
  myChart.resize();
});
</script>

<style lang="scss" scoped>
$color-orange: #ff7b00;
.pie {
  position: relative;
  text-align: center;
  height: 100%;
  width: 100%;
  .pie_chart_item {
    height: 100%;
    width: 100%;
  }
  .pie_per {
    position: absolute;
    top: 22px;
    left: 0;
    right: 0;
    // right: 8px;
    // width: 30px;
    font-size: 14px;
    transform: scale(0.5);
    color: $color-orange;
    font-weight: 700;
  }
  .pie_text {
    position: absolute;
    left: 15px;
    font-size: 14px;
    transform: scale(0.5);
    color: #ffffff;
    font-weight: 500;
  }
}
</style>