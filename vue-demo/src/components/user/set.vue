<template>
  <div>
    <mu-appbar title="SET" class="mu-appbar-top" :zDepth="0">
        <mu-icon-button icon="arrow_back" slot="left" @click="back"/>
        <!-- <mu-icon-menu icon="playlist_add_check" slot="right">
            <mu-menu-item title="菜单 1"/>
            <mu-menu-item title="菜单 2"/>
            <mu-menu-item title="菜单 3"/>
            <mu-menu-item title="菜单 4"/>
            <mu-menu-item title="菜单 5"/>
        </mu-icon-menu> -->
    </mu-appbar>        
    <mu-list>
      <mu-list-item disabled title="通知与信息设置" describeText="总是中断"/>
    </mu-list>
    <mu-divider />
    <mu-list>
      <mu-sub-header>声音开启设置</mu-sub-header>
      <mu-list-item disableRipple @click="handleToggle('events')" title="事件和提醒">
        <mu-switch v-model="events"  slot="right"/>
      </mu-list-item>
       <mu-divider inset/>
      <mu-list-item disableRipple @click="handleToggle('calls')" title="电话">
        <mu-switch v-model="calls" slot="right"/>
      </mu-list-item>
      <mu-divider inset/>
      <mu-list-item disableRipple @click="handleToggle('messages')" title="信息">
        <mu-switch v-model="messages" slot="right"/>
      </mu-list-item>
      
    </mu-list>
    <mu-list>
      <mu-sub-header>声音开启设置</mu-sub-header>
      <mu-list-item disableRipple @click="handleToggle('events')"  title="事件和提醒">
        <mu-checkbox v-model="events" slot="left"/>
      </mu-list-item>
      <mu-divider inset/>
      <mu-list-item disableRipple @click="handleToggle('calls')"  title="电话">
        <mu-checkbox v-model="calls" slot="left"/>
      </mu-list-item>
      <mu-divider class="inset-user"/>
      <mu-list-item disableRipple @click="handleToggle('messages')" title="信息">
        <mu-checkbox v-model="messages" slot="left"/>
      </mu-list-item>
      
    </mu-list>
    <div class="pd12"> <mu-raised-button @click="signOut" label="退出登陆" class="demo-raised-button"  fullWidth/></div>
    
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
</style>