<template>
  <div class="mid">
    <div class="mid_title flex_center">
      <div class="mid_title_left"></div>
      <div class="mid_title_text en_font font-7 color-fff">
        {{ state.nowTime }}
      </div>
      <div class="mid_title_right"></div>
    </div>
    <div class="mid_header flex_center">
      <div class="mid_header_left mid_header_item flex_center">
        <div class="mid_header_item_text zh_font_medium color-fff">
          实时全国数据流入
        </div>
        <div class="mid_header_item_num en_font color-blueone">
          {{ state.outflowData + state.randomNum }}
          <div class="com"> GB </div>
        </div>
        
      </div>
      <div class="mid_header_right mid_header_item flex_center">
        <div class="mid_header_item_text zh_font_medium color-fff">
          实时全国数据流出
        </div>
        <div class="mid_header_item_num en_font color-blueone">
          {{ state.inflowData + state.randomNum}} 
          <div class="com"> GB </div>

        </div>
      </div>
    </div>
    <div class="mid_content">
      <Map></Map>
    </div>
  </div>
</template>


<script setup>
import { computed, onMounted, onUnmounted, onUpdated, reactive } from "vue";
import Map from "./components/map/index.vue";
import dayjs from "dayjs";
let timer;
let timer2;

// const nowTime = computed(()=>{
//   return
// })

const state = reactive({
  nowTime: dayjs(new Date()).format("YYYY-MM-DD hh:mm:ss"),
  outflowData: 455.3,
  inflowData: 352.2,
  randomNum:0

});
const timeChange = () => {
  timer = setInterval(() => {
    state.nowTime = dayjs(new Date()).format("YYYY-MM-DD hh:mm:ss");
  }, 1000);
  timer2 = setInterval(()=>{
    state.randomNum= (Math.random() *100) | 0
  },2000)
  console.log(state.randomNum);
};
timeChange();

onUnmounted(()=>{
  clearInterval(timer)
})
onMounted(() => {
  console.log();
});
</script>

<style lang="scss" scoped>
.mid {
  display: inline-block;
  box-sizing: border-box;
  position: absolute;
  top: 1px;
  left: 185px;
  height: 483.91px;
  width: 526.43px;
  padding: 6px 25px 10px 53px;
  background: url(../../../../../../assets/images/midbg.png) no-repeat 0 0 /
    cover;
  .mid_title {
    margin: 9px 0 0 41px;
    height: 10px;
    width: 365px;
    // background-color: #ccc;
    justify-content: space-between;
    .mid_title_left,
    .mid_title_right {
      height: 2px;
      width: 120px;
    }
    .mid_title_left {
      background-image: linear-gradient(
        270deg,
        rgba(58, 255, 250, 0.5) 0%,
        rgba(27, 255, 243, 0) 100%
      );
    }
    .mid_title_right {
      background-image: linear-gradient(
        90deg,
        rgba(58, 255, 250, 0.5) 0%,
        rgba(27, 255, 243, 0) 100%
      );
    }
    .mid_title_text {
      width: 185px;
      white-space: nowrap;
    }
  }
  .mid_header {
    margin: 13px 0 0 12px;
    justify-content: space-between;
    height: 36.5px;
    width: 424px;
    .mid_header_item {
      box-sizing: border-box;
      justify-content: space-between;
      padding: 10px 16px;
      height: 36.5px;
      width: 205px;
      background: url(../../../../../../assets/images/xtbg.png) no-repeat;
      background-size: 100% 100%;
      .mid_header_item_text,
      .mid_header_item_num {
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
  .mid_content {
    position: absolute;
    box-sizing: border-box;
    padding: 9px 11.7px;
    top: 6px;
    left: 53px;
    height: calc(100% - 16px);
    width: calc(100% - 78px);
    // background-color: #8df;
  }
}
.com {
  position: relative;
  top: 1.5px;
  display: inline-block;
  color: #fff;
  font-size: 12px;
  transform: scale(0.73);
}
</style>