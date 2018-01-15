<template>
  <div class="hx-nav-drawer">
    <transition name="slide-left">
      <span v-if="showNav"><slot></slot></span>
    </transition>
    <transition name="fade">
      <div class="hx-overlay" v-if="showNav" @click="showNav = false"></div>
    </transition>
    <div class="hx-nav-navicon" :class="{ 'is-closed' : !showNav }" @click="showNav = !showNav">
      <i class="hx-icon icon-navicon"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showNav: true,
      windowWidth: 0
    }
  },
  methods: {
    getWindowWidth (event) {
      this.windowWidth = document.documentElement.clientWidth
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)
      this.getWindowWidth()
    })
    this.$on('toggleNav', () => {
      if (this.windowWidth < 1264) {
        this.showNav = !this.showNav
      }
    })
  }
}
</script>

<style lang="scss">
.slide-left-enter-active, .slide-left-leave-active {
  transition: .5s ease-in-out;
}
.slide-left-enter, .slide-left-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active, .fade-leave-active {
  transition: .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
