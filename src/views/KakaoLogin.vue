<template>
  <div >
    <a id="custom-login-btn" @click="kakaoLogin()">
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="222"
      />
    </a>
    </div>
</template>
<script>
// import axios from 'axios'

export default {
  components: {
  },
  data() {
    return {
      code:"",
    };
  },
  mounted() {
    // Kakao.init('c2875030d590c5acc4f04aa15597bab4');
    // Kakao.isInitialized();
    this.kakaoLogout();
  },
  methods: {
    kakaoLogin() {
        window.Kakao.Auth.login({
            scope : 'profile, account_email',
            success: this.getKakaoAccount,
        });
    },
    getKakaoAccount(){
        window.Kakao.API.request({
            url:'/v2/user/me',
            success : res => {
                const kakao_account = res.kakao_account;
                const nickname = kakao_account.profile.nickname; //카카오 닉네임
                const email = kakao_account.email //카카오 이메일

                console.log('nickname', nickname);
                console.log('email', email);
                //로그인 처리 구현


                console.log(kakao_account);
                // this.login(kakao_account);
                
                // const userInfo = {
                //     nickname : kakao_account.profile.nickname,
                //     email : kakao_account.email,
                //     password : '',
                //     account_type : 2,
                // }

                  // axios.post(`http://localhost:8080/account/kakao`,{
                  //     email : userInfo.email,
                  //     nickname : userInfo.nickname
                  // })
                  // .then(res => {
                  //   console.log(res);
                  //   console.log("데이터베이스에 회원 정보가 있음!");
                  // })
                  // .catch(err => {
                  //     console.log(err);
                  //   console.log("데이터베이스에 회원 정보가 없음!");
                  // })
                // console.log(userInfo);
                alert("로그인 성공!");
            },
            fail : error => {
                // this.$router.push("/errorPage");
                console.log(error);
            }
        })
    },
    kakaoLogout(){
     window.Kakao.Auth.logout((response) => {
       //로그아웃
       console.log(response);
     });
   }

    // async login(kakao_account) {
    //   await this.$api("/api/login", {
    //     param:[
    //       {email:kakao_account.email, nickname:kakao_account.profile.nickname, gender:kakao_account.gender},
    //       {nickname:kakao_account.profile.nickname, gender:kakao_account.gender}
    //       ]
    //   });

    //   this.$store.commit("user",kakao_account);
      
    //   this.$router.push({ path: 'test'});
    // }
  }
}
</script>