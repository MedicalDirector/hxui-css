<template>
  <aside
    class="hx-sidebar has-blue-gradient is-active"
    :class="{ 'is-minified': isMini }"
  >
    <ul class="hx-nav hx-nav-vertical hx-flex-auto">
      <li class="hx-nav-item hx-nav-brand">
        <svg class="hxui-logo is-white">
          <use xlink:href="~/assets/images/hxui.svg#hxui"></use>
        </svg>
      </li>
      <li
        class="hx-nav-item"
        v-for="item in mainNavItems"
        v-bind:key="item.name"
      >
        <a
          class="hx-nav-link"
          :href="item.link"
          :class="{
            'is-active': item.link === 'https://hxui.io',
            'is-disabled': item.status === 'disabled',
          }"
        >
          <i class="hx-icon" :class="item.icon"></i>
          <span class="ml-1">{{ item.name }}</span>
        </a>
      </li>
    </ul>
    <ul class="hx-nav hx-nav-vertical is-bottom">
      <li class="hx-nav-item">
        <a
          class="hx-nav-link"
          href="https://github.com/MedicalDirector/hxui-css/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="hx-icon icon-chat-bubble"></i>
          <span class="ml-1">Feedback</span>
        </a>
      </li>
      <li class="hx-nav-item">
        <a class="hx-nav-link" @click="toggleNav">
          <i class="hx-icon icon-more"></i>
          <span class="ml-1">Collapse</span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      isMini: true,
      mainNavItems: [
        {
          name: 'HTML & CSS',
          link: 'https://hxui.io',
          icon: 'icon-html-css',
          status: 'active',
        },
        {
          name: 'Angular',
          link: 'https://hxui.io/angular',
          icon: 'icon-angular',
          status: 'active',
        },
      ],
    }
  },
  methods: {
    toggleNav() {
      this.isMini = !this.isMini
    },
  },
}
</script>

<style lang="scss" scoped>
.hxui-logo {
  max-height: 2rem;
  &.is-white {
    fill: white;
  }
}
</style>
