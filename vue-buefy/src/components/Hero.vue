<template>
  <div class="hero">
    <div class="hero-body">
      <div class="container">
        <p>{{ title }}</p>
        <p>{{ msg }}</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
