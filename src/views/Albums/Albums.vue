<template>
  <div>
    <TopMenu />
    <div class="head">
      <div class="sub-title">CLIP-123</div>
      <div class="title">CYBER GENERATION</div>
      <img src="@/assets/img/weblogo.svg" alt="" class="poster">
    </div>
    <div class="content">
      <div class="content-title">PREVIEWVIDEO</div>
      <div class="video">
        <iframe id="bilibili-video" src="//player.bilibili.com/player.html?aid=755190048&bvid=BV1kr4y1w76D&cid=252489978&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
      </div>
    </div>
    <AudioCard />
    <LogoList :listType="2" class="logo-list"></LogoList>
  </div>
</template>

<script setup>
import TopMenu from "components/TopMenu.vue";
import LogoList from "components/LogoList.vue"
import AudioCard from "components/AudioCard.vue"
</script>

<style lang="scss" scoped>
.head{
  margin: 0 auto;
  margin-top: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .sub-title{
    color: #4A4A4A;
    letter-spacing: 0.75px;
    font-size: 25px;
    font-weight: bold;
  }
  .title{
    color: #4A4A4A;
    letter-spacing: 20px;
    font-size: 40px;
    font-weight: bold;
  }
  .poster{
    width: 1322px;
    height: 869px;
    margin-top: 20px;
    margin-bottom: -300px;
    // position: absolute;
    // bottom: -400px;
  }
}
.content{
  height: 1530px;
  background: #F1F1F1;
  margin: 0 auto;
  padding-top: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content-title{
    letter-spacing: 15px;
    color: #4A4A4A;
    font-size: 30px;
    font-weight: bold;
  }
}
:deep(#bilibili-video){
  width: 868px;
  height: 488px;
  margin-top: 26px;
}
</style>