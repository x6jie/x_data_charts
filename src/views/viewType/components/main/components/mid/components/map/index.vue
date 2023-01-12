<template>
  <div class="mid_map">
    <div class="mid_map_echart"></div>
  </div>
</template>

<script setup>
import './china'
import './chart.js'
import { onMounted, inject, nextTick } from "vue";
let option;
let myChart;
let myDom;
let fontSize
const echarts = inject("ec");
const setMap = () => {
  setTimeout(() => {
    fontSize =
      document.documentElement.style.cssText.split(":")[1]?.slice(0, -3) / 2 ||
      5;
    myChart = echarts.init(myDom);
    console.log(myChart);
    let iconRQ =
      "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII=";
    option = {
      backgroundColor: "rgba(0,0,0,0)",
      grid: {
        left: "0", // 与容器左侧的距离
        right: "0", // 与容器右侧的距离
        top: "0", // 与容器顶部的距离
        bottom: "0", // 与容器底部的距离
      },
      geo: {
        map: "china",
        aspectScale: 0.85,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "100%",
        itemStyle: {
          normal: {
            shadowColor: "#00FCFC",
            shadowOffsetX: 0,
            shadowOffsetY: fontSize,
            opacity: 0.8,
          },
          emphasis: {
            areaColor: "#276fce",
          },
        },
        regions: [
          {
            name: "南海诸岛",
            itemStyle: {
              areaColor: "rgba(0, 10, 52, 1)",

              borderColor: "rgba(0, 10, 52, 1)",
              normal: {
                opacity: 0,
                label: {
                  show: false,
                  color: "#009cc9",
                },
              },
            },
            label: {
              show: false,
              color: "#FFFFFF",
              fontSize: fontSize,
            },
          },
        ],
      },
      series: [
        // 常规地图
        {
          type: "map",
          mapType: "china",
          aspectScale: 0.85,
          layoutCenter: ["50%", "50%"], //地图位置
          layoutSize: "100%",
          zoom: 1, //当前视角的缩放比例
          // roam: true, //是否开启平游或缩放
          scaleLimit: {
            //滚轮缩放的极限控制
            min: 1,
            max: 2,
          },
          itemStyle: {
            normal: {
              areaColor: "#0c274b",
              borderColor: "#1cccff",
              borderWidth: 0.5,
            },
            emphasis: {
              areaColor: "#02102b",
              label: {
                color: "#fff",
              },
            },
          },
        },
        // {
        //   name: "天燃气",
        //   type: "scatter",
        //   coordinateSystem: "geo",
        //   data: [
        //     {
        //       //庐阳区
        //       name: "首都",
        //       value: [116.24, 41.55, 100],
        //       type: "ranqi",
        //     },
        //   ],
        //   symbol: iconRQ,
        //   symbolSize: 20,
        //   label: {
        //     normal: {
        //       show: false,
        //     },
        //     emphasis: {
        //       show: false,
        //     },
        //   },
        // },
        // 区域散点图
        {
          type: "effectScatter",
          coordinateSystem: "geo",
          symbolSize: 5,
          rippleEffect: {
            //坐标点动画
            period: 3,
            scale: 5,
            brushType: "fill",
          },
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{b}",
              color: "#b3e2f2",
              fontWeight: "bold",
              fontSize: fontSize,
            },
          },

          data: [
            {
              name: "上海",
              value: [121.4648, 31.2891],
              itemStyle: {
            //坐标点颜色
            normal: {
              show: true,
              color: "orange",
              shadowBlur: 5,
              shadowColor: "#fff",
            },
            emphasis: {
              areaColor: "#fff",
            },
          },
            },
            {
              name: "深圳",
              value: [114.271522, 22.753644],
            },
            {
              name: "南京",
              value: [118.78, 32.04],
            },
            {
              name: "重庆",
              value: [106.54, 29.59],
            },
            {
              name: "北京",
              value: [116.24, 39.55, 100],
            },
            {
              name: "河南",
              value: [113.4668, 34.6234],
            },

            {
              name: "内蒙古",
              value: [110.3467, 41.4899],
            },
            {
              name: "新疆",
              value: [87.9236, 43.5883],
            },
            {
              name: "黑龙江",
              value: [129, 49],
            },
            {
              name: "西藏",
              value:[88.388277,31.56375],
            }
          ],
          itemStyle: {
            //坐标点颜色
            normal: {
              show: true,
              color: "rgba(0,252,252,.3)",
              shadowBlur: 5,
              shadowColor: "#fff",
            },
            emphasis: {
              areaColor: "#fff",
            },
          },
        },
        // 线 和 点
        {
          type: "lines",
          zlevel: 2, //设置这个才会有轨迹线的小尾巴
          effect: {
            show: true,
            period: 5,//箭头指向速度，值越小速度越快
            trailLength: 0.2,//特效尾迹长度[0,1]值越大，尾迹越长重
            color: "#00FCFC", 
            symbol: "arrow",//箭头图标
            symbolSize: fontSize/2 +1,//图标大小
          },
          lineStyle: {
            normal: {
              color: 'rgba(0,252,252,.2)',
              width: fontSize/5,
              curveness: 0.2,
              shadowColor: "#00FCFC",
            },
          },
          data: [
            {
              fromName: 1,
              toName: 1,
              coords: [
                [121.4648, 31.2891],
                [116.24, 39.55],
              ],
            },
            {
              fromName: 1,
              toName: 1,
              coords: [
                [121.4648, 31.2891],
                [118.78, 32.04],
              ],
            },
            {
              fromName: 1,
              toName: 1,
              coords: [
                [121.4648, 31.2891],
                [106.54, 29.59],
              ],
            },
            {
              fromName: 1,
              toName: 1,
              coords: [
                [121.4648, 31.2891],
                [114.271522, 22.753644],
              ],
            },
            {
              fromName: 1,
              toName: 1,
              coords: [
                [121.4648, 31.2891],
                [113.4668, 34.6234],
              ],
            },
            {
              fromName: 1,
              toName: 1,
              coords: [
                [121.4648, 31.2891],
                [110.3467, 41.4899],
              ],
            },
            {
              fromName: 1,
              toName: 1,
              coords: [
                [121.4648, 31.2891],
                [87.9236, 43.5883],
              ],
            },
            {
              fromName: 1,
              toName: 1,
              coords: [
                [121.4648, 31.2891],
                [129, 49],
              ],
            },
             {
              fromName: 1,
              toName: 1,
              coords: [
                [121.4648, 31.2891],
                [88.388277,31.56375],
              ],
            },
            // 北京-黑龙江
            {
              fromName: 1,
              toName: 1,
              coords: [
                [116.24, 39.55, 100],
                [129, 49],
              ],
            },
            // 北京-深圳
            {
              fromName: 1,
              toName: 1,
              coords: [
               
                [114.271522, 22.753644],
                 [116.24, 39.55, 100],
              ],
            },
            // 北京-重庆
            {
              fromName: 1,
              toName: 1,
              coords: [
               
                [106.54, 29.59],
                 [116.24, 39.55, 100],
              ],
            },
            // 深圳-南京
            {
              fromName: 1,
              toName: 1,
              coords: [
                [114.271522, 22.753644],
                [118.78, 32.04],
              ],
            },
            // 深圳-上海
            {
              fromName: 1,
              toName: 1,
              coords: [
                [114.271522, 22.753644],
                [121.4648, 31.2891],
              ],
            },
            // 重庆-上海
            {
              fromName: 1,
              toName: 1,
              coords: [
                [106.54, 29.59],
                [121.4648, 31.2891],
              ],
            },
          ],
        },
      ],
    };
    myChart.setOption(option);
  }, 100);
};
const resetMap = () =>{
  setMap()
  nextTick(()=>{
    myChart.resize();
  })
}
onMounted(() => {
  myDom = document.querySelector(`.mid_map_echart`);
  console.log(myDom);

  nextTick(() => {
    // const s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "https://www.isqqw.com/dep/echarts/map/js/china.js";
    // document.body.appendChild(s);
    // const s2 = document.createElement("script");
    // s2.type = "text/javascript";
    // s2.src =
    //   "https://echarts.baidu.com/resource/echarts-gl-latest/dist/echarts-gl.min.js";
    // document.body.appendChild(s2);
    setMap();
  });
  // setMap()
});
window.addEventListener("resize", function () {
  resetMap()
});
</script>

