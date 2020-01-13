<template>
    <div class="collect">
        <h2>收藏页面</h2>
        <van-tabs v-model="active">
            <van-tab title="商品收藏">
                <van-tabs type="card">
                    <van-tab title="全部" :to="{name:'cang'}"></van-tab>
                    <van-tab title="正在热卖" :to="{name:'remai'}"></van-tab>
                    <van-tab title="即将上线" :to="{name:'jijiang'}"></van-tab>
                </van-tabs>
                <!-- <div class="flexbuju">
                    <router-link  :to="{name:'cang'}">全部</router-link>
                    <router-link :to="{name:'remai'}">正在热卖</router-link>
                    <router-link :to="{name:'jijiang'}">即将上线</router-link>
                </div> -->
                <router-view/>
            </van-tab>
            <van-tab title="品牌收藏">品牌收藏</van-tab>
            <van-tab title="店铺收藏">店铺收藏</van-tab>
            <van-tab title="浏览足迹">浏览足迹</van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return {
            active:0
        }
    }
}
</script>
<style scoped>
</style>