<template>
    <div>
        <!-- 首页 -->
        <!-- 搜索 -->
        <Search to="/search"></Search>
        <!-- 轮播图 -->
        <Swiper></Swiper>
        <!-- 导航 -->
        <Nav></Nav>
        <!-- 楼层 -->
        <Floors></Floors>
    </div>
</template>

<script>
import Search from '../components/Search'
import Swiper from '../views/Swiper'
import Nav from '../views/Nav'
import Floors from '../views/Floors'


export default {
    name:'Index',
    data(){
        return{
            title:'首页',
        }
    },
    methods:{
        
    },
    components:{
        Search,
        Swiper,
        Nav,
        Floors
    },
    mounted(){
		this.$emit('toparent',this.title)
	}
}
</script>

<style scoped>
    
</style>