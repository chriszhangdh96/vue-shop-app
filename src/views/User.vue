<template>
  <div>
    <!-- 用户个人中心页面 -->

    <h3 @click="login()" v-show="!flag">登录</h3>
    <div class="u-login" v-show="flag">
      <div class="box2">
        <img
          src="" ref="userimg"
        />
      </div>
      <div @click="alertHandle()">{{username}}</div>
    </div>
    <div class="u-top">
      <ul>
        <li>
          <span>0</span>
          <div class="sc">收藏店铺</div>
        </li>
        <li>
          <span>{{$store.getters.getshoplistlength}}</span>
          <div class="sc" @click="tocollect">收藏商品</div>
        </li>
        <li>
          <span>0</span>
          <div class="sc">关注的商品</div>
        </li>
        <li>
          <span>{{$store.getters.getfootlistlength}}</span>
          <div class="sc" @click="tofoot">我的足迹</div>
        </li>
      </ul>
    </div>

    <div class="tab">
      <div class="mylist">
        <span>我的订单</span>
      </div>
      <van-grid>
        <van-grid-item icon="todo-list-o" text="全部订单" @click="orderHahdle()" />
        <van-grid-item icon="fire-o" text="代付款" />
        <van-grid-item icon="logistics" text="待收货" />
        <van-grid-item icon="after-sale" text="退款/售后" />
      </van-grid>
    </div>
    <div>
      <ul class="list">
        <li @click="change_address()">
          收货地址管理
          <span>
            <van-icon name="arrow" />
          </span>
        </li>
        <li>
          <span>联系客服</span>
          <span>400-168-4000</span>
        </li>
        <li @click="tofeedback()">
          意见反馈
          <span>
            <van-icon name="arrow" />
          </span>
        </li>
        <li @click="toaboutus">
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
import axios from "axios";
import ImagePreview from "vant";

export default {
  name: "User",
  data() {
    return {
      title: "我的",
      active: 0,
      flag: "",
      mouseOver: "false",
      thespan: 0,
      show: false,
      flag2: "",
      username:'',
      
    };
  },
  mounted() {
    this.$emit("toparent", this.title);
    if (localStorage.getItem("token")) {
      this.flag = true;
    } else {
      this.flag = false;
    }
    axios.get("http://api.cat-shop.penkuoer.com/api/v1/users/info",{
      headers:{
         authorization:'Bearer ' + localStorage.getItem("token") 
      }
    }).then(res=>{
      this.username = res.data.userName
      this.$refs.userimg.src = res.data.avatar
    })
  },
  methods: {
    login() {
      this.$router.push({
        name: "login"
      });
    },

    mouseLeave() {
      this.active = "";
    },
    tocollect() {
      this.$router.push({
        name: "cang"
      })
      this.$store.commit('changeTabto1')
    },
    tofeedback() {
      this.$router.push({
        name: "feedback"
      });
    },
    alertHandle() {
      if (confirm("你想要退出登录吗？")) {
        // console.log(1)
        localStorage.removeItem("token");
      }
    },
    orderHahdle() {
      this.$router.push({
        name: "order"
      });
    },
    toaboutus(){
      this.$router.push('/aboutus')
    }, 
    topeopleChange() {
      this.$router.push({
        name: "people_change"
      });
    },
    tofoot(){
      this.$router.push({
        name:'cang'
      })
      this.$store.commit('changeTab')

    },
    change_address(){
      this.$router.push({
        name:"address_list"
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
.u-top ul {
  border-bottom: 1px solid #aaa;
  display: flex;
  justify-content: space-around;
  height: 70px;
  align-items: center;
}
.u-top span {
  color: crimson;
}

.box2,img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin: 6px auto 10px;
 
}
.active {
  background-color: darkgray;
}
</style>