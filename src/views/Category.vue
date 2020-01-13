<template>
    <div class="category">
        <!-- 分类 -->
        <Search></Search>
        <div class="box">
            <!-- <div class="left" v-for="item in zong" :key="item.id">
                <div>{{item.cat_name}}</div>
            </div> -->
            <div  class="left">
                <div v-for="(item,index) in zong" :key="item.id" class="left_centent" @click="TabClick(index)">
                <div :class="{active:index==xuanzhong}" @click="aaa(index)">{{item.cat_name}}</div>
            </div>
            </div>
            <div class="right">
               <div class="right_title" v-for="v in rightList" :key="v.id">
                   <h3>{{v.cat_name}}</h3>
                   <div class="right_conter" v-for="i in v.children" :key="i.id" @click="toprolist(i.cat_id)">
                       <img :src="i.cat_icon" />
                       <p>{{i.cat_name}}</p>
                   </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Search from '../components/Search'
export default {
    name:'Category',
     data(){
        return{
            activeKey:0,
            title:'分类',
            leftList:[],
            rightList:[],
            zong:[],
            index:0,
            xuanzhong:0
        }
    },
    methods:{
        TabClick(i){
            //console.log(i)
            this.index=i
            this.rightList=this.zong[this.index].children
        },
        aaa(i){
            // this.index=i
            this.xuanzhong=i
        },
        toprolist(id){
            this.$router.push({name:'productlist',query:{id:id}})
        }
    },
    mounted(){
        this.$emit('toparent',this.title)
        axios.get('https://api.zbztb.cn/api/public/v1/categories').then(res=>{
            //console.log(res)
            this.zong=res.data.message
            this.leftList=this.zong.map(v=>v.cat_name)
            //console.log(this.leftList)
            this.rightList=this.zong[this.index].children
            // console.log(this.rightList)
        })
    },
    components:{
        Search
    }
}
</script>

<style scoped>
    html,body{
        height: 100%;
    }
    
    .category{
        margin-bottom:50px;
        height: 100%;
        margin-bottom:50px;
    }
    .box{
        width: 100%;
        display: flex;
        height: 100%;
        padding-bottom: 50px;
    }
    .left{
       width: 30%;
       /* background-color:pink; */
       height: 78%;
       position: fixed;
       left: 0;
       top:100px;
       overflow: auto;
       border-right:#ff9400 1px solid;
       border-top: #ccc 1px solid;
    }
    .active{
        margin-left:2px; 
        color:#940000;
        border-left: 2px solid #0094ff;
    }
    .right{
        width: 70%;
        position: fixed;
        top: 100px;
        right: 0;
        margin-left:5px; 
       flex: 5;
       /* background-color:aquamarine; */
       /* height: 100%; */
      height: 78%;
       overflow: auto;
    }
    .left_centent{
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        background: #fff;
        border-bottom:1px solid #ccc;
    }
    .right_title{
        /* width: 100%;
        height: 300px; */
        /* height: 50px; */
        display: flex;
        flex-wrap: wrap;
       justify-content: space-around
        /* flex-direction: column */
    }
    .right_title h3{
        text-align: center;
        width: 100%;
        height: 30px;
    }
    .right_conter{
        display: flex;
        flex-direction: column;
        padding: 2px;
        /* display: flex;
        flex-wrap: wrap; */
    }
    .right_conter img{
        width: 70px;
        height: 60px;
        float: left;
    }
    .right_conter p{
        width: 70px;
    }
</style>