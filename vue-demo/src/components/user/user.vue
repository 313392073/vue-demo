<template>
  <div class="demo-grid">
    <div class="head_pic">
      <img src="https://894620576.github.io/vue-demo/static/img/timg.5ac7093.jpg">
      <p>🔰。陈夕</p>
    </div>
    <div class="head_pic_mask2">
      <div class="head_pic_mask">
        <img src="https://894620576.github.io/vue-demo/static/img/timg.5ac7093.jpg">
        <p> &nbsp;</p>
      </div>  
    </div>
    
    <mu-content-block>
      <mu-row gutter>
        <mu-col width="25" tablet="30" desktop="25">
          <mu-icon value="audiotrack" color="#7e57c2" :size="48"/>
          <p class="p1">My Music</p>
          <p class="p2">15</p>
        </mu-col>
        <mu-col width="25" tablet="30" desktop="25">
          <mu-icon value="save_alt" color="#7e57c2" :size="48"/>
           <p class="p1">Download</p>
          <p class="p2">0</p>
        </mu-col>
        <mu-col width="25" tablet="30" desktop="25">
          <mu-icon value="favorite_border" color="#7e57c2" :size="48"/>
          <p class="p1">Like</p>
          <p class="p2">95</p>
        </mu-col>
        <mu-col width="25" tablet="30" desktop="25">
          <mu-icon value="play_circle_outline" color="#7e57c2" :size="48"/>
          <p class="p1">Play</p>
          <p class="p2">8</p>
        </mu-col>
      </mu-row>
    </mu-content-block>

    <mu-sub-header>专辑列表</mu-sub-header>
    <div class="z-list">
      <div class="row">
        <img src="https://894620576.github.io/vue-demo/static/img/timg.5ac7093.jpg"/>
        <span slot="title">这里是标题</span>
      </div>
      <div class="row">
        <img src="https://894620576.github.io/vue-demo/static/img/timg.5ac7093.jpg"/>
        <span slot="title">这里是标题</span>
      </div>
      <div class="row">
        <img src="https://894620576.github.io/vue-demo/static/img/timg.5ac7093.jpg"/>
        <span slot="title">这里是标题</span>
      </div>
      <div class="row">
        <img src="https://894620576.github.io/vue-demo/static/img/timg.5ac7093.jpg"/>
        <span slot="title">这里是标题</span>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      events: false,
      calls: false,
      messages: false,
      notifications: false,
      sounds: false,
      videoSounds: false
    }
  },
  methods: {
    back(){
      window.history.back(-1)
    },
    handleToggle (key) {
      this[key] = !this[key]
    },
    signOut(){
      localStorage.sessionToken = ''
      this.$router.push({
        path:'/login'
      })
    }
  },

}
</script>
<style scoped>
.inset-user{ margin-left: 16px}
.pd12{ padding: 16px;}
.demo-grid div[class*="col-"] { text-align: center;}
.demo-grid p{ margin: 0; }
.demo-grid .p2{ color: rgba(0,0,0,.54); }
.head_pic{ text-align: center; padding: 30px; position: relative; z-index: 6; }
.head_pic img{ width: 120px; border-radius: 50%;   height: 120px; }
.head_pic p{ line-height: 30px; color: #ffffff; text-shadow: 0 0 2px #000; font-size: 18px; }
.head_pic_mask2{ height: 216px; overflow: hidden; position: relative; margin-top: -216px; z-index: 1; margin-bottom: 17px; }
.head_pic_mask2 .head_pic_mask{ filter: blur(3px);height: 216px; position: relative; z-index: 1; }
.head_pic_mask img{ width: 100%;transform: translate(0,-30%); }
.z-list{ column-count: 2; margin: 0 16px; column-gap:15px;}
.z-list .row img{width: 100%; }
.z-list .row span{ line-height: 35px; margin-bottom: 10px; }
</style>