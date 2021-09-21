<template>
  <div>
    <TopMenu />
    <div class="banner">
      <div class="banner-content flex items-center">
        <img src="/img/CLIP-005 FIVE-O-2@2x.png" alt="">
        <div>
          <p class="relase font-bold text-red-e8 text-2xl">NEW RELASE</p>
          <p class="text-white text-4xl pt-4 font-bold">GENSOKYO FIVE-O</p>
          <p class="text-white text-xl pt-2">CLIP-005</p>
          <p class="more text-white pt-7" @click="$router.push(`/albums/1`)">More Info</p>
        </div>
      </div>
      <div class="banner-bg"></div>
    </div>
    <div class="album-list">
      <div class="title">CATALOGUE</div>
      <div class="list-container">
        <div class="list" v-for="(item,index) in albumList" :key="index" @click="$router.push(`/albums/${index + 1}`)">
          <img :src="item.poster" alt />
          <p>{{ item.title }}</p>
          <span>clip-00{{ index + 1 }}</span>
        </div>
      </div>
    </div>
    <LogoList :listType="2" class="logo-list"></LogoList>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import LogoList from "components/LogoList.vue"
import TopMenu from "components/TopMenu.vue";
const albumList = reactive([
  {
    poster: '/img/Artboard 3 copy@3x-100@2x.png',
    title: 'CYBER GENERATION'
  },
  {
    poster: '/img/f@2x.png',
    title: '博麗が如く~Gensougyo Mafia'
  },
  {
    poster: '/img/SHIT21@2x.png',
    title: 'S**t Genre vol 2'
  },
  {
    poster: '/img/004@2x.png',
    title: 'KAPPA SCIENCE CORP'
  },
  {
    poster: '/img/CLIP-005 FIVE-O-2@2x.png',
    title: 'GENSOKYO FIVE-O'
  },
])

</script>

<style lang="scss" scoped>
@mixin contentWidth {
  width: 1322px;
  margin: 0 auto;
}
.banner {
  // background: url(@/assets/img/CLIP-005 FIVE-O@2x.png) no-repeat 0 0;
  background: url(@/assets/img/CLIP-005FIVE-O@2x.png) no-repeat 0 0;
  background-size: cover;
  width: 100%;
  height: 876px;
  position: relative;
  z-index: -1;
  .banner-bg{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: .7);
    z-index: -1;
  }
  .banner-content{
    width: 1000px;
    margin: 0 auto;
    padding-top: 300px;
    z-index: 1;
    position: relative;
    img{
      height: 413px;
      width: 413px;
    }
    div{
      margin-left: 150px;
      .relase{
        letter-spacing: 7.5px;
      }
      p:nth-child(2){
        letter-spacing: 5.2px;
      }
      p:nth-child(3){
        letter-spacing: 2.6px;
      }
      .more{
        border-bottom: 1px solid #fff;
        width: fit-content;
        cursor: pointer;
        letter-spacing: 2.6px;
      }
    }
  }
}
.album-list {
  .title {
    letter-spacing: 20px;
    color: #4a4a4a;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    margin: 50px 0;
  }
  .list-container {
    display: flex;
    flex-wrap: wrap;
    @include contentWidth;
    gap:40px;
    .list {
      width: 413px;
      cursor: pointer;
      img {
        height: 413px;
        width: 413px;
      }
      p {
        letter-spacing: 3.25px;
        color: #4a4a4a;
        font-weight: bold;
        font-size: 25px;
        padding-top: 10px;
      }
      span{
        color: #6b6b6b;
        font-size: 15px;
      }
    }
  }
}
.logo-list{
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 35px;
}
</style>