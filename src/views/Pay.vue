<template>
  <div>
    <van-nav-bar
      title="结算"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
    <div class="goodsUser">
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
          :num="item.num"
          v-for="item in list" 
          :key="item.id"
          :price="item.price"
          :title="item.title"
          :desc="item.desc"
          :thumb="item.thumb"
        />
      </div>
    </div>
    <div class="goodsSubmit">
      <van-submit-bar :price="3050" button-text="支付" @submit="onSubmit" />
    </div>
  </div>
</template>
<script>
export default {
  created(){
    let carts =localStorage.parse(localStorage.getItem('car')) 
    let token = localStorage.getItem('token')
    console.log(carts,token)
  }
  ,
  data() {
    return {
      list: [
       
      ],
      username: "张三",
      address: "四海为家，不用送了",
      orderNumber: "100-1000"
    };
  },

  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onSubmit() {}
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
  margin-top:46px;
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
.goosProductes{
  height:100%;
}
.goosProductes>div{
  overflow:auto;height:100%;
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
</style>