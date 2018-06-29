<template>
  <div id="movie" :style="{ height: contentHieght }" @scroll="getScrollTop">
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
    <div class="movie-list" >
        <div v-for="(item,i) in list" :key="i">
            <div class="item" @click="goDetails(list[i])">
                <div class="img"><img :src="list[i].images.large"></div>
                <div class="text">
                    <div class="movie-name">{{list[i].title}}</div>
                    <div class="movie-rating">{{list[i].rating.average}}</div>
                    <div class="casts">
                        <div class="casts_title">主演</div>
                        <div class="casts_list">
                            <div class="casts_item">
                                {{list[i].casts[0].name}} &nbsp;
                                {{list[i].casts[1].name}} &nbsp;
                                {{list[i].casts[2].name}}
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <mu-divider class="movie-inset"/>    
        </div>
        
    </div>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>
<script>

import movieData from './json.json'
import moviePush from './push.json'

const BASEURL = 'http://www.glau9999.com/qianxi/'
export default {
    data(){
        const list = []
        for (let i in movieData.subjects) {
            list.push(movieData.subjects[i])
        }
        return {
            scroll:0,
            list,                   
            num: 10,
            trigger: null,
            loading: false,
            scroller: null,
            refreshing:false,
            contentHieght: document.documentElement.clientHeight - 112 + 'px',
            parameter:{
                data: { wid: 'ChenHuaJie' },
                global: { os: "", sign: "", device: "", token: "" }
            },
        }
    },
    mounted:function(){
        this.scroller = this.$el
        this.trigger = this.$el
        // console.log(movieData)
        // console.log(this.list)
    },
    methods:{
        delItem(index){
        this.list.splice(index,1)
        //console.log(this)
        },
        getScrollTop(e){
           this.scroll = this.$el.scrollTop
        },
        goDetails(data){
            this.$router.push({
                name:'movie_detail',
                params: {
                    option: data
                }
            })
        },
        refresh(){
            this.refreshing = true
            setTimeout(() => {
                const list = []
                for (let i in movieData.subjects) {
                    list.push(movieData.subjects[i])
                }
                this.list = list
                this.refreshing = false
            }, 2000)
        },
        testGetJson(){
            // axios.get('https://api.douban.com/v2/movie/top250?count=10&start=0')
            // .then(function (response) {
            //     console.log(response)
            // })
            // .catch(function (error) {
            //      console.log(error)
            // });
        },
        loadMore(){
           // console.log(this)
           if(this.loading) return
            this.loading = true
            setTimeout(() => {
                moviePush.title = moviePush.title + this.num
                for (let i = this.num; i < this.num + 10; i++) {
                    
                    this.list.push(moviePush)
                }
                this.num += 10
                this.loading = false
            }, 2000)
        },


    },
    activated(){
        this.$el.scrollTo(0, this.scroll);
        this.loading = false
    },   
    deactivated(){
        console.log('离开了')
        this.loading = true
    },

  
}
</script>
<style>
.movie-inset{ margin-left: 15px; }
#movie{ overflow-y: scroll; -webkit-overflow-scrolling: touch; overflow-x: hidden; }
.movie-list .item{ display: flex; padding: 10px 0 10px 15px; position: relative; }
.movie-list .item .text{ width: 100%; height: 136px; padding-left: 15px; position: relative; }
.movie-list .item .text .movie-name{font-size: 18px }
.movie-list .item .text .movie-rating{ position: absolute; right: 15px; font-size: 24px; top: 0; }
.movie-list .item .text .casts{ margin-top: 45px; color: rgba(0,0,0,.54); }
.movie-list .item .img{ height: 136px; }
.movie-list .item .img img{ height: 136px; }
.movie-list .item .casts .casts_list{ display: flex; }
.movie-list .item .casts .casts_list .casts_item{ width: 100%;}
.movie-list .item .casts .casts_list .casts_item img{ height: 45px; }
</style>

