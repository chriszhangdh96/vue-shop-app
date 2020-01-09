<template>
    <div>
        <!-- 分类 -->
        <h2>Category</h2>
    </div>
</template>

<script>
export default {
    name:'Category',
     data(){
        return{
            title:'分类'
        }
    },
    mounted(){
		this.$emit('toparent',this.title)
	}
}
</script>

<style scoped>
    
</style>