<template>
  <div class="item">
    <div class="title_border">
      <div class="title zh_font_bold">{{title}}</div>
    </div>
    <slot name="chart"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.item {
  box-sizing: border-box;
  width: 230px;
  background: rgba(2, 74, 100, 0.15);
  border: 1px solid rgba(27, 255, 243, 0.2);
  margin-top: 8px;
  padding: 8px;
  .title_border {
    display: inline-block;
    margin-bottom: 12px;
    height: 16px;
    width: 52px;
    background: url(../../../../../assets//images/title.png) no-repeat;
    background-size: 100% 100%;
    text-align: center;
  }
  .title {
    display: inline-block;
    font-size: 10px;
    line-height: 16px;
    transform: scale(0.83);
    color: #ffffff;
    font-weight: 700;
  }
}
</style>