<template>
  <div>
    <div class="father">
      <van-icon class="toback" name="arrow-left" size="25px" @click="goback" />
      <div class="order_title">订单页面</div>
    </div>

    <div>
      <van-tabs
        v-model="active"
        line-width="25%"
        line-height="2px"
        sticky
        title-active-color="#ee0a24"
        
      >
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" >
          <van-tab title="全部">
            <div>
              <ul class="list">
                <li v-for="(item,index) in list" :key="index">
                  <div>
                    <span>订单编号</span>
                    <span>{{item.num}}</span>
                  </div>
                  <div>
                    <span>订单价格</span>
                    <span class="clo">{{item.price}}</span>
                  </div>
                  <div>
                    <span>订单日期</span>
                    <span>{{item.data}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </van-tab>
        </van-pull-refresh>
        <van-tab title="代付款">内容 2</van-tab>
        <van-tab title="代发货">内容 3</van-tab>
        <van-tab title="退款/退货">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Order",
  data() {
    return {
      active: 0,
      clo: "",
      list: [
        {
          data: "2018.5.02",
          id: 1,
          num: 12354645877855,
          price: "￥1339.8"
        },
        {
          data: "订单2018.5.02号",
          id: 2,
          num: 22354645877855,
          price: "￥339.8"
        },
        {
          data: "2018.5.02",
          id: 3,
          num: 32354645877855,
          price: "￥11"
        },
        {
          data: "2018.5.02",
          id: 4,
          num: 42354645877855,
          price: "￥139"
        }
      ],
      isLoading: false
    }
  },
  created() {
    // axios.get("https://api.zbztb.cn/api/public/v1/my/orders/all").then(res => {
    //   console.log(res.data);
    //   console.log(1);
    //   this.list = res.data;
    // });

  },
  methods: {
    changeClo() {
      this.clo = !this.clo;
    },
    goback() {
      this.$router.go(-1);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        
      },500);
    }
  }
};
</script>
<style scoped>
.order_title {
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: rgb(236, 84, 84);
  margin: 0;
  line-height: 44px;
}
.active {
  color: darkred;
}
.toback {
  position: absolute;
  top: 0.6rem;
  left: 0.3rem;
}
.father {
  position: relative;
}
.list {
  margin-top: 10px;
  margin: 0 22px;
}
.list li {
  border-bottom: 1px solid #eee;
}
.list li div {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
}
.list li div:nth-child(1) {
  padding-top: 10px;
}
.clo {
  color: rgb(224, 11, 11);
}
</style>