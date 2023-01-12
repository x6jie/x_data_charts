<template>
  <div class="view_type" style="min-width:960px">
    <Header></Header>
    <div class="main">
      <Main></Main>
    </div>
    <!-- <div class="main"  style="width:300px;height:300px"></div> -->
  </div>
</template>

<script>
import Header from "./components/header/index.vue";
import Main from "./components/main/index.vue";
import { inject, onMounted } from "vue";
import "@/base.scss";
export default {
  components: {
    Header,
    Main,
  },
  name: "HomeView",
  setup() {
    let echarts = inject("ec");
    let myChart;

    window.onresize = function () {
    //   myChart.resize();
      //自适应大小
      setFontSize()
      
    };
    const setFontSize = () => {
      let clientWidth = document.documentElement.clientWidth;
      clientWidth < 960 && (clientWidth = 960)
        // ? (clientWidth = 960)
        // : clientWidth > 1920 && (clientWidth = 3500);
      document.documentElement.style.fontSize = clientWidth / 80 + "px";
    }

    onMounted(() => {
      setFontSize()
      //   myChart = echarts.init(document.querySelector(".main"));
      //   // 绘制图表
      //   myChart.setOption({
      //     title: {
      //       text: "ECharts 入门示例",
      //     },
      //     tooltip: {},
      //     xAxis: {
      //       data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      //     },
      //     yAxis: {},
      //     series: [
      //       {
      //         name: "销量",
      //         type: "bar",
      //         data: [5, 20, 36, 10, 10, 20],
      //       },
      //     ],
      //   });
    });
    // 基于准备好的dom，初始化echarts实例
  },
};
</script>

<style scoped lang="scss">
$color-zhu: #001e3e;
.view_type {
  overflow: hidden;
  position: relative;
  //   text-align: center;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  padding: 63px 18px 0 18px;
  background: $color-zhu url(../../assets/images/bg.png) repeat 0 0 / cover;
  .main {
    position: absolute;
    width: calc(100% - 36px) ;
    top: 55px;
  }
}
</style>