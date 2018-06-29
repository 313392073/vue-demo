<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{inputValue}}</div>
    <select v-model="inputValue">
      <option v-for="value in list" :key="value.name" :value="value.sex">
        name:{{ value.name }}        
      </option>
    </select>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'this is title',
      inputValue:'women',
      list:[
        {
          name:'JK',
          sex:'women'
        },
        {
          name:'JK2',
          sex:'women1'
        },
        {
          name:'JK3',
          sex:'women2'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
