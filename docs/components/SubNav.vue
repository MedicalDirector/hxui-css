<template>
  <div class="contents">
    <div
      class="hx-drawer"
      :class="{
        collapsed: !isOpen,
        detached: isDetachable,
      }"
    >
      <button class="hx-nav-toggle" @click="toggleNav()">
        <span class="hx-icon-control">
          <i
            class="hx-icon"
            :class="{
              'icon-angle-left': isOpen,
              'icon-angle-right': !isOpen,
            }"
          ></i>
        </span>
      </button>

      <div class="hx-drawer__scroll-container" :inert="!isOpen">
        <nav class="hx-nav vertical pb-2">
          <expanding-nav-item
            v-for="(section, i) in sections"
            :key="i"
            :title="section.title"
            :items="section.items"
            @close-nav="closeNav()"
          >
          </expanding-nav-item>
        </nav>
      </div>
    </div>
    <button
      class="hx-overlay"
      v-if="isDetachable && isOpen"
      @click="toggleNav()"
      aria-label="collapse sidebar"
    ></button>
  </div>
</template>

<script>
import ExpandingNavItem from './ExpandingNavItem.vue'
import { NAV_ITEMS } from './constants.ts'

export default {
  data() {
    return {
      isOpen: true,
      isDetachable: false,
      sections: NAV_ITEMS,
    }
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen
    },
    closeNav() {
      if (this.isDetachable) {
        this.isOpen = false
      }
    },
    getDimensions() {
      const windowWidth = document?.documentElement.clientWidth

      if (!!windowWidth && windowWidth < 896) {
        // 56rem === 896px
        this.isDetachable = true
      } else {
        this.isDetachable = false
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
    ExpandingNavItem,
  },
}
</script>

<style lang="scss" scoped>
.hx-nav-toggle {
  top: 52px;

  :where(.hx-drawer__container).bottom & {
    top: unset;
    bottom: -40px;
    right: 22px;
    transform: rotate(-90deg);
  }
}
</style>
