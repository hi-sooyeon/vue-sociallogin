<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin()">
      <img src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_narrow.png" />
    </a>
    <br>
    <button type="button" @click="kakaoLogout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "KakaoLogin", //컴포넌트 이름
  components: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      sampleData: ""
    };
  },
  setup() {
  }, //컴포지션 API
  created() {
  }, //컴포넌트가 생성되면 실행
  mounted() {
  }, //template에 정의된 html 코드가 랜더링된 후 실행
  unmounted() {
  }, //unmount가 완료된 후 실행
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: '',
        success: this.getKakaoAccount
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url:'/v2/user/me',
        success: res => {
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile.nickname;
          const email = kakao_account.email;
          console.log('nickname : ' + nickname);
          console.log('email : ' + email);

          alert("로그인 성공!!");
        },
        fail: error => {
          console.error(error);
        }
      })
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((response) => {
        console.log(response);
      });
    }
  } //컴포넌트 내에서 사용할 메소드 정의
}
</script>

<style scoped>

</style>