<template>
  <div class="reg">
    <div class="reg-top">
      注册
    </div>
    <div class="reg-reg">
      <form>
        <!-- 邮箱 -->
        <div class="reg-">
          <div class="reg-t">
            <div class="reg-bor" ref="myuser">
              <input
                class="reg-text"
                type="text"
                v-model="username"
                placeholder="请输入邮箱地址"
                @input="username1"
                @blur="username2"
                @focus="username3"
              />
            </div>
            <!-- 后缀 -->
            <div class="reg-sel" @click="opflag()">
              <input type="text" v-model="value" />
              <div class="reg-op" v-show="isflag">
                <div
                  v-for="item in option"
                  :key="item.value"
                  class="reg-sel-op"
                  @click="regOp(item.text)"
                >
                  {{ item.text }}
                </div>
              </div>
            </div>
          </div>
          <div class="reg-text-err">{{ usercount }}</div>
        </div>
        <!-- 密码 -->
        <div>
          <div class="reg-bor" ref="mypass">
            <input
              class="reg-word"
              type="password"
              v-model="password"
              placeholder="请输入位6-12位数字密码"
              @input="password1"
              @blur="password2"
              @focus="password3"
            />
          </div>
          <div class="reg-word-err">{{ passcount }}</div>
        </div>
        <!-- 注册 -->
        <div class="reg-b">
          <input
            class="reg-btn"
            @click="loginBtn()"
            type="button"
            value="下一步"
          />
        </div>
        <div class="reg-p">
          <p>已有账号？<strong @click="login()">去登陆</strong></p>
        </div>
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
      isflag: false,
      value: "@163.com",
      usercount: "",
      passcount: "",

      option: [
        { text: "@163.com", value: 0 },
        { text: "@126.com", value: 1 },
        { text: "@yarh.net", value: 2 }
      ]
    };
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    opflag() {
      this.isflag = !this.isflag;
    },
    regOp(val) {
      this.value = val;
    },
    username1() {
      if (this.username == "") {
        this.usercount = "请输入正确账号";
      } else {
        this.$refs.myuser.style = "border-color:#ccc";
        this.usercount = "";
      }
    },
    username2() {
      this.$refs.myuser.style = "border-color:#ccc";
      if (/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
      } else {
        this.usercount = "请输入正确账号";
        this.$refs.myuser.style = "border-color:red";
      }
    },
    username3() {
      this.$refs.myuser.style = "border-color:yellow";
      if ((this.usercount = "请输入正确账号")) {
        this.usercount = "";
        this.$refs.mypass.style = "border-color:#ccc";
        this.passcount = "";
      }
    },
    password1() {
      if (this.password == "") {
        this.passcount = "请输入正确密码";
      } else {
        this.$refs.mypass.style = "border-color:#ccc";
        this.passcount = "";
      }
    },
    password2() {
      this.$refs.mypass.style = "border-color:#ccc";
      if (/^[0-9]{6,12}$/.test(this.password)) {
      } else {
        this.passcount = "请输入正确密码";
        this.$refs.mypass.style = "border-color:red";
      }
    },
    password3() {
      this.$refs.mypass.style = "border-color:yellow";
      if ((this.passcount = "请输入正确密码")) {
        this.passcount = "";
        this.$refs.myuser.style = "border-color:#ccc";
        this.usercount = "";
      }
    },
    loginBtn() {
      if (
        /^[0-9]{6,12}$/.test(this.password) &&
        /^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)
      ) {
        let data = {
          userName: this.username,
          password: this.password,
          avatar:
            "http://pic.sogou.com/pics/recommend?category=%E6%90%9E%E7%AC%91&imageid=490864#%E6%90%9E%E7%AC%91%E4%BA%BA%E7%89%A9",
          nickName: "搞笑来了"
        };
        axios
          .post("http://api.cat-shop.penkuoer.com/api/v1/auth/reg", data)
          .then(res => {
            // console.log(res);
            if (res.data.code == "success") {
              Dialog.alert({
                message: "注册成功"
              }).then(() => {
                // on close
                this.$router.push({
                  name: "login"
                });
              });
            } else {
              Dialog.alert({
                message: res.data.message
              }).then(() => {});
            }
          });
      } else {
        if (
          /^[0-9]{6,12}$/.test(this.password) ||
          /^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)
        ) {
          if (
            /^[0-9]{6,12}$/.test(this.password) &&
            !/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)
          ) {
            this.usercount = "请输入正确账号";
            this.$refs.myuser.style = "border-color:red";
          }
          if (
            /^[1][3,4,5,7,8][0-9]{9}$/.test(this.username) &&
            !/^[0-9]{6,12}$/.test(this.password)
          ) {
            this.passcount = "请输入正确密码";
            this.$refs.mypass.style = "border-color:red";
          }
        } else {
          this.$refs.myuser.style = "border-color:red";
          this.$refs.mypass.style = "border-color:red";
          this.usercount = "请输入正确账号";
          this.passcount = "请输入正确密码";
        }
      }

      /* if (this.username == "" || this.password == "") {
        this.usercount = "请输入正确账号";
        this.$refs.myuser.style = "border-color:red";
        this.passcount = "密码由6-12位数字组成，没有英文";
          this.$refs.mypass.style = "border-color:red";
      } else {

        if (this.password == "") {
          this.passcount = "密码由6-12位数字组成，没有英文";
          this.$refs.mypass.style = "border-color:red";
        } else {
          
        }
      } */
    },
    login() {
      this.$router.push({
        name: "login"
      });
    }
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
}
.reg {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.reg-reg {
  padding: 50px 0 30px 0;
}
form {
  width: 345px;
  height: 240px;
  display: flex;
  flex-direction: column;
}
.reg-top {
  height: 46px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #aaa;
  line-height: 46px;
}
.reg-text,
.reg-sel,
.reg-word,
.reg-btn {
  height: 44px;
  font-size: 14px;
}
.reg-text-err,
.reg-word-err {
  width: 317px;
  height: 24px;
  margin: 2px 0 0 0;
  font-size: 10px;
  color: red;
  text-align: left;
  padding-left: 5px;
}

.reg- {
  display: flex;
  flex-direction: column;
}
.reg-t {
  display: flex;
  justify-content: space-between;
}
.reg-bor {
  border: 1px solid #ccc;
  border-radius: 2px;
  height: 44px;
}
.reg-text {
  width: 178px;
  padding: 0 16px 0 10px;
  border: none;
  outline: none;
}
.reg-sel input {
  width: 125px;
  border: none;
  height: 44px;
  border-bottom: 1px solid #ccc;
  line-height: 44px;
  text-align: center;
}
.reg-sel-op {
  width: 124px;
  height: 44px;
  line-height: 46px;
  border: 1px solid #ccc;
  background: #fff;
}
.reg-op {
  position: absolute;
  top: 45px;
  left: -1px;
}
.reg-sel {
  width: 125px;
  border: 1px solid #ccc;
  border-radius: 2px;
  position: relative;
}
.reg-word {
  width: 317px;
  padding: 0 16px 0 10px;
  border-radius: 2px;
  border: none;
  outline: none;
}
.reg-btn {
  width: 345px;
  border: none;
  outline: none;
  background: dodgerblue;
  border-radius: 2px;
}
.reg-b {
  font-size: 14px;
  font-weight: 700;
  border: none;
  color: #fff;
  margin: 10px 0 0 0;
}
.reg-p {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  font-size: 14px;
  color: #333;
}
.reg-p strong {
  color: #2c82ff;
}
.reg-text-err,.reg-word-err{
  font-size:12px;
  line-height: 24px;
}
</style>