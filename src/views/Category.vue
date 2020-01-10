<template>
    <div class="category">
        <!-- 分类 -->
        <h2>Category</h2>
        <div class="box">
            <div class="left" v-for="item in leftList" :key="item.id">
                <div>{{item.cat_name}}</div>
            </div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Category',
     data(){
        return{
            title:'分类',
            leftList:[],
            rightList:[],
            zong:[]
        }
    },
    mounted(){
        this.$emit('toparent',this.title)
        axios.get('https://api.zbztb.cn/api/public/v1/categories').then(res=>{
            //console.log(res)
            this.zong=res.data.message
            this.leftList=this.zong.map(v=>v.cat_name)
        })
	}
}
</script>

<style scoped>
    .category{
        margin-bottom:50px 
    }
    .box{
        width: 100%;
    }
    .left{
        width:  30%;
    }
    
    .right{
        width: 70%
    }
</style>