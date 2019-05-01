<template>
  <div id="app" class="wrapper">
    <Header/>
    <transition
        name="fade"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
      <router-view/>
    </transition>
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
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
}
</script>

<style lang="scss">
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

.clear {
  clear: both;
}

.breadcrumb {
  font-size: 12px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
}

.breadcrumb img {
  height: 10px;
  padding: 0px 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
