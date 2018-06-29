<template>
  <div id="movie_detail">
    <mu-appbar :title="movieData.title" class="mu-appbar-top">
        <mu-icon-button icon="arrow_back" slot="left" @click="back"/>
    </mu-appbar>
    <mu-content-block style="margin-top:56px;">
        {{movieData}}
    </mu-content-block>
    
  </div>
</template>
<script>
export default {
    data(){
        return{
            movieData:{},
        }
        
    },
    mounted:function(){
        this.movieData = this.$route.params.option
        console.log(this.movieData)
    },
    methods:{
        back(){
            window.history.back(-1)
        }
    } 
    
}
</script>

<style scoped>
.mu-appbar-top{ position: fixed; top: 0; left: 0; width: 100%; z-index: 999}
.mu-appbar-bottom{ position: fixed; bottom: 0; left: 0; width: 100%; z-index: 999}
.margin-content{ margin: 56px 0;}
</style>