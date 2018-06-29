<template>
<div class="margin-content" >
  <mu-appbar :title="bottomNav" class="mu-appbar-top">
    <mu-icon-button icon="menu" slot="left"/>
    <mu-icon-button icon="settings" slot="right" @click="link('/set')"/>
  </mu-appbar>
  <mu-drawer :open="open" :docked="docked" @close="toggle()">
    <mu-list @itemClick="docked ? '' : toggle()">
      <mu-list-item title="Menu Item 1"/>
      <mu-list-item title="Menu Item 2"/>
      <mu-list-item title="Menu Item 3"/>
      <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
    </mu-list>
  </mu-drawer>    
 <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  <mu-paper>
    <mu-bottom-nav :value="bottomNav" class="mu-appbar-bottom" shift @change="handleChange">
      <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"/>
      <mu-bottom-nav-item value="music" title="Music" icon="music_note"/>
      <mu-bottom-nav-item value="photos" title="Photos" icon="photo"/>
      <mu-bottom-nav-item value="user" title="user" icon="pets"/>
    </mu-bottom-nav>
  </mu-paper>
</div>    
</template>
<script>

export default {
  name: 'index',
  data () {
    return {
      docked: true,  
      open: false,
      contentHieght:null,    
      parameter:{
        data: { wid: 'ChenHuaJie' },
        global: { os: "", sign: "", device: "", token: "" }
      },
      bottomNav: 'movies',
      backUrl: '',
      
    }
  }, 
  mounted:function(){
    this.backBottomValue()
    console.log(this.$router.history.current.fullPath)
    this.backUrl = this.$router.history.current.fullPath
    if(this.backUrl == '/' || this.backUrl == '/index'){///根据路由地址判断 如果是index则自动跳转默认movie
      this.$router.push({
        name: 'movie'
      });
    }
  }, 
  methods:{
    backBottomValue(){
      const u = this.$router.history.current.fullPath
      if(u=='/movie'){
        this.bottomNav = 'movies'
      }else if(u=='/music'){
        this.bottomNav = 'music'
      }else{
        this.bottomNav = 'user'
      }
      
    },
    link(url){
      this.$router.push({
        path: url
      });
    },
    testGetJson(){
        axios.post(BASEURL+'api/product/getStore',this.parameter)
        .then(function (response) {
            
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    },
    handleChange (val) {
      this.bottomNav = val
      switch(this.bottomNav){
        case 'movies':
          this.$router.push({
            name: 'movie'
          });
        break
        case 'music':
          this.$router.push({
            name: 'music'
          });
        break
        case 'user':
          this.$router.push({
            name: 'user'
          });
        break
      }
    }
  },
  activated(){
    this.backBottomValue()
  }, 
  components:{
    
  },
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mu-appbar-top{ position: fixed; top: 0; left: 0; width: 100%; z-index: 999}
.mu-appbar-bottom{ position: fixed; bottom: 0; left: 0; width: 100%; z-index: 999}
.margin-content{ margin: 56px 0;}
</style>
