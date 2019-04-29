<template>
  <div id="app" class="wrapper">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

* { 
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

body {
  font-family: 'Montserrat', sans-serif;
  line-height: 1.4;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  position: relative;
}
</style>
