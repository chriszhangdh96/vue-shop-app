<template>
    <div>

        <van-grid :border="false" :column-num="4">
            <van-grid-item 
                v-for="item in list" 
                :key="item.id" 
            >
                <van-image :src="item.image_src" />
            </van-grid-item>
        </van-grid>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Nav',
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        axios.get('https://api.zbztb.cn/api/public/v1/home/catitems')
        .then(res=>{
          
            this.list = res.data.message
        })
    }
}
</script>

<style scoped>
    .van-image{
        width: 80%;
    }
</style>