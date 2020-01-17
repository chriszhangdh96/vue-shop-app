<template>
    <div class="collect">
        <van-nav-bar
            title="我的收藏"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <van-tabs v-model="$store.state.footTab">
            <van-tab title="商品收藏">
                <van-tabs type="card">
                    <van-tab title="全部" :to="{name:'cang'}">
                        <router-view/>
                    </van-tab>
                    <van-tab title="正在热卖" :to="{name:'remai'}"></van-tab>
                    <van-tab title="即将上线" :to="{name:'jijiang'}"></van-tab>
                </van-tabs>
                <!-- <div class="flexbuju">
                    <router-link :to="{name:'cang'}">全部</router-link>
                    <router-link :to="{name:'remai'}">正在热卖</router-link>
                    <router-link :to="{name:'jijiang'}">即将上线</router-link>
                </div> -->
                <router-view/>
            </van-tab>
            <van-tab title="品牌收藏">品牌收藏</van-tab>
            <van-tab title="店铺收藏">店铺收藏</van-tab>
            <van-tab title="浏览足迹">
                <van-card
                    v-for="(item,index) in footlist"
                    :key="item.id"
                    :price="item.price"
                    :title="item.pname"
                    :thumb="item.pimg"
                >
                    <div slot="footer">
                        <van-button size="mini" @click="removefoot(item.id,index)">清除</van-button>
                    </div>
                </van-card>
                <van-button type="primary" @click="removeAll">全部清空</van-button>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return {
            footlist:''
        }
    },
    methods:{
        onClickLeft(){
            this.$router.push({
                name:'user'
            })
        },
        removefoot(id,index){
            this.footlist.splice(index,1)
            this.$store.commit('removefoot',id)
        },
        removeAll(){
            this.footlist=''
            this.$store.commit('removeAll')
        }
    },
    mounted(){
        this.footlist=JSON.parse(localStorage.getItem('foot'))
    }
}
</script>
<style scoped>
</style>