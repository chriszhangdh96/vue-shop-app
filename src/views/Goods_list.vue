<template>
  <div>
    <van-nav-bar title="商品列表" left-arrow @click-left="onClickLeft" class="nav" fixed/>
    <Search></Search>
    <div class="container">
      <van-tabs v-model="active" line-width="33.3%" line-height="2px" >
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-tab title="综合">
            <ul>
              <li v-for="item in list" :key="item.id" @click="todetail(item.goods_id)">
                <img
                  :src="item.goods_small_logo?item.goods_small_logo:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1063541140,621175239&fm=26&gp=0.jpg'"
                />
                <div class="pinfo">
                  <p class="pname">{{item.goods_name}}}</p>
                  <p class="pprice">￥ {{item.goods_price}}</p>
                </div>
              </li>
            </ul>
          </van-tab>
        </van-pull-refresh>
        <van-tab title="销量">内容 2</van-tab>
        <van-tab title="价格">内容 3</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Search from "../components/Search";
export default {
  name: "Goods_list",
  data() {
    return {
      pagenumber: 1,
      active: 0,
      list: [],
      isLoading: false
    };
  },
  components: {
    Search
  },
  created() {
    axios
      .get("https://api.zbztb.cn/api/public/v1/goods/search", {
        params: {
          cid: this.$route.query.id,
          pagenumber: this.pagenumber,
        //   pagesize: 8,
        }
      })
      .then(res => {
        // console.log(res.data.message.goods);
        this.list = res.data.message.goods;
      });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onRefresh() {
         axios
      .get("https://api.zbztb.cn/api/public/v1/goods/search", {
        params: {
          cid: this.$route.query.id,
          pagenumber: this.pagenumber,
        //   pagesize: 8,
        }
      })
      .then(res => {
        // console.log(res.data.message.goods);
        this.list = res.data.message.goods;
      });
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    },
    todetail(id){
      this.$router.push({
          name:'detail',query:{id:id}
      })  
    }
  }
};
</script>
<style scoped>
ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lavender;
}

li img {
  width: 100px;
  height: 100px;
  margin-left: 10px;
}

li .pinfo {
  text-align: left;
}

.pinfo .pname {
  font-size: 14px;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pinfo .pprice {
  color: red;
}
.nav {
  background: hsl(0, 78%, 58%);
}
.container{
    overflow: auto
}
</style>