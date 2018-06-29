<template>
<div id="login">    
    <mu-text-field label="用户名" v-model="useName" labelFloat :errorText="useNameErrorText" /><br/>
    <mu-text-field label="密码" hintText="请输入密码" v-model="password" type="password" :errorText="passwordErrorText" labelFloat/><br/>
    <mu-raised-button class="demo-raised-button" :label="loginText" primary fullWidth @click="loginAction"/>
</div>
</template>
<script>
export default {
    data(){
        return {
            useName:'1',
            password:'1',
            useNameErrorText:'',
            passwordErrorText:'',
            loginIocn:'',
            loginText:'登陆',
            url:''
        }
    },
    mounted:function(){
        //this.url = this.$route.params.url
        console.log(this.$route)
    },
    methods:{
        loginAction(){
            if(this.useName==''){
                this.useNameErrorText='请输入用户名'
            }else if(this.password==''){
                this.useNameErrorText='请输入密码'
            }else{
                this.loginText='登陆中...'
                setTimeout(()=>{
                    localStorage.sessionToken="ChenHuaJie";
                    this.$router.push({
                        path: '/movie',
                    });
                    // this.loginText='登陆成功'
                    // if(typeof(this.url) == 'undefined'){
                    //     this.$router.push({
                    //         path: '/movie',
                    //     });
                    // }else{
                    //     this.$router.push({
                    //         path: this.url,
                    //     });
                    // }
                    
                },1500)
            }
        }
    },
    created(){
      //console.log(this.$route.query.url)  
    },
    watch:{
        useName:function (val) {
            if(val == ''){
                this.useNameErrorText='请输入用户名'
            }else{
                this.useNameErrorText=''
            }
        },
        password:function (val) {
            if(val == ''){
                this.useNameErrorText='请输入密码'
            }else{
                this.useNameErrorText=''
            }
        },
    }
  
}
</script>

<style>
#login{ width: 256px; margin: 100px auto; }
.demo-raised-button{ margin-top: 30px;}
</style>
