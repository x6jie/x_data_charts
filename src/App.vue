<template>
  <router-view/>
</template>

<script>
import * as echarts from 'echarts'
import { provide } from 'vue'
 
export default {
  name: 'App',
  setup(){
    provide('ec',echarts)//provide
  },
  components: {
  }
}
</script>
<style lang="scss">

#app {

  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

</style>
