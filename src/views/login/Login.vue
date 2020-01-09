<template>
  <div class="login">
    <div class="log-top">
      登录
    </div>
    <div class="log-log">
      <form>
        <!-- 账号 -->
        <div class="log-account">
          <div>
            <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
          </div>
          <input type="text" placeholder="请输入账号" />
          <div><van-icon name="cross" /></div>
        </div>
        <!-- 密码 -->
        <div class="log-pw">
          <div><van-icon name="desktop-o" /></div>
          <input type="text" placeholder="请输入密码" />
          <div><van-icon name="cross" /></div>
          <div><van-icon name="eye-o" /></div>
          <div><van-icon name="closed-eye" /></div>
        </div>

        <div class="log-verify">
          <!-- 验证 -->
          <div>
            <div><van-icon name="lock" /></div>
            <div>点击验证完成</div>
          </div>
          <!-- 错误提示 -->
          <div>请输入正确的账户或密码</div>
        </div>
        <!-- 登录 -->
        <div class="log-btn">
          <input type="button" value="登录" />
        </div>
        <div class="log-p">
          <van-checkbox v-model="checked" shape="square"></van-checkbox>
          <p>同意并遵守<a>《服务条款》</a>和<a>《隐私条例》</a></p>
        </div>
        <div @click="reg()" class="log-ve">忘记密码？</div>
        <div class="log-ac">还没有账号？<a @click="reg()">免费注册</a></div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Field } from "vant";
import { Icon } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      checked: false
    };
  },
  methods: {
    reg() {
      this.$router.push({
        name: "reg"
      });
    }
  }
};
</script>

<style scoped>
.log-top {
  height: 44px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
  line-height: 46px;
}

.log-log {
  height: 458px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.log-account,.log-pw,.log-verify>div:nth-child(1) {
  position: relative;
}
.log-account input,.log-pw input {
  width: 271px;
  height: 18px;
  padding: 15px 32px 15px 40px;
}
.log-account div:nth-child(1), .log-pw div:nth-child(1){
  position: absolute;
  left:12px;
  top:15px;
  font-size:20px;
}
.log-account div:nth-child(3) {
  position: absolute;
  top:15px;
  right:20px;
  font-size:16px;
  color:#aaa;
}


.log-pw div:nth-child(3),.log-pw div:nth-child(4),.log-pw div:nth-child(5){
position: absolute;
  top:15px;
  right:50px;
  font-size:16px;
  color:#aaa;
}
.log-pw div:nth-child(4),.log-pw div:nth-child(5){
  right:20px;
}

.log-verify>div:nth-child(1) div:nth-child(1) {
position: absolute;
left:100px;
font-size:18px;

}
.log-verify>div:nth-child(2){
  text-align: left;
}
.log-btn {
  width:300px;height:30px;
}
.log-p{
  
}

.log-ve {
}
.log-ac {
}
</style>