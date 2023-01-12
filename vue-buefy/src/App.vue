<template>
  <div id="app">
    <Hero msg="Hellow World"  title="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import Hero from './components/Hero.vue'

  export default {
    name: 'App',
    components: {
      Hero
    }
  }
</script>
