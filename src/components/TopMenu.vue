<template>
    <div class="top-menu">
        <img src="@/assets/img/weblogo.svg" alt class="logo" />
        <div>
            <router-link
                to="/about"
                :class="route.path === '/about' && 'active'"
            >{{ $t(`home.about`) }}</router-link>
            <router-link
                to="/albums"
                :class="route.path.includes('/albums') && 'active'"
            >{{ $t(`home.albums`) }}</router-link>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute()

</script>

<style lang="scss" scoped>
.top-menu {
    width: 290px;
    height: 214px;
    background: rgb(225, 225, 225);
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    img {
        width: 120px;
        margin-top: 35px;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 220px;
        margin-top: 32px;
        a {
            width: 78px;
            border-bottom: 2px solid #6b6b6b;
            color: #4a4a4a;
            text-align: center;
            padding-bottom: 8px;
            letter-spacing: 2.6px;
            font-size: 20px;
        }
        .active {
            color: #e80a0a;
            border-bottom: 2px solid #e80a0a;
        }
    }
}
</style>