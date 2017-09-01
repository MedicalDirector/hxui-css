<template>
  <div id="app">
    <div class="hx-page">
      <div class="hx-page-body">

        <main-nav></main-nav>

        <sub-nav></sub-nav>

        <div class="hx-section scrollable-y">
          <div class="hx-section is-comfortable">

            <transition name="slide-x">
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

<style lang="scss" src="../static/scss/hxui.scss">

</style>
