<template>
    <div>
        <!-- 首页轮播图 -->
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in list" :key="item.goods_id">
                <img :src="item.image_src" @click="detail(item.goods_id)">
            </van-swipe-item>
        </van-swipe>
    </div>    
</template>

<script>
import axios from 'axios'

export default {
    name:'Swiper',
    data(){
        return {
            list:[]
        }
    },
    methods:{
        detail(id){
            this.$router.push({name:'detail',query:{id:id}})
        }
    },
    mounted(){
        axios.get('https://api.zbztb.cn/api/public/v1/home/swiperdata')
        .then(res=>{
<<<<<<< HEAD:src/views/Swiper.vue
            //console.log(res.data.message)
=======
            // console.log(res.data.message)
>>>>>>> 13bd8196607d6f2d83854a368b5e6832ef767b23:src/views/Index/Swiper.vue
            this.list =  res.data.message
        })
    }
}
</script>

<style scoped>
    img{
        width: 100%
    }
</style>
