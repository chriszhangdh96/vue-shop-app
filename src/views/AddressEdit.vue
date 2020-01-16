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
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市"
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县"
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区"
          // ....
        }
      },
      searchResult: []
    };
  },

  methods: {
    onClickLeft() {
      history.go(-1);
    },
    onSave(content) {
      axios.defaults.headers.common["authorization"] = "Bearer " + localStorage.getItem('token');

      axios.put("http://api.cat-shop.penkuoer.com/api/v1/addresses/", 
        {
          receiver: content.name,
          mobile:content.tel,
          regions: content.province + "-" + content.city + "-" +content. county,
          address: content.addressDetail,
          idDefault: content.isDefault
        }
      ).then(res=>{

      })
    },
    onDelete() {
      axios.post("http://api.cat-shop.penkuoer.com/api/v1/addresses/", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(res=>{

      })
    }
  }
};
</script>

<style scoped>
</style>