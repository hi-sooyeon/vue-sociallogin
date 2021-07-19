<template>
  <div>
    <div id="naverIdLogin">
<!--      <img src="https://cdn.discordapp.com/attachments/861495816728608792/866698892116754442/btnG_.png" />-->
    </div>
    <button type="button" @click="logout">Logout</button>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config.yaml";
export default {
  name: "NaverLogin", //컴포넌트 이름
  components: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  inject: ['config'],
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      naverIdLogin: null
    };
  },
  setup() {
  }, //컴포지션 API
  created() {
  }, //컴포넌트가 생성되면 실행
  mounted() {
    this.naverLogin =  new window.naver.LoginWithNaverId({
      clientId: `${config.naverkey}`,
      callbackUrl: "http://localhost:8080/naverlogin",
      isPopup: false,
      loginButton : {
        color: "green", type : 3, height:60
      },
    });

    //설정 정보를 초기화하고 연동을 준비
    this.naverLogin.init();

    this.naverLogin.getLoginStatus((status) => {
      if(status) {
        console.log(status);
        console.log(this.naverLogin.user);

        //필수적으로 받아야 하는 프로필 정보가 있다면 callback 처리 시점에 체크
        var email = this.naverLogin.user.getEmail();
        if(email == undefined || email == null) {
          alert("이메일은 필수 정보입니다. 정보 제공을 동의해주세요.")
          //사용자 정보 재동의를 위하여 다시 네아로 동의 페이지로 이동함
          this.naverLogin.reprompt();
          return;
        }
      } else {
        console.log("callback 처리에 실패하였습니다.")
      }
    });
  }, //template에 정의된 html 코드가 랜더링된 후 실행
  unmounted() {
  }, //unmount가 완료된 후 실행
  methods: {
    logout() {
      const accessToken = this.naverLogin.accessToken.accessToken;
      const url=`/oauth2.0/token?grant_type=delete&client_id=${config.naverkey}&client_secret=${config.naversecret}&access_token=${accessToken}&service_provider=NAVER`;
      axios.get(url).then((res) => {console.log(res.data);});

    }
  } //컴포넌트 내에서 사용할 메소드 정의
}
</script>

<style scoped>

</style>