<template>
  <div id="contactForm" class="m-t-30"> 
    <div class="columns is-centered">
        <div class="column is-6">
            <div class="box">
                <div class="container">
                    <h1 class="title">{{ title }}</h1>

                    <b-field label="Name">
                        <b-input placeholder="Please enter your name" />
                    </b-field>

                    <b-field label="E-mail">
                        <b-input type="email" placeholder="Please enter your name" />
                    </b-field>

                    <b-field label="Subject">
                        <b-input placeholder="Please enter a subject" />
                    </b-field>

                    <div class="field">
                        <strong><label for="content">Message</label></strong>
                        <div class="control">
                           <textarea class="input" placeholder="Please enter your message!"></textarea> 
                        </div>
                    </div>

                    <div class="button is-primary">
                        Submit
                    </div>
            
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  // name is the file name
  name: 'Contact',
  props: {
    title: String,
    msg: String
  }
}
</script>

<style>
    .m-t-30 {
        margin-top: 30px;
    }
</style>