<style lang="scss" scoped>
.mid_map_echart {
  margin-top: 2px;
  height: 500px;
  width: 420px;
}
</style>
  
  //                     '台湾': [122,23],
  //                     '黑龙江': [129,51],
  //                     '内蒙古': [110.3467, 41.4899],
  //                     "吉林": [125.8154, 44.2584],
  //                     '北京市': [116.4551, 40.2539],
  //                     "辽宁": [123.1238, 42.1216],
  //                     "河北": [114.4995, 38.1006],
  //                     "天津": [117.4219, 39.4189],
  //                     "山西": [112.3352, 37.9413],
  //                     "陕西": [109.1162, 34.2004],
  //                     "甘肃": [103.5901, 36.3043],
  //                     "宁夏": [106.3586, 38.1775],
  //                     "青海": [101.4038, 36.8207],
  //                     "新疆": [87.9236, 43.5883],
  //                     "西藏": [88.388277,31.56375],
  //                     "四川": [103.9526, 30.7617],
  //                     "重庆": [108.384366, 30.439702],
  //                     "山东": [117.1582, 36.8701],
  //                     "河南": [113.4668, 34.6234],
  //                     "江苏": [118.8062, 31.9208],
  //                     "安徽": [117.29, 32.0581],
  //                     "湖北": [114.3896, 30.6628],
  //                     "浙江": [119.5313, 29.8773],
  //                     "福建": [119.4543, 25.9222],
  //                     "江西": [116.0046, 28.6633],
  //                     "湖南": [113.0823, 28.2568],
  //                     "贵州": [106.6992, 26.7682],
  //                     "云南": [102.9199, 25.4663],
  //                     "广东": [113.12244, 23.009505],
  //                     "广西": [108.479, 23.1152],
  //                     "海南": [110.3893, 19.8516],
  //                     '上海': [121.4648, 31.2891],