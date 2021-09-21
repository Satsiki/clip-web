<template>
  <div class="audio-card" v-for="(item,index) in list" :key="index">
    <div class="list-left">
      <p class="number">00{{ index + 1 }}</p>
      <div>
        <p>{{ item.title }}</p>
        <span>{{ item.author }}</span>
      </div>
    </div>
    <div class="list-right">
      <div class="right-left">
        <p>{{ item.currentTime || '00:00' }}</p>
        <p>/</p>
        <p v-if="item.duration">{{ $filter.timeCom(item.duration) }}</p>
      </div>
      <div class="right-right">
        <img
          src="@/assets/img/Icon awesome-play-circle.svg"
          v-if="!item.isPlay"
          alt
          @click="playAudio(item, index)"
        />
        <img
          src="@/assets/img/Icon awesome-stop-circle.svg"
          v-if="item.isPlay"
          alt
          @click="playAudio(item, index)"
        />
        <a :href="item.audioUrl" target="_blank">
          <img src="@/assets/img/Icon awesome-download.svg" alt />
        </a>
      </div>
    </div>
    <div class="progress" :style="{ width: item.progress + '%' }"></div>
  </div>
</template>

<script setup>
import moment from 'moment'
import { reactive, ref, onMounted, computed, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();

const list = reactive([
  {
    id: 1,
    title: 'ltx',
    author: 'asd',
    audioUrl: 'http://gk-pc-v5.oss-accelerate.aliyuncs.com/bac0348c43e03fe4d5ea57ee206a3280.mp3',
    isPlay: false,
  },
  {
    id: 2,
    title: 'ltx',
    author: 'asd',
    audioUrl: 'http://gk-pc-v5.oss-accelerate.aliyuncs.com/bac0348c43e03fe4d5ea57ee206a3280.mp3',
    isPlay: false,
  },
  {
    id: 3,
    title: 'ltx',
    author: 'asd',
    audioUrl: 'http://gk-pc-v5.oss-accelerate.aliyuncs.com/bac0348c43e03fe4d5ea57ee206a3280.mp3',
    isPlay: false,
  },
  {
    id: 4,
    title: 'ltx',
    author: 'asd',
    audioUrl: 'http://gk-pc-v5.oss-accelerate.aliyuncs.com/bac0348c43e03fe4d5ea57ee206a3280.mp3',
    isPlay: false,
  },
  {
    id: 5,
    title: 'ltx',
    author: 'asd',
    audioUrl: 'http://gk-pc-v5.oss-accelerate.aliyuncs.com/bac0348c43e03fe4d5ea57ee206a3280.mp3',
    isPlay: false,
  },
])

//初始化音频
onMounted(() => {
  list.forEach((item) => {
    item.audioInfo = new Audio()
    item.audioInfo.src = item.audioUrl
    item.audioInfo.oncanplay = () => {
      item.duration = item.audioInfo.duration
    }
    item.progress = 0
  })
})

let audio = reactive(new Audio())
let playerInterlval = null

const playAudio = (item, index) => {
  clearInterval(playerInterlval)

  //点击按钮，所有的其他播放都被停止
  let isOtherPlay = false
  list.forEach(listItem => {
    // if(listItem.isPlay && listItem.id !== item.id){
    if (listItem.id !== item.id) {
      listItem.isPlay = false
      listItem.progress = 0
      audio.pause()
      audio.load()
      isOtherPlay = true
      listItem.currentTime = undefined
    }
  })


  //如果当前正在播放则暂停
  if (item.isPlay) {
    audio.pause()
    list[index].isPlay = false
    return
  }

  console.log(987);

  //如果没有音频，再替换音频文件
  if (!audio.src) {
    audio.src = item.audioUrl
  }
  list[index].isPlay = true
  audio.play()
  playerInterlval = setInterval(() => {
    // console.log();
    list[index].progress = (audio.currentTime / audio.duration) * 100
    list[index].currentTime = proxy.$filter.timeCom(audio.currentTime)
  }, 1000)
}

</script>

<style lang="scss" scoped>
.audio-card {
  height: 112px;
  width: 1322px;
  background: #f1f1f1;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  position: relative;
  .list-left {
    margin-left: 142px;
    display: flex;
    padding-top: 18px;
    .number {
      color: #4a4a4a;
      font-weight: bold;
      font-size: 25px;
    }
    div {
      margin-left: 40px;
      p {
        color: #4a4a4a;
        font-weight: bold;
        font-size: 20px;
      }
      span {
        font-size: 15px;
        color: #9f9f9f;
        padding-top: 15px;
        display: block;
      }
    }
  }
  .list-right {
    display: flex;
    align-items: center;
    .right-left {
      display: flex;
      align-items: center;
      margin-right: 40px;
      p {
        color: #9f9f9f;
        font-size: 20px;
        letter-spacing: 1.4px;
      }
      p:nth-child(2) {
        padding: 0 6px;
      }
    }
    .right-right {
      display: flex;
      align-items: center;
      img {
        width: 35px;
        height: 35px;
        cursor: pointer;
        margin-right: 35px;
      }
    }
  }
  .progress {
    position: absolute;
    bottom: 0;
    height: 2px;
    background: #e80a0a;
  }
}
</style>