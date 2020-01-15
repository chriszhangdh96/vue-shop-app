<template>
  <div>
    <van-nav-bar title="我是设置页面" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="p_list">
      <ul>
        <li @click="changeP">
          切换账号
          <span>
            <van-icon name="arrow" />
          </span>
        </li>

        <li @click="pp">
          <van-dialog v-model="show" title="标题" show-cancel-button>
            <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
          </van-dialog>退出
          <span>
            <van-icon name="arrow" />
          </span>
        </li>
        <!-- <li @click="changeName">
          更改名称
          <span>
            <van-icon name="arrow" />
          </span>
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";

export default {
  name: "people_change",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    changeP() {
      this.$router.push({
        name: "login"
      });
    },
    pp() {
      Dialog.confirm({
        message: "你确定要退出吗？亲"
      })
        .then(() => {
         localStorage.removeItem('token')
             this.$router.push({
                 name:'login'
             })

        })     
        
    },
    
  },
  data() {
    return {
      show: false
    };
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  }
};
</script>
<style scoped>
li {
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 0 5%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e3eaf1;
}
</style>