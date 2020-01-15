<template>
  <div class="login">
    <div class="log-top">
      <span @click="Index()">
        <van-icon name="arrow-left" />
      </span>
      <span>登录</span>
    </div>
    <div class="log-log">
      <form>
        <!-- 账号 -->
        <div class="log-account" ref="myuser">
          <div>
            <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
          </div>
          <input
            type="text"
            placeholder="请输入账号"
            @input="userwrite()"
            v-model="username"
          />
          <div v-show="isuserflag" @click="cluser()">
            <van-icon name="cross" />
          </div>
        </div>
        <!-- 密码 -->
        <div class="log-pw" ref="mypass">
          <div><van-icon name="desktop-o" /></div>
          <input
            v-bind:type="type"
            placeholder="请输入6-12位数字密码"
            @input="passwrite()"
            v-model="password"
          />
          <div v-show="ispassflag" @click="clpass()">
            <van-icon name="cross" />
          </div>
          <div v-show="iseyeflag" @click="iseyeflags()">
            <van-icon name="eye-o" />
          </div>
          <div v-show="!iseyeflag" @click="iseyeflags()">
            <van-icon name="closed-eye" />
          </div>
        </div>

        <div class="log-verify">
          <!-- 验证 -->
          <div @click="ver()" :style="styleVer">
            <div v-show="!verflag">
              <van-icon name="lock" size="large" block="true" />
            </div>
            <div v-show="verflag">
              <van-icon name="success" size="large" block="true" />
            </div>
            <div>{{ verify }}</div>
          </div>
          <!-- 错误提示 -->
          <div :style="styleErr">{{ errCount }}</div>
        </div>
        <!-- 登录 -->
        <div class="log-btn" @click="logBtn()">
          <van-button type="info" block>登录</van-button>
        </div>
        <div class="log-p">
          <van-checkbox
            icon-size="14px"
            v-model="checked"
            shape="square"
          ></van-checkbox>
          <p>
            同意并遵守<a>&nbsp;《服务条款》</a> 和&nbsp;<a @click="ax"
              >《隐私条例》</a
            >
          </p>
        </div>
        <div @click="reg()" class="log-ve">忘记密码？</div>
        <div class="log-ac">还没有账号？<a @click="reg()">免费注册</a></div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Dialog } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      checked: false,
      isuserflag: false,
      ispassflag: false,
      iseyeflag: false,
      type: "password",
      flag: false,
      verflag: false,
      verify: "点击通过验证",
      styleVer: {
        color: "",
        background: ""
      },
      styleErr: {
        display: "none"
      },
      errCount: "请输入账号和密码"
    };
  },
  methods: {
    Index() {
      this.$router.push({
        name: "index"
      });
    },
    ax() {
      axios
        .get("http://api.cat-shop.penkuoer.com//api/v1/users/info", {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then(res => {
          console.log(res);
        });
    },
    reg() {
      this.$router.push({
        name: "reg"
      });
    },
    userwrite() {
      if (this.username == "") {
        this.isuserflag = false;
      } else {
        if (this.username.length >= 1) {
          this.isuserflag = true;
        }
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    passwrite() {
      if (this.password == "") {
        this.ispassflag = false;
      } else {
        if (this.password.length >= 1) {
          this.ispassflag = true;
        }
      }
    },
    iseyeflags() {
      if (this.type == "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
      this.iseyeflag = !this.iseyeflag;
    },
    ver() {
      if (
        /^[1][3,4,5,7,8][0-9]{9}$/.test(this.username) &&
        /^[0-9]{6,12}$/.test(this.password)
      ) {
        this.verflag = true;
        this.verify = "验证完成";
        this.styleVer.color = "green";
        this.styleVer.background = "#eee";
      } else {
        this.styleErr.display = "block";
        this.errCount = "请确认账号与密码正确之后，再进行验证";
      }
    },
    logBtn() {
      if (
        /^[1][3,4,5,7,8][0-9]{9}$/.test(this.username) &&
        /^[0-9]{6,12}$/.test(this.password)
      ) {
        if (!this.verflag) {
          this.styleErr.display = "block";
          this.errCount = "请点击验证";
        } else {
          if (!this.checked) {
            this.styleErr.display = "block";
            this.errCount = "请勾选服务条例";
          } else {
            let data = {
              userName: this.username,
              password: this.password
            };
            axios
              .post("http://api.cat-shop.penkuoer.com/api/v1/auth/login", data)
              .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                if (res.data.code == "success") {
                  Dialog.alert({
                    message: "登录成功"
                  }).then(() => {
                    // on close
                    this.$router.push({
                      name:"index"
                    });
                  });
                } else {
                  Dialog.alert({
                    message: res.data.message
                  }).then(() => {});
                }
              });
          }
        }
      } else {
        if (
          /^[1][3,4,5,7,8][0-9]{9}$/.test(this.username) ||
          /^[0-9]{6,12}$/.test(this.password)
        ) {
          if (
            /^[0-9]{6,12}$/.test(this.password) &&
            !/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)
          ) {
            this.styleErr.display = "block";
            this.errCount = "请输入正确账号";
            this.$refs.myuser.style = "border-color:red";
          }
          if (
            /^[1][3,4,5,7,8][0-9]{9}$/.test(this.username) &&
            !/^[0-9]{6,12}$/.test(this.password)
          ) {
            this.styleErr.display = "block";
            this.errCount = "请输入正确密码";
            this.$refs.mypass.style = "border-color:red";
          } else {
          }
        } else {
          this.styleErr.display = "block";
          this.errCount = "请输入正确账号和密码";
          this.$refs.myuser.style = "border-color:red";
          this.$refs.mypass.style = "border-color:red";
        }
      }
    },
    cluser() {
      this.username = "";
      this.isuserflag = !this.isuserflag;
    },
    clpass() {
      this.password = "";
      this.ispassflag = !this.ispassflag;
    }
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
}
.log-top {
  height: 44px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
  line-height: 46px;
  margin-bottom: 12px;
  position: relative;
}
.log-top span:nth-child(1) {
  position: absolute;
  left: 40px;
  font-size: 18px;
}
form {
  width: 365px;
  height: 425px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.log-log {
  height: 458px;
  display: flex;
  justify-content: center;
}

.log-account,
.log-pw,
.log-verify > div:nth-child(1) {
  position: relative;
}
.log-account input,
.log-pw input {
  width: 271px;
  height: 18px;
  padding: 15px 32px 15px 40px;
  border: none;
  outline: none;
}
.log-account,
.log-pw {
  border: 1px solid #ccc;
  border-radius: 3px;
}
.log-account div:nth-child(1),
.log-pw div:nth-child(1) {
  position: absolute;
  left: 12px;
  top: 15px;
  font-size: 20px;
}
.log-account div:nth-child(3) {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 16px;
  color: #aaa;
}

.log-pw div:nth-child(3),
.log-pw div:nth-child(4),
.log-pw div:nth-child(5) {
  position: absolute;
  top: 15px;
  right: 50px;
  font-size: 16px;
  color: #aaa;
}
.log-pw div:nth-child(4),
.log-pw div:nth-child(5) {
  right: 20px;
}
.log-verify {
  display: flex;
  flex-direction: column;
}
.log-verify > div:nth-child(1) {
  background: #ccc;
  height: 38px;
  line-height: 38px;
  color: #45454c;
  border-radius: 3px;
}
.log-verify > div:nth-child(1) div {
  position: absolute;
  left: 110px;
  font-size: 18px;
  top: 3px;
}
.log-verify > div:nth-child(1) div:nth-child(3) {
  position: static;
  font-size: 14px;
}
.log-verify > div:nth-child(2) {
  text-align: left;
  margin: 0;
  font-size: 14px;
  color: red;
  margin-top: 10px;
}
.log-verify > div {
  width: 347px;
}
.log-p,
.log-ve,
.log-ac {
  width: 347px;
}
.log-btn {
  width: 347px;
  height: 44px;
}
.log-p {
  display: flex;
}
.log-p p {
  margin: 0;
  margin-left: 10px;
}
.log-p p a {
  color: #4470d0;
}
.log-ve {
  text-align: right;
  color: #4470d0;
}
.log-ac,
.log-ve,
.log-p {
  font-size: 14px;
}
.log-ac a {
  color: #4470d0;
}
</style>