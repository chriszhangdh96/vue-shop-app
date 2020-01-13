<template>
  <div class="fd">
    <div class="fd-top">
      <van-nav-bar title="意见反馈" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="fd-nav">
      <div>
        <van-tabs @click="onClick" line-width="50%" line-height="1px">
          <van-tab title="体验问题">
            <div class="fd-one">
              <p>&nbsp; 问题的种类&nbsp;</p>
              <div>
                <span>问题种类</span>
                <span>种类</span>
                <span>问题种类类</span>
                <span>问题种类</span>
              </div>
            </div>

            <div class="fd-leave">
              <div>
                <van-cell-group>
                  <van-field
                    v-model="message"
                    rows="6"
                    autosize
                    type="textarea"
                    maxlength="500"
                    placeholder="请输入留言"
                    show-word-limit
                  />
                </van-cell-group>
              </div>
            </div>
            <div class="fd-sub">
              <div>
                <van-uploader
                  v-model="fileList"
                  multiple
                  preview-size="50px"
                />
              </div>
            </div>
            <div class="fd-den" @click="sub">
              <div >
                <van-button type="danger">提交</van-button>
              </div>
            </div>
          </van-tab>
          <van-tab title="商品、商家投诉">商品、商家投诉</van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      active: 2,
      message: "请输入反馈意见",
      fileList: [
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      ]
    };
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "user"
      });
    },
    sub(){
      axios.get('https://images.ac.cn/Home/Index/UploadAction/',{

      }).then(res=>{
        console.log(res)
      })
    }
    ,
    onClick() {}
  }
};
</script>

<style scoped>
html,body{
  height:100%
}
#app{
  height:100%
}
.fd {
  background: #eee;
  height:100%;
  display: flex;
  flex-direction: column;
}

.fd-top > div {
  background: crimson;
}
.van-nav-bar>div:nth-child(2){
  color:#fff;
}
.fd-top i{
color:#fff;
}
.fd-one {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
}
.fd-one p {
 width:100%;
  font-size: 14px;
  color: #666;
 text-align: left;
}
.fd-one div {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.fd-one div span {
  display: block;
  width: 28%;
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  color: #666;
  background:#fff;
  margin-bottom: 20px;
}
.fd-leave {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fd-leave > div {
  width: 90%;
}
.van-tabs__content .van-tab__pane{
  display: flex;
  flex-direction: column;
  align-content: space-between;
}
.fd-nav {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;background: #eee;
}
.fd-nav > div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: space-around;
}
.fd-sub {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.fd-sub > div {
  width: 90%;
  height: 60px;
  background: #fff;
  text-align: left;
  padding-top: 10px;
}
.fd-sub > div .van-uploader .van-uploader .van-uploader__upload,
.van-uploader__preview {
  margin: 0px;
}
.fd-den div{
  width:90%;
}
.fd-den {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: right;
  margin-top:15px;
}
.van-button--normal{
  padding:0 25px;
}
</style>