<template>
    <div>
        <van-nav-bar
		  :title="title" 
		  :fixed="true"
		/>

        <div id="container" >
            <!-- 视图容器 -->
            <router-view @toparent="getval"></router-view>
        </div>

        <van-tabbar
            active-color= red 
            v-model="active"
        >
            <!-- 导航标签 -->
            <van-tabbar-item icon="wap-home-o" to="/index">首页</van-tabbar-item>
            <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="manager-o" to="/user">我的</van-tabbar-item>
            
        </van-tabbar>
    </div>

</template>

<script>
export default {
    name:'Index',
    data(){
        return {
            active:0,
            title:'首页'
        }
    },
    methods:{
        getval(msg){           
            this.title = msg
        }
    }
    
}
</script>

<style scoped>
    #container{
        margin-top: 60px;
        height: 80px;
        line-height: 80px
    }
</style>