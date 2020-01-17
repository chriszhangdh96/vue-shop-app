<template>
    <div>
        <div class="djs">
            <span class="tit">天天低价</span>
            <van-count-down :time="time">
                <template v-slot="timeData">
                    <span class="item">{{ timeData.hours }}</span>:
                    <span class="item">{{ timeData.minutes }}</span>:
                    <span class="item">{{ timeData.seconds }}</span>
                </template>
            </van-count-down>
        </div>
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
                        <img :src="v.image_src" class="" @click="toProductList(v.navigator_url)"/>
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
            list:[],
            time:86400000
        }
    },
    methods:{
        toProductList(url){

            let index = url.indexOf('=');

            let key = url.substr(index + 1,url.length);

            this.$router.push({name:'productlist',query:{key:key}})
        }
    },
    mounted(){
        axios.get('https://api.zbztb.cn/api/public/v1/home/floordata')
        .then(res=>{
            this.list = res.data.message
        })
    }
}


</script>

<style scoped>
.djs{
    text-align: left
}
.djs .tit{
    font-weight:bold ;
    margin-left: 8px;
    margin-right:10px 
}
.djs .item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #fc0;
  color: black
}

.van-count-down{
    display: inline-block
}


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
</style>