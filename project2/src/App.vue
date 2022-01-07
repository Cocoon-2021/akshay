<template>
  <div id="app">
    <blp msg="Resume Builder Application"/>
    <work msg1=""/>
  </div>
</template>

<script>
import blp from './components/blp.vue'
import work from './components/work.vue'

export default {
  name: 'App',
  components: {
    blp,
    work
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
