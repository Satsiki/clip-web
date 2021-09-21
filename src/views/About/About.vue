<template>
  <div>
    <TopMenu />
    <div class="head">
      <h1>{{ $t('about.title') }}</h1>
      <div>
        <img src="@/assets/img/weblogo.svg" alt class="logo" />
      </div>
      <p>{{ $t('about.intro') }}</p>
    </div>

    <div class="content">
      <p class="content-title">成员介绍</p>
      <div v-for="(item,index) in memberIntro.zh" :key="index" class="content-for">
        <p class="title" :class="item.intro && 'pb-0'">{{ item.title }}</p>
        <span class="title-span">{{ item.intro }}</span>

        <div class="content-card-container" v-if="item.mainType === 3">
          <div class="content-card" v-for="(item1,index1) in item.data" :key="index1">
            <div class="card-container">
              <div class="avatar">
                <img :src="item1.avatar" alt />
              </div>
              <div class="right">
                <div class="right-top">
                  <div class="top-left">
                    <div class="name">{{ item1.name }}</div>
                    <div class="attr">{{ item1.attr }}</div>
                  </div>
                  <div class="top-right">
                    <img src="@/assets/img/Path 21.svg" alt />
                    <img src="@/assets/img/Path 22.svg" alt />
                    <img src="@/assets/img/Path 23.svg" alt />
                    <img src="@/assets/img/Path 24.svg" alt />
                  </div>
                </div>
                <div class="right-bottom">{{ item1.intro }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="content-card-container-type-2" v-if="item.mainType === 2">
          <div class="content-card2" v-for="(item1,index1) in item.data" :key="index1">
              <div class="avatar">
                <img :src="item1.avatar" alt />
              </div>
              <div class="name">{{ item1.name }}</div>
              <div class="attr">{{ item1.attr }}</div>
              <div class="intro">{{ item1.intro }}</div>
              <div class="link">
                <img src="@/assets/img/Path 21.svg" alt />
                <img src="@/assets/img/Path 22.svg" alt />
                <img src="@/assets/img/Path 23.svg" alt />
                <img src="@/assets/img/Path 24.svg" alt />
              </div>
          </div>
        </div>

        <div class="content-card-container-type-3" v-if="item.mainType === 1">
          <div class="content-card" v-for="(item1,index1) in item.data" :key="index1">
            <div class="card-container">
              <div class="avatar">
                <img :src="item1.avatar" alt />
              </div>
              <div class="right">
                <div class="right-top">
                  <div class="top-left">
                    <div class="name">{{ item1.name }}</div>
                    <div class="attr">{{ item1.attr }}</div>
                  </div>
                  <div class="top-right">
                    <img src="@/assets/img/Path 21.svg" alt />
                    <img src="@/assets/img/Path 22.svg" alt />
                    <img src="@/assets/img/Path 23.svg" alt />
                    <img src="@/assets/img/Path 24.svg" alt />
                  </div>
                </div>
                <div class="right-bottom">{{ item1.intro }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LogoList :listType="2" class="logo-list"></LogoList>
    <!-- {{$t('about.intro')}}
    {{$t('about.memberIntro')}}
    {{$t('about.boss')}}
    {{$t('about.member')}}-->
  </div>
</template>

<script setup>
import TopMenu from "components/TopMenu.vue"
import LogoList from "components/LogoList.vue"
import { memberIntro } from 'assets/js/about.js'

console.log(memberIntro);
</script>

<style lang="scss" scoped>
.head {
  margin-top: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #4a4a4a;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 20px;
  }
  div {
    background: url(@/assets/img/placeholder.png) no-repeat 0 0;
    width: 1314px;
    height: 457px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    text-align: center;
    font: normal normal 300 20px/30px Noto Sans SC;
    letter-spacing: 0.6px;
    color: #6b6b6b;
    font-size: 20px;
    width: 864px;
    margin: 34px 0;
  }
}
.content {
  width: 1316px;
  margin: 0 auto;
  &-title {
    font: normal normal 900 40px/58px Noto Sans SC;
    letter-spacing: 20px;
    color: #4a4a4a;
    text-transform: uppercase;
    opacity: 1;
    font-size: 40px;
  }
  .content-for {
    .title {
      letter-spacing: 15px;
      color: #e80a0a;
      text-transform: uppercase;
      opacity: 1;
      font-size: 30px;
      font-weight: bold;
      padding-bottom: 30px;
    }
    .title-span {
      color: #4a4a4a;
      font-weight: bold;
      font-size: 25px;
      padding-bottom: 20px;
      display: block;
    }
    .content-card {
      width: 100%;
      height: 300px;
      background: #f1f1f1;
      margin-bottom: 40px;
      height: 234px;
      .card-container {
        width: 100%;
        padding-left: 86px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 48px;
        height: 100%;
        .avatar {
          width: 234px;
          height: 234px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            height: 150px;
            width: 150px;
            border-radius: 50%;
          }
        }
        .right {
          width: 816px;
          margin-top: 80px;
          height: 100%;
          .right-top {
            display: flex;
            justify-content: space-between;
            .top-left {
              height: 64px;
              border-left: 2px solid #e80a0a;
              .name {
                font: normal normal bold 25px/36px Noto Sans SC;
                letter-spacing: 3.25px;
                color: #4a4a4a;
                font-size: 25px;
                padding-left: 22px;
                padding-bottom: 6px;
              }
              .attr {
                color: #6b6b6b;
                font: normal normal normal 15px/21px Noto Sans SC;
                letter-spacing: 1.95px;
                padding-left: 22px;
              }
            }
            .top-right {
              display: flex;
              img {
                margin-left: 44px;
                cursor: pointer;
              }
            }
          }
          .right-bottom {
            color: #9f9f9f;
            font-size: 15px;
            margin-top: 20px;
            letter-spacing: 0.45px;
            line-height: 30px;
          }
        }
      }
    }
    .content-card-container-type-3 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .content-card {
        width: 638px;
        background: #fff;
        border:1px solid  #DBDBDB;
        .card-container {
          padding-right: 30px;
          padding-left: 48px;
          position: relative;
          .avatar {
            height: 138px;
            width: 138px;
            background: rgb(241, 241, 241);
            img {
              height: 96px;
              width: 96px;
            }
          }
          .right {
            width: 382px;
            margin-top: 0;
            padding-top: 30px;
            .right-top {
              .top-left {
                height: 48px;
                border-left: 2px solid #e80a0a;
                .name {
                  letter-spacing: 2.34px;
                  font-size: 18px;
                  padding-left: 10px;
                  padding-bottom: 0px;
                  margin-top: -9px;
                }
                .attr {
                  letter-spacing: 1.95px;
                  padding-left: 10px;
                  font-size: 15px;
                }
              }
              .top-right {
                display: flex;
                position: absolute;
                right: 27px;
                bottom: 31px;
                img {
                  margin-left: 30px;
                  cursor: pointer;
                  transform: scale(0.8);
                }
              }
            }
            .right-bottom {
              font-size: 13px;
              line-height: 20px;
            }
          }
        }
      }
    }
    .content-card-container-type-2 {
      display: flex;
      justify-content: space-between;
      margin-bottom: 70px;
      .content-card2{
        height: 628px;
        width: 412px;
        border-radius: 2px;
        border-top: 2px solid #e80a0a;
        background: #F1F1F1;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .avatar{
          width: 234px;
          height: 234px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-top: 30px;
          img{
            height: 156px;
            width: 156px;
            border-radius: 50%;
          }
        }
        .name{
          font-size: 25px;
          color: #4A4A4A;
          font-weight: bold;
          letter-spacing: 0.75px;
          margin-top: 30px;
        }
        .attr{
          font-size: 15px;
          color: #6b6b6b;
          margin-top: 7px;
        }
        .intro{
          width: 344px;
          margin: 0 auto;
          letter-spacing: 0.45px;
          color: #9F9F9F;
          text-align: center;
          line-height: 30px;
          margin-top: 20px;
        }
        .link{
          display: flex;
          justify-content: space-between;
          width: 246px;
          position: absolute;
          bottom: 40px;
          left: 0;
          right: 0;
          margin: 0 auto;
        }
      }
    }
  }
}
.logo-list{
  margin: 0 auto;
  padding: 35px 0;
}
</style>