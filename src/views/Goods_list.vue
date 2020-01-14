<template>
    
</template>
<script>
import axios from 'axios'
export default {
    name:'Goods_list',
    created(){
        axios.get('https://api.zbztb.cn/api/public/v1/goods/search')
        .then(res=>{
            console.log(res.data)
        })
    },

}
</script>