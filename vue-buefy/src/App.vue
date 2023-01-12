<template>
  <div id="app">
    <Hero msg="Click Contact Us"  title="Buefy Contact Form"/>
    <Contact title="Contact Us"/>
  </div>
</template>

<script>
  import Hero from './components/Hero.vue'
  import Contact from './components/Contact.vue'

  export default {
    name: 'App',
    components: {
      Hero,
      Contact
    }
  }
</script>
