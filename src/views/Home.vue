<template>
    <div>
        <van-nav-bar
		  :title="title" 
		  :fixed="true"
          class="nav"
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
            <div class="ball" v-show="flag">{{$store.getters.getAllCount}}</div>
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
            title:'首页',
            flag:true
        }
    },
    methods:{
        getval(msg){
            this.title = msg
        }
    },
    created(){
        if(this.$store.getters.getAllCount==0){
            this.flag=false
        }else{
            this.flag=true
        }
    }
<<<<<<< HEAD
    }

=======
}
>>>>>>> zdh
</script>

<style scoped>
    #container{
		margin-top: 46px;
		margin-bottom: 50px;
    }
    .nav{
        width: 100%;
        height: 50px;
        color: #940000
    }
    .ball{
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
        position: fixed;
        bottom: 30px;
        right: 125px;
        opacity: 0.9;
        font-size: 12px;
    }
</style>