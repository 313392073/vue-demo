// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'



import 'muse-ui/dist/muse-ui.css'
Vue.config.productionTip = false
Vue.use(MuseUI)
router.beforeEach((to, from, next) => {
  console.log(to.fullPath)
  if(to.fullPath=='/login'){
    next()
    return
  }
  if (localStorage.sessionToken == undefined || localStorage.sessionToken =='' ) {
    next({
      path:'/login',
      params: {
        url: to.fullPath
      }
    });
    return
  }  
  next();

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
