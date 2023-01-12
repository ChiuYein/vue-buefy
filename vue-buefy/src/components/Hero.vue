<template>
  <div class="hero is-primary is-fullheight is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">{{ title }}</h1>
        <p class="is-size-5">{{ msg }}</p>
        <a href="#contactForm" class="button m-t-10">Contact Us</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name is the file name
  name: 'Hero',
  props: {
    title: String,
    msg: String
  }
}
</script>

<style>
    .m-t-10 {
        margin-top: 10px;
    }
</style>
