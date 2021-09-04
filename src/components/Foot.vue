<template>
  <div class="foot">
    <div class="foot-container" :style="{width:containerWidth || '100%'}">
      <div class="left" :class="noPadding && 'pl-0'">
        <p @click="change('en')" :class="$i18n.locale === 'zh' ? '' : 'active'">English</p>
        <p class="cursor-default">/</p>
        <p @click="change('zh')" :class="$i18n.locale !== 'zh' ? '' : 'active'">中文（简体）</p>
      </div>
      <p class="right" :class="noPadding && 'pr-0'">© 2021 Clip Sounds. All rights reserved.</p>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const props = defineProps({
  containerWidth:String,
  noPadding:Boolean
})
const change = (type) => {
  proxy.$i18n.locale = type;
}


</script>

<style lang="scss" scoped>
.foot {
  // position: absolute;
  bottom: 0;
  width: 100%;
  background: #9f9f9f;
  height: 30px;
  left: 0;
  .foot-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .left {
      display: flex;
      align-items: center;
      padding-left: 28px;
      font-size: 12px;
      color: #fff;
      cursor: pointer;
      p {
        padding: 0 4px;
      }
    }
    .active {
      color: #e80a0a;
    }
    .right {
      padding-right: 18px;
      color: #fff;
      font-size: 12px;
    }
  }
}
</style>