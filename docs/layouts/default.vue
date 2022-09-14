<template>
  <div id="app">
    <div class="hx-page">
      <div class="hx-page-body">
        <nav-container>
          <main-nav></main-nav>
          <sub-nav></sub-nav>
        </nav-container>

        <div class="hx-section scrollable-y">
          <div class="hx-section is-comfortable">
            <transition name="slide-x" mode="out-in">
              <nuxt />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavContainer from '@/components/NavContainer'
import MainNav from '@/components/MainNav'
import SubNav from '@/components/SubNav'
export default {
  components: {
    NavContainer,
    MainNav,
    SubNav,
  },
}
</script>

<style lang="scss" global>
/* html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
} */
// *,
// *:before,
// *:after {
//   box-sizing: border-box;
//   margin: 0;
// }
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-x-enter-active,
.slide-x-leave-active {
  transition: 0.5s;
}
.slide-x-enter {
  transform: translateX(-10%);
  opacity: 0;
}
.slide-x-leave-to {
  transform: translateX(10%);
  opacity: 0;
}
</style>
