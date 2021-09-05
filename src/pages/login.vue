<template>
  <div class="w-login w-flex">
    <div class="w-login-content">
      <h2>中福商超后台管理系统</h2>
      <div id="login_container"></div>
    </div>
  </div>
</template>

<script>
  import LoginModel from '@/http/model/login'
  export default {
    name: 'login',
    data() {
      return {

      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {

        var obj = DDLogin({
          id: "login_container",//这里需要你在自己的页面定义一个HTML标签并设置id，例如<div id="login_container"></div>或<span id="login_container"></span>
          goto: encodeURIComponent(`https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${process.env.VUE_APP_APPID}&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=${process.env.VUE_APP_API}/api/zfsh/dingding/scanCodeLogin`), //请参考注释里的方式
          style: "border:none;background-color:#FFFFFF;",
        })
        // redirect_uri：http://{地址单独给}/api/zfsh/dingding/scanCodeLogin

        var handleMessage = function (event) {
          var origin = event.origin;
          console.log("origin", event.origin);
          if (origin == "https://login.dingtalk.com") { //判断是否来自ddLogin扫码事件。
            var loginTmpCode = event.data;
            //获取到loginTmpCode后就可以在这里构造跳转链接进行跳转了
            // window.location.href = `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${process.env.VUE_APP_APPID}&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=${process.env.VUE_APP_API}/api/zfsh/dingding/scanCodeLogin&loginTmpCode=${loginTmpCode}`
            console.log("loginTmpCode", loginTmpCode);
          }
        };
        if (typeof window.addEventListener != 'undefined') {
          window.addEventListener('message', handleMessage, false);
        } else if (typeof window.attachEvent != 'undefined') {
          window.attachEvent('onmessage', handleMessage);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .w-login {
    height: 100%;
    background-image: url('/img/login_bg.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    align-items: center;
    justify-content: center;

    .w-login-content {
      width: 460px;

      h2 {
        font-size: 40px;
        color: #fff;
        margin-bottom: 45px;
      }
    }
  }
</style>