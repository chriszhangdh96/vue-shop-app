<template>
    <div>
        <!-- 首页 -->
        <h2>Index</h2>
    </div>
</template>

<script>
export default {
    name:'Index',
    data(){
        return{
            title:'首页',
        }
    },
    mounted(){
		this.$emit('toparent',this.title)
	}
}
</script>

<style scoped>
    
</style>