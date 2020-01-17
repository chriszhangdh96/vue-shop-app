<template>
  <div>
    <van-nav-bar title="地址列表" left-text="返回" left-arrow @click-left="onClickLeft" />
 
  <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh">  
</van-pull-refresh> -->

     <!-- <van-pagination 
  v-model="currentPage" 
  :total-items="24" 
  :items-per-page="5"
/> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "address_list",
  data() {
    return {
        name:'',
        tel:'',
        address:'',
        count:0,
      chosenAddressId: "1",
      list: [],
      isLoading: false,
      // urrentPage: 1
    };
  },

  methods: {
    onClickLeft() {
      this.$router.push({
        name:'user'
      })
    },
    onAdd() {
      this.$router.push({
        name: "add_address"
      });
    },
    onEdit(item, index) {
    //   Toast("编辑地址:" + index);
        this.$router.push({
            name:'addressEdit',
            query:{
               _id:item._id
            }
        })
    },
    //  onRefresh() {
    //   setTimeout(() => {
    //     this.$toast('刷新成功');
    //     this.isLoading = false;
    //    axios.defaults.headers.common["authorization"] =
    //   "Bearer " + localStorage.getItem("token");
    // axios
    //   .get("http://api.cat-shop.penkuoer.com/api/v1/addresses", {
    //     params: {
    //       per: "14",
    //       page: "1"
    //     }
    //   })
    //   .then(res => {
    //     //   console.group('获取的地址数据')
    //     //    console.log(res.data.addresses);
    //     //  console.groupEnd()
    //     res.data.addresses.forEach(item => {
    //       axios
    //         .get(
    //           "http://api.cat-shop.penkuoer.com/api/v1/addresses/" + item._id,)
    //         .then(res => {
    //           console.log(res.data);
    //             this.list.push({
    //                 id:this.count+=1,
    //                 name:res.data.receiver,
    //                 tel:res.data.mobile,
    //                 address:res.data.address,
    //                 _id:res.data._id
    //             })
    //         });
    //     });
    //   });
    //   }, 1000);
    // }
  },
  beforeMount() {
    axios.defaults.headers.common["authorization"] =
      "Bearer " + localStorage.getItem("token");
    axios
      .get("http://api.cat-shop.penkuoer.com/api/v1/addresses", {
        params: {
          per: "14",
          page: "1"
        }
      })
      .then(res => {
        //   console.group('获取的地址数据')
        //    console.log(res.data.addresses);
        //  console.groupEnd()
        res.data.addresses.forEach(item => {
          axios
            .get(
              "http://api.cat-shop.penkuoer.com/api/v1/addresses/" + item._id,)
            .then(res => {
              console.log(res.data);
                this.list.push({
                    id:this.count+=1,
                    name:res.data.receiver,
                    tel:res.data.mobile,
                    address:res.data.address,
                    _id:res.data._id
                })
            });
        });
      });
  }
};
</script>