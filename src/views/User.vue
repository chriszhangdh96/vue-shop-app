<template>
  <div>
    <!-- 用户个人中心页面 -->

    <h3 @click="login()" v-show="!flag">登录</h3>
    <div class="u-login" v-show="flag">
       <div class="box2">
        <div> <van-uploader v-model="fileList" multiple  :max-count="1" class="headpic"/></div>
            <!-- <img  src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578664411&di=8ad737b052da49b6ed1eede69e5184be&src=http://b-ssl.duitang.com/uploads/item/201610/01/20161001161842_vyxNC.thumb.700_0.jpeg" alt="">       -->
        </div>
      
        <div @click="alertHandle">
            我是用户名
        </div>
        
    </div>
    <div class="u-top">
        <ul>
            <li v-for="(item,index) in listsc" :key="item.index">
                <span>1</span>
                <div class="sc" @click="tocollect(index)">{{item.name}}</div>
            </li>
        </ul>
    </div>

    <div class="tab">
      <div class="mylist">
        <span>我的订单</span>
      </div>
      <van-grid>
        <van-grid-item icon="todo-list-o" text="全部订单" @click="orderHahdle" />
        <van-grid-item icon="fire-o" text="代付款" />
        <van-grid-item icon="logistics" text="待收货" />
        <van-grid-item icon="after-sale" text="退款/售后" />
      </van-grid>
    </div>
    <div>
      <ul class="list">
        <li>
          收货地址管理
          <span>
            <van-icon name="arrow" />
          </span>
        </li>
        <li>
          <span>联系客服</span>
          <span>400-168-4000</span>
        </li>
        <li @click="tofeedback " :class="tofeedback?'changeMouseOver':''">
          意见反馈
          <span>
            <van-icon name="arrow" />
          </span>
        </li>
        <li>
          关于我们
          <span>
            <van-icon name="arrow" />
          </span>
        </li>
        <li @click="topeopleChange()">
          设置
          <span>
            <van-icon name="arrow" />
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import Axios from 'axios';
import  ImagePreview  from 'vant';

export default {
  name: "User",
  data() {
    return {
      title: "我的",
      active: 0,
      flag:'',
      mouseOver:'false',
      listsc:[
          {index:0,name:'收藏店铺'},
          {index:1,name:'收藏的商品'},
          {index:2,name:'关注的商品'},
          {index:3,name:'我的足迹'},
      ],
      show: false,  
      flag2:'',
      fileList: [
        { url: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578664411&di=8ad737b052da49b6ed1eede69e5184be&src=http://b-ssl.duitang.com/uploads/item/201610/01/20161001161842_vyxNC.thumb.700_0.jpeg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      
      ]
    };
  },
  mounted() {
    this.$emit("toparent", this.title);
    if(localStorage.getItem('token')){
            this.flag = true
    }else{
            this.flag = false
    }
  },
  methods: {
    login() {
      this.$router.push({
        name: "login"
      });
    },
    changeMouseOver(){
        //庆贺大佬的创作  refs  一定要记住
        // this.$refs.clo.style = "color:#f00"
        // this.active = 'color:#f00'
        this.mouseOver =!this.mouseOver
    },
    mouseLeave(){
        console.log(2)
        //庆贺大佬的创作  refs  一定要记住
        // this.$refs.clo.style = "color:#f00"
        this.active = ''
    },
    tocollect(index){
      if(index==1){
        this.$router.push({
          name:'cang'
        })
      }
    },
    tofeedback(){
      this.$router.push({
        name:'feedback'
      })
    },
    alertHandle(){
      if(confirm('你想要退出登录吗？')){
        // console.log(1)
        localStorage.removeItem('token')
      }
      
    },
    orderHahdle(){
      this.$router.push({
        name:'order'
      })
    },
    topeopleChange(){
      this.$router.push({
        name:'people_change'
      })
    }
    
    
    
    
  }
};
</script>

<style scoped>
.tab {
  /* margin-top: 70px; */

  width: 100%;
}
.mylist {
  width: 100%;
  text-align: left;
  display: flex;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
}
.mylist span {
  padding-left: 14px;
}

.list li {
  width: 95%;
  height: 35px;
  line-height: 38px;
  display: flex;
  border-bottom: 1px solid #eee;
  text-align: left;
  box-sizing: border-box;
  justify-content: space-between;
  background: #eff;
}
.list {
  display: flex;
  flex-direction: column;
  padding-left: 14px;
}
/* .list li:first-child,li:nth-child(4){margin-bottom: 10px} */
.list li span:nth-child(2) {
  margin-right: 14px;
  line-height: 35px;
}
.list li:nth-child(1) {
  margin: 12px 0;
}
.list li:nth-child(5) {
  margin-top: 12px;
}
.u-top ul{
   border-bottom:1px solid #aaa;display: flex;justify-content: space-around;height: 70px;
   align-items: center;
}
.u-top span{color: crimson}
.u-login{
    height: 80px;display: flex;justify-content: center;flex-direction: column
}
.box2{display: flex;justify-content: center}
.active{background-color: darkgray}
.headpic{width: 50px;height: 50px;border-radius:50%;overflow: hidden;}




</style>