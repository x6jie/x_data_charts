<template>
  <div class="task">
    <div class="task_header flex_center">
      <div
        class="task_header_item zh_font_medium"
        v-for="(item, index) in state.headerState"
        :key="index"
      >
        <div class="task_header_item_font">{{ item }}</div>
      </div>
    </div>
    <div class="task_text">
      <div class="task_content">
        <div
          class="task_content_item flex_center"
          v-for="(item, index) in state.contentState"
          :key="index"
        >
          <div
            class="task_content_text font-7 task_content_item_city color-fff"
          >
            {{ item.city }}
          </div>
          <div
            class="
              task_content_text
              font-7
              en_font
              color-blueone
              task_content_item_downTask
            "
          >
            {{ item.downTask }}
          </div>
          <div
            class="
              task_content_text
              font-7
              en_font
              color-blueone
              task_content_item_finTask
            "
          >
            {{ item.finTask }}
          </div>
          <div
            class="
              task_content_text
              font-7
              en_font
              color-orange
              task_content_item_finPer
            "
          >
            {{ item.finPer }}%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, reactive } from "vue";
const state = reactive({
  headerState: ["省份", "下发任务", "完成任务", "完成率"],
  contentState: [
    {
      city: "安徽",
      downTask: 16715,
      finTask: 16696,
      finPer: 35.5,
    },
    {
      city: "新疆",
      downTask: 7632,
      finTask: 6631,
      finPer: 74.2,
    },
    {
      city: "西藏",
      downTask: 83,
      finTask: 30,
      finPer: 65,
    },
    {
      city: "宁夏",
      downTask: 549,
      finTask: 400,
      finPer: 60.6,
    },
  ],
});
onMounted(() => {
  const content = document.querySelector(".task_content");
  const contentClone = content.cloneNode(true);
  content.append(contentClone);
//   console.log(contentClone);
});
</script>

<style lang="scss" scoped>
$color-zhu: #001e3e;
.task {
  height: 99px;
  width: 207.5px;
  background: url(../../../../../../../assets/images/rwbg.png) no-repeat;
  background-size: 100% 100%;
  .task_header {
    width: 207.5px;
    .task_header_item {
      width: 51.85px;
      text-align: center;
      .task_header_item_font {
        transform: scale(0.583);
        font-size: 12px;
        color: #ffffff;
        font-weight: 500;
      }
    }
  }
  .task_text {
    height: 80px;
    overflow: hidden;
    .task_content {
      &:nth-child(1) {
        animation: scroll-top 7s linear infinite;
        &:hover {
          animation-play-state: paused;
        }
        .task_content_item {
          height: 20px;
          text-align: center;
          .task_content_text {
            width: 51.85px;
          }
          &:hover {
            background-color: $color-zhu;
          }
        }
      }
    }
  }
}
@keyframes scroll-top {
  0% {
  }
  100% {
    transform: translateY(-50%);
  }
}
</style>