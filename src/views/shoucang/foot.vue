<template>
    <div>
        <van-card
            v-for="item in footlist"
            :key="item.id"
            :price="item.price"
            :title="item.pname"
            :thumb="item.pimg"
        />
    </div>
</template>
<script>
export default {
    data(){
        return {
            active:0,
            footlist:''
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        }
    },
    mounted(){
        this.footlist=JSON.parse(localStorage.getItem('foot'))
    }
}
</script>