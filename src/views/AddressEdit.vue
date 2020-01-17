<template>
  <div>
    <div>
      <van-nav-bar
        title="地址修改"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div>
      <van-address-edit
        :area-list="areaList"
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        isDefault
        :address-info="AddressInfo"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import area from "../store/area";
export default {
  data() {
    return {
      id: "",
      areaList: area,
      searchResult: [],
      AddressInfo: {}
    };
  },
  created() {
    let data = this.$route.query._id;
    this.id = data;
    axios
      .get("http://api.cat-shop.penkuoer.com/api/v1/addresses/" + data, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then(res => {
        console.log(res.data);
       this.AddressInfo={
         name:res.data.receiver,
         tel:res.data.mobile,
         province:'',
         city:'',
         country:'',
         addressDetail:res.data.address,
         postalCode:'',
         areaCode:''
       }
      });
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    onSave(content) {
      console.log(this.AddressInfo);
      axios.defaults.headers.common["authorization"] =
        "Bearer " + localStorage.getItem("token");
      axios
        .put("http://api.cat-shop.penkuoer.com/api/v1/addresses/" +  this.id, {
          receiver: content.name,
          mobile: content.tel,
          regions: content.province + "-" + content.city + "-" + content.county,
          address: content.addressDetail,
          idDefault: content.isDefault
        })
        .then(res => {
          this.$router.push({
            name: "address_list"
          });
        });
    },
    onDelete(content) {
      console.log(this.id)
      axios
        .post("http://api.cat-shop.penkuoer.com/api/v1/addresses/" + this.id, {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then(res => {
          this.$router.push({
            name: "address_list"
          });
        });
    }
  }
};
</script>

<style scoped>
</style>