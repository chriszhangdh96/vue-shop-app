<template>
    <div>
        <!-- 商品详情页 -->
         <van-nav-bar
            title="商品详情"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            :fixed="true"
        />

        <!-- container -->
        <div class="container">
            <!-- 轮播图 -->
            <van-swipe 
                indicator-color="black"
                :height="280"
            >
                <van-swipe-item v-for="item in list.pics" :key="item.id" >
                    <img :src="item.pics_big_url" @click="swiperImgClick(item.pics_big_url)">
                </van-swipe-item>
            </van-swipe>

            <!-- 商品简介 -->
            <div class="shopintro">
                <h3>¥ {{list.goods_price}}</h3>
                <div class="shopinfo">
                    <div class="goodname">{{list.goods_name}}</div>
                    <div class="shoucang">
                        <van-icon :name="isCollect?'star':'star-o'" color="red" @click="tocollect"/>
                        <span>收藏</span>
                    </div>
                </div>
            </div>

            <h2>图文详情</h2>
            <!-- 图文详情 -->
            <div v-html="list.goods_introduce"></div>   
        </div>


        <!-- 底部商品导航 -->
        <van-goods-action>
            <div class="ball" v-show="flag">{{$store.getters.getAllCount}}</div>
            <van-goods-action-icon icon="service-o" text="联系客服" />
            <van-goods-action-icon icon="share" text="分享"  />
            <van-goods-action-icon icon="shopping-cart-o" @click="tocart" text="购物车"  />
            <van-goods-action-button type="warning" @click="tocar" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>


        <!-- 点击回到顶部 -->
        <van-icon name="arrow-up" class="totop" @click="totop" />
        
    </div>
</template>

<script>
import axios from 'axios'

import { ImagePreview } from 'vant';


export default {
    name:'Detail',
    data(){
        return {
            id:'',
            count:1,
            price:'',
            pimg:'',
            pname:'',
            // selected:true,
            list: [],
            isCollect: false,
            flag:true
        }
    },
    methods:{
        tocart(){
            this.$router.push({
                name:'cart'
            })
        },
        tocar(){
            var goodsinfo={
                id:this.id,
                count:this.count,
                price:this.price,
                pimg:this.pimg,
                pname:this.pname,
                selected:true
            }
            this.$store.commit('addTocar',goodsinfo)
            //console.log(goodsinfo)
            this.flag=true
        },
        tocollect(){
            this.isCollect=!this.isCollect
            if(this.isCollect){
                //console.log('收藏了')
                var goodsshop={
                    id:this.id,
                    price:this.price,
                    pname:this.pname,
                    pimg:this.pimg,
                    isCollect:true
                }
                this.$store.commit('addToshop',goodsshop)
            }else{
                //console.log('取消收藏')
                this.$store.commit('removeshop',this.id)
            }
        },
        onClickLeft(){
            this.$router.go(-1)
        },
        swiperImgClick(imgurl){
            ImagePreview({
                images:[
                    imgurl
                ],
                showIndex:false
            });
        },
        totop(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    },
    mounted(){
        let totopBtn = document.querySelector('.totop')

        window.onscroll = function(){
            if(totopBtn){
                if(window.scrollY>380){
                    totopBtn.style.display = 'block';
                }else{
                    totopBtn.style.display = 'none';
                }
            }
        }
        axios.get('https://api.zbztb.cn/api/public/v1/goods/detail',{
            params:{
                goods_id: this.$route.query.id
            }
        }).then(res=>{
            //console.log(res.data.message)
            this.id=res.data.message.goods_id
            this.price=res.data.message.goods_price
            this.list = res.data.message
            this.pimg=res.data.message.goods_big_logo
            this.pname=res.data.message.goods_name


            var shop=JSON.parse(localStorage.getItem('shop'))
            //console.log(shop)
            if(shop){
                shop.forEach(item=>{
                if(item.id==this.id){
                    this.isCollect=item.isCollect
                }
            })
            }
            
        })
    },
    created(){
        // if(this.$store.getters.getAllCount==0){
        //     this.flag=false
        // }else{
        //     this.flag=true
        // }

        

    },
    watch:{
        '$route'(newval){
            
        }
    }
    
}

        

</script>

<style scoped>
    .container{
        margin-top:46px; 
        margin-bottom:50px; 
    }
    p{
        margin: 0
    }
    .van-swipe img{
        width: 100%;
        height: 100%;
    }
    .shopintro{
        text-align: left;
        color:#7c716f ;
    }

    .shopintro h3{
        margin: 10px 0;
        color:red;
        text-indent: 1em

    }
    .shopintro .shopinfo{
        display: flex;
        padding-bottom: 10px;
        border-bottom: 10px solid #eeeeee;
    }

    .shopinfo .goodname{
        flex: 1;
        padding: 0 10px;
    }

    .shopinfo .shoucang{
        width: 15%;
        display: flex;
        flex-direction: column;
        text-align: center;
        border-left:1px solid #7c716f;
        justify-content: space-around;
    }

   .shoucang .van-icon{
       font-size:19px
    }

    h2{
        color: red;
        text-align: left;
        text-indent: 1rem;
        margin: 12px 0;
    }

    .totop{
        display: none;
        position: fixed;
        bottom: 10%;
        right: 0;
        width: 30px;
        height: 30px;
        border: 1px solid;
        text-align: center;
        line-height: 30px;
        border-radius:50%;
        background: #fff 
    }
    .ball{
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
        position: fixed;
        bottom: 30px;
        right: 235px;
        opacity: 0.9;
        font-size: 12px;
    }
</style>