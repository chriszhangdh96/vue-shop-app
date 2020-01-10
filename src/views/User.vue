<template>
    <div>
        <!-- 用户个人中心页面 -->
        <h2>User</h2>
        <h3 @click="login">登录</h3>
        <h3 @click="feedback">意见反馈</h3>
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
    },
    methods:{
        login(){
            this.$router.push({
                name:'login'
            })
        },
        feedback(){
            this.$router.push({
                name:'feedback'
            })
        }
    }
}
</script>

<style scoped>
    
</style>