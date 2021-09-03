<template>
  <div class="home">
    <div class="home-bg">
      <div class="home-content">
        <img src="@/assest/img/weblogo.svg" alt class="logo" />
        <div class="title text-gray-4a s">CLIP SOUNDS</div>
        <div class="title-span text-gray-4a s">Official page</div>
        <div class="home-menu">
          <router-link to="/about">{{ $t(`home.about`) }}</router-link>
          <router-link to="/albums">{{ $t(`home.albums`) }}</router-link>
        </div>
        <div class="content-bottom">
          <div class="left">
            <p @click="change('en')" :class="$i18n.locale === 'zh' ? '' : 'active'">English</p>
            <p class="cursor-default">/</p>
            <p @click="change('zh')" :class="$i18n.locale !== 'zh' ? '' : 'active'">中文（简体）</p>
          </div>
          <p class="right">© 2021 Clip Sounds. All rights reserved.</p>
        </div>
        <div class="logo-list">
          <img :key="index" v-for="(item,index) in logoList" :src="item.img" @click="openUrl(item)" />
        </div>
      </div>
    </div>
  </div>
  <!-- <router-link to="/about">about</router-link>
  <router-link to="/albums">albums</router-link>
  <router-link to="/albums">{{$t(`message.Home`)}}</router-link>-->
</template>

<script setup>
import { reactive, getCurrentInstance } from "vue";
import { useI18n } from 'vue-i18n'//要在js中使用国际化
const { proxy } = getCurrentInstance();

const change = (type)=> {
  proxy.$i18n.locale = type;
}


const logoList = [
  { img: '/img/Group 1.svg', url: 'http://www.baidu.com' },
  { img: '/img/Group 2.svg', url: 'http://www.baidu.com' },
  { img: '/img/Group 3.svg', url: 'http://www.baidu.com' },
  { img: '/img/Group 4.svg', url: 'http://www.baidu.com' },
  { img: '/img/Group 5.svg', url: 'http://www.baidu.com' },
  { img: '/img/Group 6.svg', url: 'http://www.baidu.com' }
]
const openUrl = (item) => {
  window.open(item.url)
}



</script>

<style lang="scss" scoped>
.home {
  background: url(@/assest/img/bg.jpg) no-repeat 0 0;
  height: 100%;
  width: 100%;
  position: absolute;
  .home-bg {
    background: rgba($color: #000000, $alpha: 0.4);
    height: 100%;
    width: 100%;
    position: absolute;
    .home-content {
      width: 816px;
      height: 490px;
      background: #f8f8f8;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 320px;
      }
      .title {
        font-size: 40px;
        font-weight: bold;
        font-style: italic;
        letter-spacing: 6px;
      }
      .title-span {
        font-size: 25px;
      }
      .home-menu {
        width: 210px;
        display: flex;
        justify-content: space-between;
        padding-top: 46px;
        a {
          width: 80px;
          border-bottom: 1px solid #6b6b6b;
          color: #4a4a4a;
          text-align: center;
          padding-bottom: 8px;
          letter-spacing: 2.6px;
          font-size: 20px;
        }
        a:hover {
          font-weight: bold;
        }
      }
      .content-bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #9f9f9f;
        height: 30px;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
        .active{
          color: #E80A0A;
        }
        .right {
          padding-right: 18px;
          color: #fff;
          font-size: 12px;
        }
      }
      .logo-list {
        display: flex;
        position: absolute;
        bottom: -88px;
        width: 540px;
        justify-content: space-between;
        img {
          width: 55px;
          height: 55px;
          cursor: pointer;
        }
      }
    }
  }
}
</style> 