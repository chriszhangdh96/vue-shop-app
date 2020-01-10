<template>
    <div>
        <!-- 购物车 -->
        <h2>Cart</h2>
        <input type="checkbox" v-model="checked"/>
        <div v-for="item in list" :key="item.id">
            <input type="checkbox" v-model="checked"/>
            <img :src="item.product.coverImg | glq"/>
            <div>{{item.product.name}}</div>
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
            checked:true
        }
    },
    mounted(){
        this.$emit('toparent',this.title)
        //获取购物车数据
        let token=this.$store.state.token
        //console.log(pid)
        axios.get('http://api.cat-shop.penkuoer.com/api/v1/shop_carts',{
            headers:{
                authorization:'Bearer '+token
            }
        }).then(res=>{
            console.log(res)
            
            this.list=res.data.product
            console.log(this.list)
            

            var goodsinfo={
                id:this.list._id,
                count:this.list.quantity,
                price:this.list.price,
                selected:true
            }

            var goodsinfo={
                id:this.id,
                count:this.selectedCount,
                price:this.goodsinfo.sell_price,
                selected:true
            }

            this.$store.commit('addTocat',goodsinfo)
        })
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
    img{
        width: 60px;
        height: 60px;
    }
</style>