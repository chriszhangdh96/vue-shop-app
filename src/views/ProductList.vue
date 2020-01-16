<template>
    <div>
         <!-- 商品列表页 -->
         <van-nav-bar
            title="商品列表"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            :fixed="true"
        />

        <div class="container">
            <!-- 搜索框 -->
            <Search></Search>
            <van-tabs
                v-model="activeName"
                line-width=33.3%
                title-active-color='#ee0a24'
            >
                <van-tab title="综合" name="a" title-style="font-size:17px">
                    <!-- 刷新 -->
                    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
                        <!-- <p>刷新次数: {{ count }}</p> -->
                        
                        <ul>
                            <li 
                                v-for="item in list"
                                :key="item.id"
                                @click="todetail(item.goods_id)"
                            >
                                <img :src="item.goods_small_logo?item.goods_small_logo:'http://b2bfile.91jyh.com/files/productpicture/c89d6633-99c0-4fc4-a733-b3766d4b484a_%e6%9a%82%e6%97%a0%e5%9b%be%e7%89%87.jpg'">
                                <div class="pinfo">
                                    <p class="pname">{{item.goods_name}}</p>
                                    <p class="pprice">¥ {{item.goods_price}}</p>
                                </div>
                            </li>
                        </ul>

                    </van-pull-refresh>
                </van-tab>
                <van-tab title="销量" name="b" title-style="font-size:17px">内容 2</van-tab>
                <van-tab title="价格" name="c" title-style="font-size:17px">内容 3</van-tab>
            </van-tabs>
        </div>

    </div>
</template>

<script>
import axios from 'axios' 
import Search  from '../components/Search'

export default {
    name:'ProductList',
    data(){
        return {
            activeName: 'a',
            list:[],
            count: 0,
            pagenum: 1,
            isLoading: false,
        }
    },
    components:{
        Search
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        onRefresh() {
            //下拉刷新
            this.pagenum++
            axios.get('https://api.zbztb.cn/api/public/v1/goods/search',{
                params:{
                    query:this.$route.query.key,
                    cid: this.$route.query.id,
                    pagenum:this.pagenum,
                    pagesize:6
                }
            }).then(res=>{
                console.log(res.data.message)
                if(res.data.message.goods.length==0){
                    return false;
                }  
                this.list = res.data.message.goods
            })

            setTimeout(() => {
                this.isLoading = false;
                this.count++;
            }, 2200); 
            
        },
        todetail(id){
            this.$router.push({name:'detail',query:{id:id}})
        }
    },
    mounted(){
        console.log(this.$route.query.key)
        axios.get('https://api.zbztb.cn/api/public/v1/goods/search',{
            params:{
                query:this.$route.query.key,
                cid: this.$route.query.id,
                pagenum:1,
                pagesize:6
            }
        }).then(res=>{
            // <van-loading type="spinner" color="#1989fa" />
            console.log(res.data.message)
            this.list = res.data.message.goods           
        })
    }
}
</script>

<style scoped>
    .container{
        margin-top:46px; 
    }

    ul li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid lavender; 
    }

    li img{
        width: 100px;
        height: 100px;
        margin-left:10px; 
    }

    li .pinfo{
        text-align: left;
    }

    .pinfo .pname{
        font-size: 14px;
        width: 230px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .pinfo .pprice{
        color:red;
    }

</style>