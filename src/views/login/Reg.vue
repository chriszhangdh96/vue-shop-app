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
            <div class="reg-bor">
              <input
                class="reg-text"
                type="text"
                v-model="username"
                placeholder="请输入邮箱地址"
              />
            </div>
            <!-- 后缀 -->
            <div class="reg-sel">
              <input type="text" v-model="value" @click="flag()" />
              <div
                class="reg-op"
                v-show="isflag"
              >
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
          <div class="reg-bor">
            <input
              class="reg-word"
              type="password"
              v-model="password"
              placeholder="请输入8-16位密码"
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

export default {
  data() {
    return {
      username: "",
      password: "",
      isflag: true,
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

  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    flag() {
      this.isflag = !isflag;
    },
    regOp(val) {
      this.value = val;
    },
    loginBtn() {
      if (this.username == "") {
        this.usercount = "请输入正确邮箱";
      } else {
        if (this.password == "") {
          this.passcount = "密码由8-16为字符组成，区分大小写";
        } else {
          let data = {
            userName: this.username,
            password: this.password,
            avatar:
              "http://pic.sogou.com/pics/recommend?category=%E6%90%9E%E7%AC%91&imageid=490864#%E6%90%9E%E7%AC%91%E4%BA%BA%E7%89%A9",
            nickName: "搞笑"
          };
          axios
            .post("http://api.cat-shop.penkuoer.com/api/v1/auth/reg", data)
            .then(res => {
              // console.log(res);
              if (res.data.code == "success") {
                this.$router.push({
                  name: "login"
                });
              } else {
                console.log("注册失败");
              }
            });
        }
      }
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
html,body{
  height:100%
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
  top: 48px;
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
</style>