<template>
  <section class="app-main">
    <!-- 内部应该显示子路由页面信息 -->
    <router-view v-slot="{ Component }">
      
      <component :is="Component">
        
      </component>
      <Foot containerWidth="1316px" :noPadding="true"></Foot>
    </router-view>
    
  </section>
</template>

<script setup>
import Foot from "../../components/Foot.vue";
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  /* position: relative; */
  /* overflow: hidden; */
}
</style>
