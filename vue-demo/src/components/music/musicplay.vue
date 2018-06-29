<template>
  <div id="music_detail" class="music_detail"  :style="{ height: contentHieght }">

        <audio id="play1" ref="audio">
        <!-- <source src="https://894620576.github.io/vue-demo/static/media/szy.a4f3564.mp3" type="audio/mp3" /> -->
        <source :src="movieData.src" type="audio/mp3" />
        </audio>
    <mu-appbar :title="movieData.name" class="mu-appbar-top" :zDepth="0">
        <mu-icon-button icon="arrow_back" slot="left" @click="back"/>
        <mu-icon-menu icon="playlist_add_check" slot="right">
            <mu-menu-item title="菜单 1"/>
            <mu-menu-item title="菜单 2"/>
            <mu-menu-item title="菜单 3"/>
            <mu-menu-item title="菜单 4"/>
            <mu-menu-item title="菜单 5"/>
        </mu-icon-menu>
    </mu-appbar>  
    <div class="album_z album_z2"></div>  
    <div class="album_z"></div>  
    <div class="album">
        <img :src="movieData.img">
    </div>
    <mu-content-block>
        <div class="title">{{movieData.singer }}</div>
        <div class="min-title">{{ loadTip }}</div>
        <div class="jd">
            <div class="st">{{ currentTime }}</div>
            <div class="sd"><mu-slider v-model="value"  class="demo-slider"/></div>
            <div class="st et">{{ duration }}</div>
        </div>
        <div class="play-btn">
            <div class="st"><mu-icon value="skip_previous" color="white" :size="48"/></div>
            <div class="st" ><mu-icon :value="playIcon" color="white" :size="48" @click="playMusic()" /></div>
            <div class="st"><mu-icon value="skip_next" color="white" :size="48"/></div>
        </div>
    </mu-content-block>
  </div>
</template>
<script>
export default {
    data(){
        return{
            contentHieght: document.documentElement.clientHeight + 'px',
            movieData:{},
            value:0,
            loadTip:'TIPS',
            playIcon:'play_circle_outline',
            playIconPause:'play_circle_outline',
            duration:'0:00',//总播放时间0:00类型
            durationSeve:0,///存储当前播放的时间是int类型
            durationTime:0,//总播放时间int类型
            isplay:0,//判断是否已经开始播放
            playIn:false,//点击播放按钮状态
            currentTime:'0:00',///当前在播放的时间0:00类型
            resend:null//定时器

        }
        
    },
    mounted:function(){
        //this.playMusic()
        this.movieData = this.$route.params.data
        console.log(this.movieData)
    },
    methods:{
        back(){
            clearInterval(this.resend);
            window.history.back(-1)            
        },
        playMusic(){
            if(this.playIn){
                this.$refs.audio.pause()//暂停播放
                this.playIcon = 'play_circle_outline'
                this.playIn = false
                clearInterval(this.resend);//暂停播放清除计时器
            }else{
                this.$refs.audio.play()
                this.playIcon = 'pause_circle_outline'
                this.durationTime = parseInt(this.$refs.audio.duration)//获取总秒数
                this.duration = this.formatSeconds(this.durationTime)//总秒数转换成分钟
                this.playIn = true//是否在播放中
                this.currentTimes()//开始播放
            }
            //console.log(this.duration,this.currentTime,this.playIn)
        },
        currentTimes(a) {            
            this.resend = setInterval(() => {  
                this.isplay = this.$refs.audio.currentTime
                // console.log(this.isplay )
                if(this.isplay <= 0){  
                    this.durationSeve = 0  
                    this.loadTip = '歌曲缓冲中...'               
                    return 
                }
                this.loadTip = 'music' 
                this.durationSeve++
                if(this.durationSeve <= this.durationTime ){
                    this.currentTime = this.formatSeconds(this.durationSeve)
                    this.value = (this.durationSeve/this.durationTime).toFixed(5) * 100 //播放进度=当前播放的时间除以总播放时间再乘以百分比
                    //console.log(this.duration,this.formatSeconds(this.durationSeve),this.value)
                    //console.log(this.durationSeve,this.durationTime)
                }else{
                    this.durationSeve = 0 //播放完清零
                    this.playIcon = 'play_circle_outline'
                    this.playIn = false
                    clearInterval(this.resend); //清除定时器
                }
            },1000);
            
        },
        formatSeconds(value) {
            var theTime = parseInt(value);// 秒
            var theTime1 = 0;// 分
            var theTime2 = 0;// 小时
            if(theTime > 60) {
                theTime1 = parseInt(theTime/60);
                theTime = parseInt(theTime%60);
                    if(theTime1 > 60) {
                    theTime2 = parseInt(theTime1/60);
                    theTime1 = parseInt(theTime1%60);
                }
            }
            var result = "";
            if(theTime <= 9){
                result = "0:0"+parseInt(theTime)
            }else if(theTime > 9 && theTime < 59){
                result = "0:"+parseInt(theTime)
            }else{
                result = ""+parseInt(theTime)
            }            
            if(theTime1 > 0) {
                var p = parseInt(theTime1)                
                if(theTime <= 9){
                    result = p+":0"+parseInt(theTime)
                }else if(theTime > 9 && theTime < 59){
                    result = p+":"+parseInt(theTime)
                }else{
                    result = p+parseInt(theTime)
                }  
            }
            if(theTime2 > 0) {
                result = ""+parseInt(theTime2)+":"+result;
            }
            return result;
        }
    } 
    
}
</script>

<style scoped>
#music_detail{  background: linear-gradient(to right,#A56BEF,#B41AE6); position: fixed; overflow: hidden; left: 0; top: 0;
 width: 100%;  }
/* #music_detail{ position: fixed; overflow: hidden; left: 0; top: 0;  background:url(./timg.jpg) no-repeat; background-size: cover;
 filter:blur(0px);   } */
.mu-appbar-top{ position: fixed; top: 0; left: 0; width: 100%; z-index: 999; background: no-repeat;}
.mu-appbar-title{ margin-left: -48px; text-align: center; }
.music_detail .album{ width: 90%; margin: 85px auto 20px auto; position: relative; z-index: 2; height: 0; padding-top: 90%;
background: #7e57c2; background-size: contain; border-radius: 10px; }
.music_detail .album_z{ width: 90%; height: 20px; background: #000; position: absolute; left: 5%; z-index: 1;
border-radius: 10px 10px 0 0; margin-top: 74px; transform: scale(0.95); opacity: 0.2; }
.music_detail .album_z2{ margin-top: 65px; transform: scale(0.9);}
.music_detail .album img{ width: 100%;box-shadow: 0 3px 15px #7224A2; transform: translate(0,-100%); border-radius: 10px;  }
.music_detail .title{ font-size: 18px; text-align: center; color: #ffffff; }
.music_detail .min-title{ font-size: 14px; text-align: center; color: #ffffff; }
.music_detail .jd{ display: flex; margin-top: 15px; }
.music_detail .jd .sd{ width: 100%; }
.mu-slider-track{ background: #BF4EFF }
.music_detail .jd .st{ width: 60px; line-height: 25px; color: #ffffff; text-align: center; }
.music_detail .play-btn{ display: flex; text-align: center; margin-top: 5px; }
.music_detail .play-btn .st{ width: 100%; text-align: center; line-height: 65px}
.music_detail .play-btn .st i{width: 24px; }
#play1{ display: none;}

</style>