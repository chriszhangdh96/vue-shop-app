<template>
    <div>
        <!-- 首页 -->
        <h2>Index</h2>
        <button @click="toXiang">进入详情</button>
    </div>
</template>

<script>
export default {
    name:'Index',
    data(){
        return{
            title:'首页'
        }
    },
    methods:{
        toXiang(){
            this.$router.push({
                name:'detail'
            })
        }
    },
    mounted(){
        this.$emit('toparent',this.title)
	}
}
</script>

<style scoped>
    
</style>