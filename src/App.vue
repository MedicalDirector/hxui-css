<template>
  <div id="app">
    <div class="hx-page">
      <div class="hx-page-body">

        <main-nav></main-nav>

        <sub-nav></sub-nav>

        <div class="hx-section scrollable-y">
          <div class="hx-section is-comfortable">

            <transition name="slide-x" mode="out-in">
              <router-view></router-view>
            </transition>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav'
import SubNav from '@/components/SubNav'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    MainNav,
    SubNav
  },
  methods: {
  }
}
</script>

<style lang="scss" src="../static/scss/hxui.scss"></style>
<style lang="css">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
.slide-x-enter-active, .slide-x-leave-active {
  transition: .5s;
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
