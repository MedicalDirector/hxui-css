<template>
  <aside class="hx-nav-drawer">
    <span v-if="showNav">
      <slot></slot>
    </span>
    <transition name="fade">
      <div class="hx-overlay" v-if="showNav" @click="showNav = false"></div>
    </transition>
    <div
      class="hx-nav-navicon"
      :class="{ 'is-closed': !showNav }"
      @click="showNav = !showNav"
    >
      <i class="hx-icon icon-navicon"></i>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      showNav: true,
      windowWidth: 0,
    }
  },
  methods: {
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth
    },
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)
      this.getWindowWidth()
    })
    this.$on('toggleNav', () => {
      if (this.windowWidth < 1264) {
        this.showNav = !this.showNav
      }
    })
  },
}
</script>

<style lang="scss" scoped>
aside {
  grid-area: sidebar;
  position: sticky;
  display: block;
  max-height: 100vh;
  top: 0;
}
// .slide-left-enter-active,
// .slide-left-leave-active {
//   transition: 0.5s ease-in-out;
// }
// .slide-left-enter,
// .slide-left-leave-to {
//   transform: translateX(-100%);
// }

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
