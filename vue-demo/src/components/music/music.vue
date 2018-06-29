<template>
  <div id="music">
    <mu-tabs :value="activeTab" @change="handleTabChange" class="music-tabs">
        <mu-tab value="tab1" title="Single"/>
        <mu-tab value="tab2" title="Like"/>
        <mu-tab value="tab3" @active="handleActive" title="Singer"/>
    </mu-tabs>
    <div v-if="activeTab === 'tab1'" class="tab-content">
        <mu-list>
            <mu-list-item v-for="(item,i) in list" :key="i" :title="item.name" :describeText="item.singer" @click="goPlay(item)">
            <mu-icon value="play_circle_outline" slot="right"/>
            <mu-divider class="music-inset"/>
            </mu-list-item>
             
        </mu-list>
    </div>
    <div v-if="activeTab === 'tab2'" class="tab-content">
        2
    </div>
    <div v-if="activeTab === 'tab3'" class="tab-content">
        3
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      activeTab: 'tab1',
      contentHieght: document.documentElement.clientHeight - 112 + 'px',
      list:[
          {
            name:'玻璃之情',
            singer:'张国荣',
            src:'https://894620576.github.io/vue-demo/static/media/zgr_blzq.mp3',
            img:'https://894620576.github.io/vue-demo/static/img/zgr.jpg'
          },
          {
            name:'手掌印',
            singer:'江若琳',
            src:'https://894620576.github.io/vue-demo/static/media/szy.a4f3564.mp3',
            img:'https://894620576.github.io/vue-demo/static/img/jrl.jpg'
          },
          {
            name:'钟无艳',
            singer:'谢安琪',
            src:'https://894620576.github.io/vue-demo/static/media/xaq_zwy.mp3',
            img:'https://894620576.github.io/vue-demo/static/img/ms.jpg'
          },
          {
            name:'痴心换情深',
            singer:'周慧敏',
            src:'https://894620576.github.io/vue-demo/static/media/zhm_cxhqs.mp3',
            img:'https://894620576.github.io/vue-demo/static/img/zhm.jpg'
          },
          {
            name:'最爱',
            singer:'周慧敏',
            src:'https://894620576.github.io/vue-demo/static/media/zhm_za.mp3',
            img:'https://894620576.github.io/vue-demo/static/img/zhm.jpg'
          },
          {
            name:'旧情绵绵',
            singer:'张学友',
            src:'https://894620576.github.io/vue-demo/static/media/zxy_jqmm.mp3',
            img:'https://894620576.github.io/vue-demo/static/img/zxy.jpg'            
          },
          {
            name:'夕阳醉了',
            singer:'张学友',
            src:'https://894620576.github.io/vue-demo/static/media/zxy_xyzl.mp3',
            img:'https://894620576.github.io/vue-demo/static/img/zxy.jpg'            
          },
          
      ]
      
    }
  },
  mounted:function(){
    //this.getMusic()
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    goPlay(data){
      this.$router.push({
          name:'musicPlay',
            params: {
                data: data
            }
      })
    },
    handleActive () {
      //window.alert('tab active')
    }
  }
}
</script>

<style>
.music-tabs{ width: 100%; position: fixed!important; left: 0; top:56px;}
.tab-content{ padding-top: 48px; }
/* .tab-content{ padding: 15px;} */
.mu-divider.music-inset{ margin-left: 0; width: 150%; position: relative; top: 16px;}
.button{ line-height: 45px; margin:20px 0; text-align: center; position: relative; z-index: 3; }
.button:before{   content: '';
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid #F24A50;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 203%;
      height:90px;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: left top;
      transform-origin: left top;
}
/* .button:after{ display: block; content: '';height: 45px; position: absolute; left: 0; top: 0;
 border: 1px #fff solid; width: 100%; z-index: 2;   transform: scale(0.996,0.96); border-radius: 3px; } */
</style>
