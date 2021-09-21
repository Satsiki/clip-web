<template>
  <div class="app-wrapper">
    <!-- 侧边栏 -->
    <!-- <sidebar class="sidebar-container"></sidebar> -->
    <!-- 内容容器 -->
    <div class="main-container">
      <!-- 顶部导航栏 -->
      <!-- 内容区 -->
      <app-main></app-main>
      <!-- <Foot containerWidth="1316px" :noPadding="true"></Foot> -->
      <img src="@/assets/img/Group 29.svg" alt  @click="goTop"  v-if="btnFlag" class="go-top"/>
      
    </div>
    
  </div>
</template>

<script setup>
import { onMounted, onUnmounted , ref } from "vue";
import AppMain from "./components/AppMain.vue";
// import Foot from "../components/Foot.vue";

let btnFlag = ref(true)

const scrollToTop = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 60) {
    btnFlag.value = true
  } else {
    btnFlag.value = false
  }
}

const goTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
  window.requestAnimationFrame(goTop);
  window.scrollTo(0, c - c / 8);
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollToTop)
})
onUnmounted(() => {
  window.removeEventListener('scroll', scrollToTop)
})


</script>

<style lang="scss" scoped>
.go-top{
  position: fixed;
  right: 106px;
  bottom: 60px;
  cursor: pointer;
  width: 64px;
}
</style>