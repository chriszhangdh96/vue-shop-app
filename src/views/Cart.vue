<template>
    <div>
        <!-- 购物车 -->
        <h2>Cart</h2>
        <!-- <input type="checkbox" v-model="checked"/>
        <div v-for="item in list" :key="item.id">
            <input type="checkbox" v-model="checked"/>
            <img :src="item.product.coverImg | glq"/>
            <div>{{item.product.name}}</div>
        </div> -->
        <div class="list" v-show="flag" v-for="(item,index) in carlist" :key="item.id">
            <!-- <van-switch v-model="item.selected" class="switch" size="14px"/> -->
            <van-checkbox
             v-model="item.selected"
             @change="selected(item.id,index)"
             ref="mychecked"
             class="switch"></van-checkbox>
            <img
            :src="item.pimg"
            class="pimg"
            />
            <div class="info">
                <h3>{{item.pname}}</h3>
                <p>
                    <span class="price">￥：{{item.price}}</span>
                    <van-stepper
                    class="ji"
                    @change="countchange(index,item.id)"
                    ref="mycount"
                    :value="$store.getters.getgoodscount[item.id]"
                    />
                    <!-- <button class="delete">删除</button> -->
                    <van-button type="danger" class="delete" size="mini" @click=remove(item.id,index)>
                        删除
                        <!-- 删除{{$store.getters.getgoodscount[item.id]}} -->
                    </van-button>
                </p>
            </div>
        </div>
        <div v-show="!flag">
            你还没有购物商品哦
        </div>

        <div class="jiesusan" v-show="flag">
            <van-checkbox v-model="checked" class="xuan" @change="quan">全选</van-checkbox>
            <div class="jia">总价：{{$store.getters.getgoodscountandmount.amout}}</div>
            <van-button type="danger" class="btn">去结算({{$store.getters.getAllCount}})</van-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Cart',
     data(){
        return{
            title:'购物车',
            list:[],
            checked:true,
            value:1,
            carlist:'',
            flag:true
        }
    },
    methods:{
        getgoodslist(){
            this.carlist=localStorage.getItem('car')
            console.log(carlist)
            // //获取购物车列表
            // //1.拼出一个ID集合
            // var idarr=[]
            // this.$store.car.forEach(item=>idarr.push(item.id))
            // //获取购物车商品列表

            // axios.get('url'+idarr.join(",")).then(res=>{
            //     if()
            // })
        },
        countchange(index,id){
            //修改
            //console.log(this.$refs.mycount[index].currentValue)
            //console.log(id)

            //每当数量值改变，就同步到购物车的store中，覆盖之前的数量制
            this.$store.commit('updatagoodsinfo',{
                id:id,
                count:this.$refs.mycount[index].currentValue
                })
        },
        remove(id,index){
            //点击删除，ID从本地删除，index从购物车删除
            this.carlist.splice(index,1)
            this.$store.commit('removeforcar',id)
        },
        selected(id,index){
            //点击开关同步一下
            //console.log(id)
            //console.log(this.$refs.mychecked[index].value)
            this.$store.commit('updatagoodsselected',{id,selected:this.$refs.mychecked[index].value})
        },
        //全选
        quan(){
            //console.log(this.$refs.mychecked)
            
            // if(this.checked){
            //     console.log(this.checked)
            //     this.$store.commit('updateGettersGoodsChecked', true);
            // }else{
            //     console.log(222)
            //     this.$store.commit('updateGettersGoodsChecked', false);
            // }
        }
    },
    created(){
         this.carlist=JSON.parse(localStorage.getItem('car'))
            //console.log(this.carlist)
            if(this.carlist==''){
               this.flag=false
            }else{
                this.flag=true
            }
    },
    mounted(){
        this.$emit('toparent',this.title)
    },
    filters:{
    glq:function(res){
      if(res){
        return res.startsWith('http')?res:'http://api.cat-shop.penkuoer.com'+res
      }
    }
  }
}
</script>

<style scoped>
    .list img{
        width: 60px;
        height: 60px;
        position:absolute;
        left: 38px;
        top:10px
    }
    .list{
        width: 90%;
        /* border: 1px solid #ccc; */
        height: 80px;
        margin-left:5%;
        position: relative;
    }
    .switch{
        position: absolute;
        left: -10px;
        top: 20px
    }
    .list .info h3{
        width: 200px;
        height: 36px;
        margin: 0;
        padding: 0;
        position:absolute;
        top: 3px;
        right: 5px;
        overflow: hidden;
        text-align: left;
        font-size: 13px
    }
    .info .price{
        font-size: 14px;
        color: red;
        width: 60px;
        height: 20px;
        /* border: 1px solid #94ff00; */
        position: absolute;
        bottom:5px;
        left: 110px;
    }
    .ji{
        position:absolute;
        bottom:5px;
        left: 180px;
    }
    .delete{
        position: absolute;
        right: 0;
        bottom: 5px;
    }
   .jiesusan{
       width: 100%;
       height: 80px;
       position: fixed;
       bottom: 50px;
       left: 0;
   }
   .jiesusan .xuan{
       margin-top: 30px;
       margin-left: 20px;
       float: left;
   }
   .jiesusan .jia{
       height: 40px;
       width: 180px;
        float: left;
        margin-left: 60px;
        margin-top: 30px;
        text-align: left;
        font-size: 24px;
        color: red;
   }
   .jiesusan .btn{
       position: fixed;
       right: 5px;
       bottom: 55px;
       float: right;
   }
</style>