<template>
    <div>
        <!-- 购物车 -->
        <h2>Cart</h2>
    </div>
</template>

<script>
export default {
    name:'Cart',
     data(){
        return{
            title:'购物车'
        }
    },
    mounted(){
		this.$emit('toparent',this.title)
	}
}
</script>

<style scoped>
    
</style>