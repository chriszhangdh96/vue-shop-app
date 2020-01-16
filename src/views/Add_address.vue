<template>
  <div>
    <van-nav-bar title="地址添加" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>
<script>
import area from "../store/area";
import axios from "axios";
export default {
  name: "Add_address",
  data() {
    return {
      areaList: area
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSave(content) {
        axios.defaults.headers.common["authorization"] = "Bearer " + localStorage.getItem('token');
      axios
        .post("http://api.cat-shop.penkuoer.com/api/v1/addresses", {
            receiver: content.name,
            mobile: content.tel,
            regions: content.province - content.city - content.county,
            address: content.addressDetail,
            idDefault: content.false
          
        })
        .then(res => {
          console.log(res.data)  
          this.$router.push({
            name: "address_list"
          });
        });
     
    },
    onDelete() {
    //   axios.post("http://api.cat-shop.penkuoer.com/api/v1/addresses/:id",{
    //       headers:{
    //           authorization: 'Bearer ' + localStorage.getItem("token")
    //       }
    //   }).then(res=>{
    //       console.log(res.data)
    //   })
    }
  }
};
</script>