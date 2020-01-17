<template>
    <div>
        <!-- 首页 -->
        <!-- 搜索 -->
        <van-sticky>
            <Search to="/search"></Search>
        </van-sticky>
        <!-- 轮播图 -->
        <Swiper></Swiper>
        <!-- 导航 -->
        <Nav></Nav>
        <!-- 楼层 -->
        <Floors></Floors>
        <div class="to-login" @click="toLogin" ref='islogin'>
            <img src="https://image2.suning.cn/uimg/cms/img/157588645542963955.png">
        </div>    
    </div>
</template>

<script>
import Search from '../../components/Search'
import Swiper from './Swiper'
import Nav from './Nav'
import Floors from './Floors'


export default {
    name:'Index',
    data(){
        return{
            title:'天天优购',
        }
    },
    methods:{
        toLogin(){
            this.$router.push('/login')
        }
    },
    components:{
        Search,
        Swiper,
        Nav,
        Floors
    },
    mounted(){
        this.$emit('toparent',this.title)
        let token = localStorage.getItem('token')
        if(token){
            this.$refs.islogin.style.display = 'none'
        }else{
            this.$refs.islogin.style.display = 'block'
        }
	}
}
</script>

<style scoped>
    .to-login{
        position: fixed;
        /* display: block; */
        bottom: 45px;
        left: 0;
    }
    .to-login img{
        width: 100%
    }
</style>