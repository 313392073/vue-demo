import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import movie from '@/components/movie/movie'
import music from '@/components/music/music'
import movie_detail from '@/components/movie/detail'
import login from '@/components/login'
import user from '@/components/user/user'
import set from '@/components/user/set'
import musicPlay from '@/components/music/musicplay'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        keepAlive: true // 需要被缓存
      },
      children:[
        {
          path: 'movie',
          name: 'movie',
          component: movie,
          meta: {
            keepAlive: true // 需要被缓存
          },          
        },
        {
          path: 'user',
          name: 'user',
          component: user,
          meta: {
            keepAlive: true // 需要被缓存
          },          
        },
        {
          path: 'music',
          name: 'music',
          component: music,
          meta: {
            keepAlive: true // 需要被缓存
          },
        },
        
        
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/movie_detail',
      name: 'movie_detail',
      component: movie_detail,
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/musicPlay',
      name: 'musicPlay',
      component: musicPlay,
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/set',
      name: 'set',
      component: set
    },
  ]
})
