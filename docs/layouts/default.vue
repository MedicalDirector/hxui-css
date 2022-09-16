<template>
  <div id="app" class="main-wrapper">
    <nav-container>
      <main-nav></main-nav>
      <sub-nav></sub-nav>
    </nav-container>
    <main>
      <nuxt />
    </main>
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

<style lang="scss" scoped>
.main-wrapper {
  display: grid;
  grid-template-areas: 'sidebar main';
  grid-template-columns: auto 1fr;
}

main {
  grid-area: main;
  overflow: auto;
  min-height: 100vh;
}

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
