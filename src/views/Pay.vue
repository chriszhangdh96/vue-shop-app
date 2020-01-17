<template>
  <div>
    <van-nav-bar
      title="结算"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="goodsUser" @click="addressEdit">
      <div>
        <p>收货人：{{ username }}</p>
        <p>{{ address }}</p>
      </div>
      <span>{{ orderNumber }}</span>
    </div>
    <div class="goodsCart">
      购物车
    </div>
    <div class="goosProductes">
      <div>
        <van-card
          :num="item.count"
          v-for="item in list"
          :key="item.id"
          :price="item.price"
          :title="item.pname"
          :thumb="item.pimg"
        />
      </div>
    </div>
    <div class="goodsSubmit">
      <span>合计</span>
      <span>¥：{{$store.getters.getgoodscountandmount.amout}}</span>
      <van-button type="danger">支付({{$store.getters.getgoodscountandmount.count}})</van-button>
      <!-- <van-submit-bar  :price="$store.getters.getgoodscountandmount.amout" button-text="支付" @submit="onSubmit" /> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Dialog } from "vant";
export default {
  created() {
    let carts = JSON.parse(localStorage.getItem("topaylist"));
    let token = localStorage.getItem("token");
    console.log(carts);
    axios
      .get("http://api.cat-shop.penkuoer.com/api/v1/users/info", {
        headers: {
          authorization: "Bearer " + token
        }
      })
      .then(res => {
        console.log(res);
        this.username = res.data.userName;
      });
    this.list = carts;

    this.orderNumber =
      parseInt(Math.random() * 1000) + "-" + parseInt(Math.random() * 100000);
    /* this.price = carts.forEach(item =>{
      let goodsPrice = item.count * item.price
    }) */
  },
  data() {
    return {
      list: [],
      username: "",
      address: "四海为家，不用送了",
      orderNumber: ""
    };
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    onSubmit() {
      Dialog.alert({
        message: "支付成功"
      }).then(() => {});
    },
    addressEdit(){
      this.$router.push({
        name:'address_list'
      })
    }
  }
};
</script>
<style scoped>
.van-nav-bar van-hairline--bottom {
  background: red;
}
.goodsUser p {
  margin: 0;
  padding: 0;
}
.goodsUser {
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid red;
}

.goodsUser p {
  text-align: left;
  box-sizing: border-box;
  padding-left: 10px;
}
.goodsUser > span {
  text-align: right;
  box-sizing: border-box;
  padding-right: 10px;
}
.goosProductes {
  height: 100%;
}
.goosProductes > div {
  overflow: auto;
  height: 100%;
}
.goodsCart {
  height: 50px;
  border-bottom: 2px solid red;
  height: 50px;
  line-height: 50px;
  font-size: 24px;
}
.goodsUser > div p {
  height: 25px;
  line-height: 25px;
  font-size: 14px;
}
.van-card__content > div:nth-child(1) {
  text-align: left;
}
.van-card__content > div:nth-child(1) div:nth-child(1) {
  font-size: 16px;
  margin-bottom: 5px;
  height: 20px;
  line-height: 20px;
}

.van-card__price > div span {
  font-size: 20px;
  color: red;
}
.van-card__price-currency {
  padding-right: 5px;
}
.van-card__num {
  font-size: 20px;
}
.van-card__price {
  float: left;
}
.goodsSubmit {
  position: fixed;
  bottom: 0px;
  width: 100%;
  text-align: right;
  background: #eee;
}
.goodsSubmit > div {
  width: 100px;
}
.goodsSubmit span:nth-child(1) {
  font-size: 18px;
}
.goodsSubmit span:nth-child(2) {
  color: red;
  padding: 0 10px 0 10px;
}
</style>