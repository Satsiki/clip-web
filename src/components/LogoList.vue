<template>
  <div class="logo-list">
    <img :key="index" v-for="(item,index) in listType === 1 ? logoList : logoList2" :src="item.img" @click="openUrl(item)" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  listType:{
    type:Number,
    default:1
  }
})
const logoList = [
  { img: '/img/Group 1.svg', url: 'http://www.baidu.com' },
  { img: '/img/Group 2.svg', url: 'http://www.baidu.com' },
  { img: '/img/Group 3.svg', url: 'http://www.baidu.com' },
  { img: '/img/Group 4.svg', url: 'http://www.baidu.com' },
  { img: '/img/Group 5.svg', url: 'http://www.baidu.com' },
  { img: '/img/Group 6.svg', url: 'http://www.baidu.com' }
]
const logoList2 = [
  { img: '/img/Group 1(1).svg', url: 'http://www.baidu.com' },
  { img: '/img/Group 2(1).svg', url: 'http://www.baidu.com' },
  { img: '/img/Group 3(1).svg', url: 'http://www.baidu.com' },
  { img: '/img/Group 4(1).svg', url: 'http://www.baidu.com' },
  { img: '/img/Group 5(1).svg', url: 'http://www.baidu.com' },
  { img: '/img/Path 8.svg', url: 'http://www.baidu.com' },
  { img: '/img/Path 9(1).svg', url: 'http://www.baidu.com' }
]
</script>

<style lang="scss" scoped>
.logo-list {
  display: flex;
  // position: absolute;
  // bottom: -88px;
  width: 540px;
  justify-content: space-between;
  img {
    width: 55px;
    height: 55px;
    cursor: pointer;
  }
}
</style>