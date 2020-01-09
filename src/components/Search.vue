<template>
    <div>
        <van-search
         placeholder="请输入搜索关键词" 
         v-model="value" 
         @click="search"
        />
    </div>    
</template>

<script>
export default {
    name:'Search',
    data(){
        return {
            value:'',
        }
    },
    methods:{
        search(){
            this.$router.push('/sousuo')
        }
    }
}
</script>

<style scoped>
    
</style>
