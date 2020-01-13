<template>
    <div class="cang">
        <van-card
            v-for="(item,index) in shopList"
            :key="item.id"
            :price="item.price"
            :desc="item.pname"
            :thumb="item.pimg"
            @click="todetail(item.id)"
        >
        <div slot="footer">
            <van-button size="mini" type="danger" @click.stop="removeshop(item.id,index)">取消收藏</van-button>
        </div>
        </van-card>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    data(){
        return {
            shopList:''
        }
    },
    methods:{
        removeshop(id,index){
            this.$store.commit('removeshop',id)
            this.shopList.splice(index,1)
        },
        todetail(id){
            this.$router.push({
                name:'detail',
                query:{
                    id:id
                }
            })
        }
    },
    created(){
        this.shopList=JSON.parse(localStorage.getItem('shop'))
        //console.log(this.shopList)
    }
}
</script>