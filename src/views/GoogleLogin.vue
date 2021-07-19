<template>
  <div>
    <div id="google-signin-btn"></div>
    <br>
    <button type="button" @click="signOut">Logout</button>
  </div>
</template>

<script>
export default {
  name: "GoogleLogin", //컴포넌트 이름
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
    window.gapi.signin2.render("google-signin-btn", {onsuccess: this.onSignIn});
  }, //template에 정의된 html 코드가 랜더링된 후 실행
  unmounted() {
  }, //unmount가 완료된 후 실행
  methods: {
    onSignIn (googleUser) {
      const profile = googleUser.getBasicProfile();
      console.log("ID : " + profile.getId());
      console.log("Full Name : " + profile.getName());
      console.log("ProfileImage : " + profile.getImageUrl());
      console.log("Email : " + profile.getEmail());

      const id_token = googleUser.getAuthResponse().id_token;
      console.log("ID Token : " + id_token);
    },
    signOut() {
      window.gapi.auth2.getAuthInstance().disconnect();
    }
  } //컴포넌트 내에서 사용할 메소드 정의
}
</script>

<style scoped>

</style>