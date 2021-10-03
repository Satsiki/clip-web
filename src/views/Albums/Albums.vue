<template>
  <div>
    <TopMenu />
    <div class="head">
      <div class="sub-title">{{ info.serialNumber }}</div>
      <div class="title">{{ info.title }}</div>
      <img :src="info.cover" alt class="poster" />
    </div>
    <div class="content">
      <div class="content-title">PREVIEWVIDEO</div>
      <div class="video">
        <iframe
          id="bilibili-video"
          src="//player.bilibili.com/player.html?aid=755190048&bvid=BV1kr4y1w76D&cid=252489978&page=1"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
        ></iframe>
      </div>
      <div class="meta-title">METADATA</div>
      <div class="meta-data">
        
        <div class="meta-container">
          <div class="meta-div">
            <p>Title</p>
            <div>
              <span>{{ info.title }}</span>
            </div>
          </div>
          <div class="meta-div">
            <p>Release Date</p>
            <div>
              <span>{{ info.title }}</span>
            </div>
          </div>
          <div class="meta-div">
            <p>Producer</p>
            <div>
              <span v-for="(item,index) in info.producer" :key="index">{{ item }}</span>
            </div>
          </div>
          <div class="meta-div">
            <p>Illustration</p>
            <div>
              <span v-for="(item,index) in info.illustration" :key="index">{{ item }}</span>
            </div>
          </div>
          <div class="meta-div">
            <p>Mastering</p>
            <div>
              <span v-for="(item,index) in info.mastering" :key="index">{{ item }}</span>
            </div>
          </div>
          <div class="meta-div">
            <p>Design</p>
            <div>
              <span v-for="(item,index) in info.design" :key="index">{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="meta-container">
          <div class="meta-div">
            <p>Arrange</p>
            <div>
              <span v-for="(item,index) in info.arrange" :key="index">{{ item }}</span>
            </div>
          </div>
          <div class="meta-div">
            <p>Vocal</p>
            <div>
              <span v-for="(item,index) in info.vocal" :key="index">{{ item }}</span>
            </div>
          </div>
          <div class="meta-div">
            <p>Special Thanks</p>
            <div>
              <span v-for="(item,index) in info.specialThanks" :key="index">{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="meta-container">
          <div class="meta-div flex-col">
            <p>About</p>
            <div style="width: 414px;" class="ml-4 mt-4 leading-8">
              <span>{{ info.about }}</span>
            </div>
          </div>
        </div>
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
import { useRoute } from "vue-router";
import { onMounted, reactive } from "@vue/runtime-core";
import { ablumList } from 'assets/js/album.js'

const route = useRoute()

const serialNumber = route.params.id
const info = reactive(ablumList.find((item) => {
  return item.serialNumber === serialNumber
}))

onMounted(() => {

  console.log(info);
})

</script>

<style lang="scss" scoped>
.head {
  margin: 0 auto;
  margin-top: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .sub-title {
    color: #4a4a4a;
    letter-spacing: 0.75px;
    font-size: 25px;
    font-weight: bold;
  }
  .title {
    color: #4a4a4a;
    letter-spacing: 20px;
    font-size: 40px;
    font-weight: bold;
  }
  .poster {
    width: 1322px;
    height: 869px;
    margin-top: 20px;
    margin-bottom: -300px;
    // position: absolute;
    // bottom: -400px;
  }
}
.content {
  height: 1530px;
  background: #f1f1f1;
  margin: 0 auto;
  padding-top: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content-title {
    letter-spacing: 15px;
    color: #4a4a4a;
    font-size: 30px;
    font-weight: bold;
  }
  .meta-title{
    color: #4a4a4a;
    font-weight: bold;
    letter-spacing: 15px;
    font-size: 30px;
    width: 1322px;
    margin-top: 74px;
    margin-left: 26px;
  }
  .meta-data {
    width: 1322px;
    display: flex;
    justify-content: space-between;
    .meta-container {
      width: 33%;
      border-right: 1px solid #e80a0a;
      margin-top: 30px;
      .meta-div {
        display: flex;
        width: 414px;
        justify-content: space-between;
        margin-top: 30px;
        p {
          font-size: 20px;
          font-weight: bold;
          margin-left: 14px;
        }
        div {
          width: 188px;
          margin-top: 6px;
          span {
            display: block;
            font-size: 15px;
            color: #6d6d6d;
            padding-top: 6px;
          }
          span:first-child{
            padding-top: 0;
          }
        }
        &:first-child{
          margin-top: 0;
        }
      }
    }
    .meta-container:last-child {
      border: none;
    }
  }
}
:deep(#bilibili-video) {
  width: 868px;
  height: 488px;
  margin-top: 26px;
}
.logo-list {
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 35px;
}
</style>