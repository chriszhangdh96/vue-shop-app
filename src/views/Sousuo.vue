<template>
    <div>
      <van-nav-bar
        title="搜索"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />

        <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            @cancel="onCancel"
            @input="getval"
        />

          <van-cell
            v-for="item in list"
            :key="item.goods_id"
            :title="item.goods_name"
            class="info"
        />
        
    </div>    
</template>

<script>
import axios from 'axios'

export default {
    name:'Search',
    data(){
        return {
            value:'',
            list:[]
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        onCancel(){

        },
        getval(e){
            axios.get('https://api.zbztb.cn/api/public/v1/goods/qsearch',{
				params:{
					query:this.value
				}
			})
			.then(res=>{
                console.log(res.data.message)
                this.list = res.data.message
			})
        }
    }
}
</script>

<style scoped>
    .info .van-cell__title{
        white-space:nowrap; 
        overflow:hidden; 
        text-overflow:ellipsis;
    }
</style>
