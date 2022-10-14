<template>
  <div id="app" class="layout-app">
    <aside
      class="area-app-nav hx-drawer__container"
      :class="{ bottom: isMobile }"
    >
      <main-nav></main-nav>
      <sub-nav></sub-nav>
    </aside>
    <main class="area-app-main">
      <nuxt />
    </main>
  </div>
</template>

<script>
import MainNav from '../components/MainNav.vue'
import SubNav from '../components/SubNav.vue'

export default {
  data() {
    return {
      isMobile: undefined,
    }
  },
  methods: {
    getDimensions() {
      const windowWidth = document?.documentElement.clientWidth

      if (windowWidth < 604) {
        // 38rem === 604px
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
  },
  mounted() {
    this.getDimensions()
    window.addEventListener('resize', this.getDimensions)
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions)
  },
  components: {
    MainNav,
    SubNav,
  },
}
</script>

<style lang="scss" scoped>
@use '@hxui/css/src/mixins/breakpoint';

.area-app-main {
  overflow: auto;
  @include breakpoint.mobile {
    height: calc(100vh - 3.5rem);
  }

  @include breakpoint.phablet {
    min-height: 100vh;
  }
}
</style>
