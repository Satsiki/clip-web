<template>
  <div class="home">
    <div class="home-bg">
      <div class="home-content">
        <img src="@/assets/img/weblogo.svg" alt class="logo" />
        <div class="title text-gray-4a s">CLIP SOUNDS</div>
        <div class="title-span text-gray-4a s">Official page</div>
        <div class="home-menu">
          <router-link to="/about">{{ $t(`home.about`) }}</router-link>
          <router-link to="/albums">{{ $t(`home.albums`) }}</router-link>
        </div>
        <Foot class="absolute"></Foot>
        <LogoList  class="home-logo-list"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import LogoList from 'components/LogoList.vue'
import { reactive, getCurrentInstance } from "vue";
import Foot from '../components/Foot.vue';


const openUrl = (item) => {
  window.open(item.url)
}



</script>

<style lang="scss" scoped>
.home {
  background: url(@/assets/img/bg.jpg) no-repeat 0 0;
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
      .home-logo-list {
        position: absolute;
        bottom: -88px;
      }
    }
  }
}
</style> 