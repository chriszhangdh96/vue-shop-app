<template>
    <div>
        <!-- 楼层 开始 -->
        <div class="index_floor">
            <div class="floor_group" v-for="item in list" :key="item.id">
                <!--标题-->
                <div class="floor_title">
                    <img :src="item.floor_title.image_src">
                </div>
                <!--内容-->
                <div class="floor_list">
                    <div
                        v-for="v in item.product_list"
                        :key="v.id"
                    >
                        <img :src="v.image_src" class=""/>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Floors',
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        axios.get('https://api.zbztb.cn/api/public/v1/home/floordata')
        .then(res=>{
            console.log(res.data.message)
            this.list = res.data.message
        })
    }
}
</script>

<style scoped>

.index_floor .floor_group .floor_title{
    padding: 10px 0;
}
.index_floor .floor_group .floor_title img{
    width: 100%;
}

.index_floor .floor_group .floor_list{
    overflow: hidden;
}
.index_floor .floor_group .floor_list div{
    float: left;
    width: 31.5%;
}
.index_floor .floor_group .floor_list div:first-child{
    border-left: 5px solid #fff;

}
.index_floor .floor_group .floor_list div:nth-last-child(-n+4){
    border-left: 5px solid #fff;
    /* height: 27.7vw; */
    height: 25.5vw;
    border-bottom: 5px solid #fff; 
}
.index_floor .floor_group .floor_list div img{
    width: 100%;
    height: 100%;
}
.index_floor .floor_group .floor_list div:nth-child(2),.index_floor .floor_group .floor_list navigator:nth-child(3){
    /* border-bottom: 10px solid #fff; */
}
</style>