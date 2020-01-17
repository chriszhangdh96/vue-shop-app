<template>
    <div>
        <van-nav-bar
            title="关于天天优购"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            :fixed="true"
        />
        <div class="container">
            <div class="logo">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579231272202&di=7a7ed92d9e99d37d2dc38ac15aeb34f0&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2018%2F06%2F08%2FFhJg_RF9nPguWWjFthNKV4QAQ6Gf.jpg" alt="">
                <span class="info">For Android v8.4.4 build</span>
            </div>
            <ul>
                <li @click="update">
                    <span>检测更新</span>
                    <van-icon name="arrow" />
                </li>
                <li>
                    <span>使用帮助</span>
                    <van-icon name="arrow" />
                </li>
                <li>
                    <span>隐私政策</span>
                    <van-icon name="arrow" />
                </li>
            </ul>
            <div class="footer">
                <p>Copyright©2019-2020</p>
                <p>天天优购版权所有</p>
            </div>
        </div>
    </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
    name:'aboutus',
    data(){
        return{

        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        update(){
            Dialog({ message: '您所使用的已是最新版本' });
        }
    },
}
</script>

<style scoped>
.container{
    min-height: 667px;
    margin-top:46px; 
    background: lightgray;
}
.container ul{
    width: 100%
}
.container ul li{
    background: #fff;
    border-bottom:1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0 5px;
}
.container .logo{
    display: flex;
    flex-direction: column;
    align-items: center
}
.container .logo img{
    width: 50%;
    height:150px;
}
.container .info{
    margin: 10px 0;
}
.van-nav-bar--fixed{
    background: #d43c33;
}
.van-nav-bar__text,.van-nav-bar .van-icon,.van-nav-bar__title{
    color: #fff;
}
.footer{
    position: absolute;
    bottom: 0;
    width: 100%
}
.footer p{
    margin: 0;
    text-align: center; 
}
</style>