<template>
    <div>
        <!-- 用户个人中心页面 -->
        <h2>User</h2>
    </div>
</template>

<script>
export default {
    name:'User',
     data(){
        return{
            title:'我的'
        }
    },
    mounted(){
		this.$emit('toparent',this.title)
	}
}
</script>

<style scoped>
    
</style>